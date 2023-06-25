/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-28 18:32:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-24 21:54:58
 */
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


const buildAll = async () => {
    // 全量打包
    //await build(defineConfig(config as UserConfig) as InlineConfig);
    // await build(defineConfig({}))

    const srcDir = path.resolve(__dirname, "../src/");
    console.log('--srcDir---', srcDir)
    fs.readdirSync(srcDir)
        .filter((name) => {
            // 只要目录不要文件，且里面包含index.ts
            const componentDir = path.resolve(srcDir, name);
            const isDir = fs.lstatSync(componentDir).isDirectory();
            return isDir && fs.readdirSync(componentDir).includes("index.tsx");
        })
        .forEach(async (name) => {
            const outDir = path.resolve(config.build.outDir + '/es', name);
            const custom = {
                lib: {
                    entry: path.resolve(srcDir, name),
                    name, // 导出模块名
                    fileName: `index`,
                    formats: [`es`, `umd`],
                },
                outDir,
            };
            const eachBuild ={...config.build, ...custom}
            const eachConfig = {...config, build: eachBuild}
            console.log('--eachConfig---', eachConfig)
            await build(defineConfig(eachConfig as UserConfig) as InlineConfig);

            fs.outputFile(
                path.resolve(outDir, `package.json`),
                `{
                    "name": "@pink-ui/components/${name}",
                    "main": "index.js",
                    "module": "index.js"
                }`,
                `utf-8`
            );
        });
};

buildAll();
