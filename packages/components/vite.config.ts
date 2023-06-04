import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import path from 'path'

import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url)
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url))

const resolvePath = (str: string) => path.resolve(__dirname, str);


export default defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    //压缩
    //minify: false,
    lib: {
        entry: resolvePath('./src/esEntry.ts'),
        //name: "PinkUI",
        //fileName: format => `index.js`,
    },
    rollupOptions: {
      //忽略打包vue文件
      external: ['react', 'react-dom', 'classnames', 'antd'],
      input: ["./src/esEntry.ts"],
      output: [
        {

          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name]",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          assetFileNames: () => 'index.css',
          //配置打包根目录
          dir: "./dist/es",
          extend: true,
          preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
          globals: {
            react: 'React',
            ['react-dom']: 'react-dom',
            classnames: 'classnames',
            antd: 'antd'
          },
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].cjs.js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./dist/lib",
        },
      ],
    }
  },
  plugins: [react()],
});
