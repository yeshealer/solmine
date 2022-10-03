import { wrapn } from "wrapn";

export const HomeBody = wrapn('div')`
    flex flex-col items-center justify-center 
    w-screen 
    mb-12
    relative
    overflow-x-clip
    overflow-y-visible
`

export const MainContent = wrapn('div')`
    w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl flex flex-col items-center
`

export const DescriptionContent = wrapn('div')`
    w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl flex flex-col items-center px-5 lg:px-0 relative
`

export const Title = wrapn('div')`
    text-xl sm:text-[30px] lg:text-[35px] 2xl:text-[45px] font-["Nippo"] font-bold
`

export const Description = wrapn('div')`
    text-base sm:text-lg lg:text-[20px] 2xl:text-[25px] font-["Satoshi"] mt-5 z-10
`

export const LaunchReactContent = wrapn('div')`
    launch-ready
    w-[320px] h-[160px] sm:w-[500px] md:w-[600px] 2xl:w-[800px] sm:h-[250px] md:h-[300px] 2xl:h-[400px]
    w-full flex flex-col items-center justify-center
    mb-[60px] sm:mb-[100px] md:mb-[160px] lg:mb-[220px] 2xl:mb-[360px]
    relative
`