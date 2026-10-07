export const size = ['small', 'medium', 'large'] as const
export type Size = (typeof size)[number]
