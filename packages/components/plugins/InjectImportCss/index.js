/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-06-03 13:20:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-24 21:43:13
 */
export default function myPlugin() {
    return {
        name: 'inject-import-css',
        generateBundle (options, allBundle) {
            // allBundle数据格式
            // {
            //     [chunkName1]: bundler1
            //     [chunkName2]: bundler2
            // }
            const keys = Object.keys(allBundle)
            for (let chunkName of keys) {
                if (chunkName.endsWith('.js')) {
                    const bundler = allBundle[chunkName]
                    const moduleName = bundler.facadeModuleId
                    this.emitFile({
                        type: 'asset',
                        fileName: chunkName,
                        source: `import './index.css'\n${bundler.code}`
                    })
                }
            }
        }
    }
}