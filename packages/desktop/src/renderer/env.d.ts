import type { ElectronAPI } from "../preload/types"

declare global {
  interface Window {
    api: ElectronAPI
    __BOLT__?: {
      deepLinks?: string[]
    }
  }
}
