import fs from "fs-extra"
import path from "path"
import {config, UserConfigWithOutDir} from "../vite.config"
import { build, InlineConfig, defineConfig, UserConfig } from "vite"
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

const moduleNames: string[] = []
const buildAll = async () => {

    const srcDir = path.resolve(__dirname, "../src/");
    fs.readdirSync(srcDir)
        .filter((name) => {
            // 只要目录不要文件，且里面包含index.ts
            const componentDir = path.resolve(srcDir, name);
            const isDir = fs.lstatSync(componentDir).isDirectory();
            // console.log('--isDir---', isDir)
            // console.log('--componentDir---', componentDir)
            return isDir && fs.readdirSync(componentDir).includes("index.tsx");
        })
        .map((name) => {
            moduleNames.push(name)
            return name
        })
        .forEach(async (name) => {
            const outDir = path.resolve(config.build.outDir + '/es', name);
            console.log('-outDir-name-', outDir, '  ' , name)
            const custom = {
                lib: {
                    entry: path.resolve(srcDir, name),
                    name, // 导出模块名
                    fileName: `index`,
                    formats: [`es`],
                },
                outDir,
            };
            const eachBuild ={...config.build, ...custom}
            const eachConfig = {...config, build: eachBuild}
            await build(defineConfig(eachConfig as UserConfig) as InlineConfig);
            

            // fs.outputFile(
            //     path.resolve(outDir, `index.js`),
            //     `{
            //         "name": "@pink-ui/components/${name}",
            //         "main": "index.js",
            //         "module": "index.js"
            //     }`,
            //     `utf-8`
            // );
        });
        console.log('-moduleNames--', moduleNames)
        const indexContent: string = moduleNames.reduce((pre: string, cur: string) => {
            return `    ${pre}
                        export { default as ${cur} } from './${cur}'
                    `
        }, '')
        fs.outputFile(
                path.resolve(config.build.outDir + '/es', `index.js`),
                indexContent,
                `utf-8`
            );
        


    
};

buildAll();
