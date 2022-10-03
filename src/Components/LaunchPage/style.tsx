import { wrapn } from "wrapn";

export const HomeBody = wrapn('div')`
    flex flex-col items-center justify-center 
    w-screen 
    mb-12
    relative
    overflow-x-clip
    overflow-y-visible
`

export const Content = wrapn('div')`
    w-full max-w-5xl 2xl:max-w-7xl flex flex-col items-center
`

export const LaunchStatusCardGroup = wrapn('div')`
    lg:w-full mt-32 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0
`

export const LaunchStatusCard = wrapn('div')`
    launch-status-card
    w-[300px] h-[140px] 2xl:w-[372px] 2xl:h-[185px]
    flex flex-col items-center justify-center
`

export const Title = wrapn('div')`
    font-["Nippo-light"] 2xl:font-["Nippo"] text-2xl 2xl:text-[30px] text-[#A3DDFF]
`

export const LaunchMainCardGroup = wrapn('div')`
    flex flex-col lg:flex-row gap-10
`

export const LaunchMainCardLeft = wrapn('div')`
    launch-main-card-left
    w-[560px] h-auto 2xl:w-[625px] 2xl:h-[872px] bg-contain bg-no-repeat
    flex flex-col items-center justify-center
`

export const LaunchMainCardRight = wrapn('div')`
    launch-main-card-right
    w-[560px] h-auto 2xl:w-[625px] 2xl:h-[872px] bg-contain bg-no-repeat
    flex flex-col items-center justify-center
`

export const InputGroup = wrapn('div')`
    w-full flex flex-col items-center mt-1 2xl:mt-3
`

export const SubTitle = wrapn('div')`
    text-[17px] text-[#A3DDFF] font-["Nippo-light"]
`

export const FooterCardGroup = wrapn('div')`
    lg:w-4/5 flex justify-between mb-16 flex-col lg:flex-row gap-5 lg:gap-0
`

export const FooterCard = wrapn('div')`
    launch-footer-card
    bg-contain bg-no-repeat
    w-[380px] h-[220px] 2xl:w-[456px] 2xl:h-[269px]
    flex flex-col items-center justify-center
`