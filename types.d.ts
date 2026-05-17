// Ambient module declarations for runtime-only third-party packages.
// The OrbitCode IDE resolves these at runtime via esm.sh; for TypeScript
// we declare them as untyped so root tsc can resolve the imports.

declare module 'radix-ui'
declare module 'tailwind-merge'
declare module 'react-day-picker'

declare module 'class-variance-authority' {
  export function cva(...args: unknown[]): (...inputs: unknown[]) => string
  export type VariantProps<T> = Record<string, unknown>
}

declare module 'sonner' {
  export const Toaster: any
  export const toast: any
  export type ToasterProps = Record<string, unknown>
}
