
import { defineConfig, UserConfigExport, UserConfig, BuildOptions, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer"
// import { UserConfig } from "vitest"
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from "unocss"
import InjectImportCss from './plugins/InjectImportCss'
import typescript from '@rollup/plugin-typescript'
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
    // typescript({
    //     rootDir: `./src`, // 项目根目录，如果这里分模块打包，则根目录变成模块入口
    //     outDir:`./dist/lib`,
    //     declaration: true,
    //     declarationDir: `./dist/lib`,
    // }),
    react(),
    UnoCSS(),
    visualizer() as PluginOption,
    InjectImportCss(),
    UnoCSS({
      presets: [presetUno(), presetAttributify(), presetIcons()]  // ?
    }),
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
      formats: ['cjs'], // , 'umd', 'iife', 'cjs'
      // fileName: 'pink-ui',
      fileName: 'index',
    },
    assetsInlineLimit: 0, // kb
    rollupOptions: {    
      external: ['react', 'react-dom', 'classnames', 'antd'],
      output: {
        dir: './dist/lib',
        format: 'cjs',
        globals: {
          react: 'React',
          ['react-dom']: 'react-dom',
          classnames: 'classnames',
          antd: 'antd'
        },
        extend: true,
        // assetFileNames: './dist/[name]-[hash][extname]'
        // assetFileNames: () => 'index.css'
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
      plugins: [],
    },
    outDir: './dist/lib',
  },
}
console.log(1111111)
// https://vitejs.dev/config/
export default defineConfig(config)
