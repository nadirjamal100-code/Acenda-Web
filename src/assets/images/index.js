const files = import.meta.glob('./*.webp', { eager: true, import: 'default' })
export const img = (name) => files[`./${name}.webp`]
