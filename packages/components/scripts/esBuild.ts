/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-07-01 17:42:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-02 03:45:38
 */

import fs from "fs-extra"
import path from "path"
import {config} from "../vite.config.module"

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
            return isDir && fs.readdirSync(componentDir).includes("index.tsx");
        })
        .map((name) => {
            moduleNames.push(name)
            return name
        })
        .forEach(async (name) => {
            // console.log('--name2---', name)
            // const outDir = path.resolve(config.build.outDir + '/es', name);
            // console.log('-outDir-name-', outDir, '  ' , name)
            // const custom = {
            //     lib: {
            //         entry: path.resolve(srcDir, name),
            //         name, // 导出模块名
            //         fileName: `index`,
            //         formats: [`es`],
            //     },
            //     outDir,
            // };
            // // console.log('--custom---', custom)
            // const eachBuild ={...config.build, ...custom}
            // const eachConfig = {...config, build: eachBuild}
            // //onsole.log('--eachConfig---', JSON.stringify(eachConfig))
            // console.log('--eachConfig---', eachConfig)
            const configObj = config(name)
            console.log('--configObj---', configObj)
            await build(defineConfig(configObj as UserConfig) as InlineConfig);
        });
        console.log('-moduleNames--', moduleNames)
        const indexContent: string = moduleNames.reduce((pre: string, cur: string) => {
            return `${pre}
                    export { default as ${cur} } from './${cur}/index.js'
                    `
        }, '')
        fs.outputFile(
            path.resolve('./dist/es', `index.js`),
            indexContent,
            `utf-8`
        );
        fs.outputFile(
            path.resolve('./dist/es', `index.d.ts`),
            indexContent,
            `utf-8`
        );
};

buildAll();
