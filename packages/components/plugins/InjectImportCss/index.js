export default function myPlugin() {
    return {
        name: 'inject-import-css',
        generateBundle (options, allBundle) {
            // allBundle数据格式
            // {
            //     [chunkName1]: bundler1
            //     [chunkName2]: bundler2
            // }
            const chunkNameList = Object.keys(allBundle)
            for (let chunkName of chunkNameList) {
                if (chunkName.endsWith('.js')) {
                    const bundler = bundleObj[chunkName]
                    this.emitFile({
                        type: 'asset',
                        fileName: chunkName,
                        source: `import './index.css'
                        ${bundler.code}
                        `
                    })
                }
            }
        }
    }
}