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

