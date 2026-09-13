import { registerCustomTheme } from "@pierre/diffs"
import { BoltTheme } from "./marked-theme"

let registered = false

export function registerBoltTheme() {
  if (registered) return
  registered = true
  registerCustomTheme("Bolt", () => Promise.resolve(BoltTheme))
}
