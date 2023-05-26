
// import type { AttributifyAttributes } from '@unocss/preset-attributify'
import presetAttributify, {
    AttributifyAttributes,
  } from 'unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}