declare global {
  const BOLT_VERSION: string
  const BOLT_CHANNEL: string
}

export const InstallationVersion = typeof BOLT_VERSION === "string" ? BOLT_VERSION : "local"
export const InstallationChannel = typeof BOLT_CHANNEL === "string" ? BOLT_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
