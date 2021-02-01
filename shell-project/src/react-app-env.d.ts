declare module '*.less' {
  const less: any
  export default less
}

declare module globalThis {
  export interface Window {}
  export type ValueOf<T> = T[keyof T]
}