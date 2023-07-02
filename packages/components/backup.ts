/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-07-01 17:42:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-07-02 18:02:44
 */
// import { defineConfig, UserConfigExport, UserConfig, BuildOptions, type PluginOption } from 'vite'

// type UserConfigWithOutDir = UserConfig & 
// export type getBuildType<Config> = 'build' extends keyof UserConfig
//                             ? Config extends {build: infer TBuild}
//                               ? TBuild extends {outDir: infer TOutDir} ? TBuild : TBuild & {outDir: string}
//                               : (TBuild & {outDir: string})
//                             : {outDir: string}

// UserConfig & getBuildType<UserConfig>


// "husky": {
//     "hooks": {
//       "pre-commit": "lint-staged",
//       "commit-msg": "commitlint -e $GIT_PARAMS"
//     }
//   },


// "precommit": "lint-staged",

// pnpm --no -- commitlint --edit "$1"

// "prepare": "cd .. && cd .. && husky install packages/components/.husky"

// "prepare": "husky install",
// "precommit:components": "cd packages/components && pnpm run lint-staged"

// "config": {
//     "commitizen": {
//       "path": "./node_modules/cz-customizable"
      
//     }
//   }

// git commit --no-verify -m "xxx"

// "jest --bail --coverage --findRelatedTests"


//   "type": "module",

