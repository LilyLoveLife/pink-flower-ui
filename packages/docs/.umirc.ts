import { defineConfig } from 'dumi';

const style = `
:root {
  --theme-color: #fff;
}
`;

export default defineConfig({
  styles: [style],
  base: '/docs1/', // 路由前缀，部署到非根目录时需要配置
  outputPath: 'docs', // 打包生成文件路径，绝对地址
  publicPath: '/docs2/', // 静态资源文件路径
  resolve: {
    atomDirs: [{ type: 'components', dir: 'components' }],
    includes: ['./src'],
  },
 // favicon: 'public/icon.png',
  // logo: 'icon.png',
  navs: [
    { title: '指南', link: '/getting-started' },
    { title: '组件', link: '/components/button' },
    { title: '历史版本', link: '/version' },
  ],
  locales: [['en-US', '英文'], ['zh-CN', '中文']],
});
