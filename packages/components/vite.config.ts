import { defineConfig, UserConfigExport, UserConfig, BuildOptions, type PluginOption } from 'vite'

import react from '@vitejs/plugin-react'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

const resolvePath = (str: string) => path.resolve(__dirname, str);
export type TBuildType = BuildOptions & {outDir: string}
export type UserConfigWithOutDir = UserConfig & {build: TBuildType}
export const config: UserConfigWithOutDir = {
  plugins: [react()],
  build: {
    lib: {
      entry: './src/allEntry.ts',
      name: "PinkUI",
      fileName: format => `index.js`,
    },
    rollupOptions: {
        external: ["react", "react-dom", "antd", "echarts"],
        output: {
          globals: {
            react: "react",
            antd: "antd",
            "react-dom": "react-dom",
            "echarts": "echarts",
          },
        },  
        plugins: [
          // typescript({
          //   target: "es2015", // 这里指定编译到的版本，
          //   // rootDir: resolvePath("src/"),
          //   // declaration: true,
          //   // declarationDir: resolvePath("dist"),
          //   exclude: resolvePath("node_modules/**"),
          //   allowSyntheticDefaultImports: true,
          // }),
        ],
    },
    outDir: './dist',
  },
}
export default defineConfig(config)
