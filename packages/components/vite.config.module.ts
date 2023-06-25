/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-05-08 11:29:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-24 22:54:45
 * @FilePath: /theseus-cooperation/Users/hrtps/Documents/Projects/pink-ui/packages/components/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
                    assetFileNames: () => 'index.css'
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
