import { wrapn } from 'wrapn'

export const MintBody = wrapn('div')`
    flex flex-col items-center justify-center 
    w-screen 
    mb-12
    relative
    overflow-x-clip
    overflow-y-visible
`

export const MintContent = wrapn('div')`
    w-full max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-[1280px] 
    flex flex-col items-center justify-center
    relative
`

export const Title = wrapn('div')`
    mint-title 
    text-[28px] sm:text-[32px] md:text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[90px]
    font-["Nippo"] leading-[122px] font-bold 
    text-[#A2DDFE] 
    -mt-16
`
export const MintCard = wrapn('div')`
    flex flex-col items-center relative
`

export const CardBody = wrapn('div')`
    mint-card-body 
    w-full sm:w-[635px] md:w-[750px] lg:w-[920px] xl:w-[820px] 2xl:w-[1150px]
    h-auto sm:h-[275px] md:h-[325px] lg:h-[400px] xl:h-[350px] 2xl:h-[500px] 
    -mt-1 
    pr-0 sm:p-[30px] md:p-[40px] xl:p-[40px] xl:px-[60px] 2xl:p-[50px] 2xl:pt-[62px] 2xl:pr-[73px] 2xl:pb-[71px] 2xl:pl-[136px] 
    flex flex-col-reverse sm:flex-row items-center justify-between 
    gap-0 sm:gap-12 lg:gap-20
`

export const CardSection = wrapn('div')`
    w-full flex flex-col items-center sm:items-stretch
`

export const CardText = wrapn('div')`
    font-["Nippo"] text-base lg:text-lg xl:text-base 2xl:text-lg font-bold text-[#00F1D6]
`

export const Slider = wrapn('div')`
    border border-stone-800 py-[10px] px-2 rounded-md w-[300px] sm:w-full
`

export const TextGroup = wrapn('div')`
    w-full flex items-center justify-between
`

export const PlusMinusGroup = wrapn('div')`
    flex items-center gap-8 
    text-lg lg:text-xl xl:text-lg 2xl:text-xl
    font-["Nippo"]
    mt-1 lg:mt-3 xl:mt-3 2xl:mt-5
    py-5 sm:py-0
`

export const Description = wrapn('div')`
    mt-6 lg:mt-12 
    max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-3xl 2xl:max-w-6xl 
    text-sm sm:text-base lg:text-lg xl:text-base 2xl:text-xl 
    leading-8 text-center 
    font-["Satoshi"]
    px-2
`

export const Note = wrapn('div')`
    mt-16 lg:mt-24 
    text-sm sm:text-base lg:text-lg xl:text-base 2xl:text-xl 
    leading-8 text-center text-[#B1ABAB]
    px-2
`