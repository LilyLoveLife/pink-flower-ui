/*
 * @Author: Lily lily.song@hrtps.com
 * @Date: 2023-05-08 11:29:24
 * @LastEditors: Lily lily.song@hrtps.com
 * @LastEditTime: 2023-05-31 19:02:35
 * @FilePath: /theseus-cooperation/Users/hrtps/Documents/Projects/pink-ui/packages/components/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig, UserConfigExport, UserConfig, BuildOptions, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer"
// import { UserConfig } from "vitest"
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss"
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
    react(),
    UnoCSS(),
    visualizer() as PluginOption
    // UnoCSS({
    //   presets: [presetUno(), presetAttributify(), presetIcons()]  // ?
    // }),
  ],
  optimizeDeps: {
    exclude: ['fsevents'],
  },
  build: {
    target: 'ESNext',
    sourcemap: true,
    lib: {
      entry: './src/allEntry.ts',
      name: 'PinkUI',
      formats: ['es'], // , 'umd', 'iife', 'cjs'
      fileName: 'pink-ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'classnames', 'antd'],
      output: {
        globals: {
          react: 'React',
          ['react-dom']: 'react-dom',
          classnames: 'classnames',
          antd: 'antd'
        },
        extend: true,
        format: 'es',
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
    },
    // optimizeDeps: {
    //   exclude: ['fevent']
    // },
    outDir: './dist',

  },
}
// https://vitejs.dev/config/
export default defineConfig(config)
