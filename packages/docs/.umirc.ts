/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-05-26 01:44:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-25 21:52:54
 */
// import { defineConfig } from 'dumi';

// export default defineConfig({
//   title: 'Pink-UI',
//   // mode: 'site',
//   mode: 'doc',
//   // more config: https://d.umijs.org/config
// });


import { defineConfig } from 'dumi';

// :root {
//   /* --theme-color: #5a80c0; */
// }

const style = `
:root {
  --theme-color: #fff;
}
`;

export default defineConfig({
  styles: [style],
  base: '/docs/',
  outputPath: 'docs',
  publicPath: '/docs/',

  resolve: {
    atomDirs: [
      { type: 'components', dir: 'components' },
    ],
  },

  themeConfig: {
    name: 'Pink-UI',
    logo: '',
    nav: [
      { title: '指南', link: '/getting-started' },
      { title: '组件', link: '/Button' },
      { title: '历史版本', link: '/version' },
    ],
  },
});
