declare module globalThis {
  export interface Window {
    __POWERED_BY_MICRO_PROJECT__: string
    __INJECT_MICRO_PROJECT__: string
  }
}

declare var  __webpack_public_path__: string