/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-06-03 13:20:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-03 23:05:12
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
            //console.log('--allBundle----', JSON.stringify(allBundle))
            const keys = Object.keys(allBundle)
            for (let chunkName of keys) {
                if (chunkName.endsWith('.js')) {
                    //console.log('--chunkNames----', keys)
                    // console.log('--allBundle[chunkName]----', JSON.stringify(allBundle[chunkName]))
                    const bundler = allBundle[chunkName]
                    const moduleName = bundler.facadeModuleId
                    this.emitFile({
                        type: 'asset',
                        fileName: chunkName,
                        // @pink-ui/components/dist/es/Button/index.css
                        // source: `import '@pink-ui/components/dist/es/Button/index.css'
                        source: `import './index.css'\n${bundler.code}
                        `
                    })
                }
            }
        }
    }
}