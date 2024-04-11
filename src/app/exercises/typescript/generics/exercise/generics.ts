// @ts-nocheck

function identity2<T>(arg: T): T {
  return arg
}

class Generic {
  foo?: number
  bar(x: number): number {
    return x
  }
}

class Generic2 {
  foo?: string
  bar(x: string): string {
    return x
  }
}
