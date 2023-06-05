/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-05-08 11:29:24
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-06-05 15:18:47
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
export const config: UserConfigWithOutDir = {
  plugins: [
    // typescript({}),
    react(),
    UnoCSS(),
    visualizer() as PluginOption,
    InjectImportCss(),
    // UnoCSS({
    //   presets: [presetUno(), presetAttributify(), presetIcons()]  // ?
    // }),
  ],
  optimizeDeps: {
    exclude: ['fsevents'],
  },
  // output: [{
	// 	// 出口文件
	// 	dir: './dist/es', //path.dirname(pkg.module),
  //   fileName: format => `index.${format}.js`,
  //   name: "test",
	// 	format: "es", // es模块导出，支持按需加载
	// 	//name: pkg.name,
	// 	exports: "named", // 指定导出模式（自动、默认、命名、无）
	// 	preserveModules: true, // 保留模块结构
	// 	preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
	// }],
  build: {
    target: 'ESNext',
    sourcemap: true,
    lib: {
      entry: './src/esEntry.ts',
      name: 'PinkUI',
      formats: ['es'], // , 'umd', 'iife', 'cjs'
      fileName: 'pink-ui',
    },
    rollupOptions: {    
      external: ['react', 'react-dom', 'classnames', 'antd'],
      output: {
        dir: './dist',
        format: 'es',
        globals: {
          react: 'React',
          ['react-dom']: 'react-dom',
          classnames: 'classnames',
          antd: 'antd'
        },
        extend: true,
        // exports: 'named',
        // preserveModules: true,
        // entryFileNames: '[name].js',
       //  preserveModulesRoot: "./dist", // 将保留的模块放在根级别的此路径下
        //format: 'es',
        //dir: './dist',
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
    // optimizeDeps: {
    //   exclude: ['fevent']
    // },
    outDir: './dist',

  },
}
// https://vitejs.dev/config/
export default defineConfig(config)
