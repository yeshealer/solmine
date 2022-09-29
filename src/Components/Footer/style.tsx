import { wrapn } from 'wrapn'

export const FooterBody = wrapn('div')`
    w-screen flex flex-col items-center justify-center footer-gradient divide-y divide-[#898787]
`

export const FooterContent = wrapn('div')`
    w-full xl:w-[1280px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10 px-10
`