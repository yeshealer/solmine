import { wrapn } from 'wrapn'

export const ImageBtn = wrapn('button')`
    general-button 
    w-48 lg:w-60 xl:w-48 2xl:w-72 
    h-12 lg:h-16 xl:h-12 2xl:h-20 
    text-base lg:text-lg xl:text-base 2xl:text-xl
    animation-all duration-500
`

export const TransparentBtn = wrapn('button')`
    transparent-button
    w-40 lg:w-48 xl:w-36 2xl:w-56 
    h-10 lg:h-[51px] xl:h-[38px] 2xl:h-[56px] 
    text-base lg:text-lg xl:text-base 2xl:text-xl
    animation-all duration-500
`