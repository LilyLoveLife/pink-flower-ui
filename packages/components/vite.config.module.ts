/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-07-01 17:42:40
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-07-07 10:26:49
 */

import { defineConfig, UserConfigExport, UserConfig, BuildOptions, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer"
// import { UserConfig } from "vitest"
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss"
import InjectImportCss from './plugins/InjectImportCss'
import typescript from '@rollup/plugin-typescript'
import path from "path"
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import copyPlugin from 'rollup-plugin-copy'
// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

// type UserConfigWithOutDir = UserConfig & 
// export type getBuildType<Config> = 'build' extends keyof UserConfig
//                             ? Config extends {build: infer TBuild}
//                               ? TBuild extends {outDir: infer TOutDir} ? TBuild : TBuild & {outDir: string}
//                               : (TBuild & {outDir: string})
//                             : {outDir: string}
export type TBuildType = BuildOptions & {outDir: string}
export type UserConfigWithOutDir = UserConfig & {build: TBuildType}
// UserConfig & getBuildType<UserConfig>
export const config = (moduleName: string) => {
    return {
        resolve: {
            // 忽略后缀名的配置选项, 添加 tsx. 选项时要记得原本默认忽略的选项也要手动写入
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
        },
        plugins: [
            typescript({
                rootDir: `./src/${moduleName}`, // 项目根目录，这里分模块打包，则根目录变成模块入口
                outDir:`./dist/es/${moduleName}`,
                declaration: true,
                declarationDir: `./dist/es/${moduleName}`,
            }),
            react(),
            UnoCSS(),
            visualizer() as PluginOption,
            InjectImportCss(),
        ],
        optimizeDeps: {
            exclude: ['fsevents'],
        },
        build: {
            target: 'ESNext',
            sourcemap: true,
            lib: {
                entry: `./src/${moduleName}`,
                name: moduleName, // 导出模块名
                fileName: `index`,
                formats: [`es`],
            },
            assetsInlineLimit: 0, // kb
            rollupOptions: {    
                external: ['react', 'react-dom', 'classnames', 'antd'],
                output: {
                    dir: `./dist/es/${moduleName}`,
                    format: 'es',
                    globals: {
                        react: 'React',
                        ['react-dom']: 'react-dom',
                        classnames: 'classnames',
                        antd: 'antd'
                    },
                    extend: true,
                    chunkFileNames: () => `${moduleName}.js`,
                    // assetFileNames: () => `assets/[name]-[hash][extname]`
                    // assetFileNames: () => 'index.css',
                    // assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
                },
                treeshake: {
                    moduleSideEffects: [
                        "build/es/**/style/*",
                        "build/lib/**/style/*",
                        "build/es/**/*.css",
                        "build/es/**/*.scss",
                        "*.css",
                        "*.less"
                    ]
                },
                plugins: [
                    // copyPlugin({
                    //     targets: [{ src: 'src/assets/*', dest: 'dist/img' }],
                    // })
                    // typescript({}),

                    // outDir:'./dist/types',
                    // declaration: true,
                    // declarationDir: './dist/types',
                
                ],
            },
            outDir: `./dist/es/${moduleName}`,
        },
    }
}
