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
    w-full max-w-7xl flex flex-col items-center
`

export const LaunchStatusCardGroup = wrapn('div')`
    w-full mt-32 grid grid-cols-3 justify-between gap-auto
`

export const LaunchStatusCard = wrapn('div')`
    launch-status-card
    w-[372px] h-[185px]
    flex flex-col items-center justify-center
`

export const Title = wrapn('div')`
    font-["Nippo"] text-[30px] text-[#A3DDFF]
`

export const LaunchMainCardGroup = wrapn('div')`
    flex gap-10
`

export const LaunchMainCardLeft = wrapn('div')`
    launch-main-card-left
    w-[625px] h-[872px]
    flex flex-col items-center justify-center
`

export const LaunchMainCardRight = wrapn('div')`
    launch-main-card-right
    w-[625px] h-[872px]
    flex flex-col items-center justify-center
`

export const InputGroup = wrapn('div')`
    w-full flex flex-col items-center mt-3
`

export const SubTitle = wrapn('div')`
    text-[17px] text-[#A3DDFF]
`