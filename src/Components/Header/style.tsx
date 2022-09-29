import { wrapn } from 'wrapn'

export const HeaderBody = wrapn('div')`
    w-screen flex justify-center bg-transparent
`

export const HeaderContent = wrapn('div')`
    w-full max-w-4xl lg:max-w-6xl xl:max-w-[1280px] 
    flex items-center justify-between 
    px-4 md:px-10 pt-7
`

export const HeaderLink = wrapn('div')`
    flex gap-6 lg:gap-10
`