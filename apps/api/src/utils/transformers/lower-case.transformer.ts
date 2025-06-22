import { TransformFnParams } from 'class-transformer/types/interfaces'
import { MaybeType } from '../types/maybe.type'

// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
export const lowerCaseTransformer = (params: TransformFnParams): MaybeType<string> => params.value?.toLowerCase().trim()
