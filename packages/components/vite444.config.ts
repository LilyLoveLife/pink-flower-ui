/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-05-08 11:29:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-04 02:25:13
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
import pkg from "./package.json"

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
export const config = {
	input: "./src/esEntry.ts", // 入口文件
	output: [{
		// 出口文件
		dir: './dist/es', //path.dirname(pkg.module),
        fileName: format => `index.${format}.js`,
        name: "test",
		format: "es", // es模块导出，支持按需加载
		//name: pkg.name,
		exports: "named", // 指定导出模式（自动、默认、命名、无）
		preserveModules: true, // 保留模块结构
		preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
	}],
    rollupOptions: {      
        external: ['react', 'react-dom', 'classnames', 'antd'],
        output: {
          dir: path.dirname('./dist/es'),
        }
    },
	plugins: [
		// 自动将dependencies依赖声明为 externals
		// externals({
		// 	devDeps: false,
		// }),
		// 处理外部依赖
		// resolve(),
		// 支持基于 CommonJS 模块引入
		// commonjs(),
		// 支持 typescript，并导出声明文件
		typescript({
			outDir: "./dist/es",
			declaration: true,
			declarationDir: "./dist/es",
		}),
		// 支持 scss，并添加前缀
		// postcss({
		// 	plugins: [autoprefixer()],
		// }),
		// // 清除调试代码
		// strip()
	]
}
// https://vitejs.dev/config/
export default defineConfig(config)
