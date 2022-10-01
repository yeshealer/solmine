import Atropos from 'atropos/react';
import Carousel from "react-multi-carousel";
import { Icon } from '@iconify/react';
import { ImageBtn } from '../style';
import {
    HomeBody,
    Content,
    LaunchStatusCard,
    LaunchStatusCardGroup,
    Title,
    LaunchMainCardGroup,
    LaunchMainCardLeft,
    LaunchMainCardRight,
    InputGroup,
    SubTitle
} from './style'
import "react-multi-carousel/lib/styles.css";

const LaunchPage = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1280, min: 800 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="w-[500px]">
                <button className={currentSlide === 0 ? 'disable' : 'absolute -left-[25px] top-[55px]'} onClick={() => previous()}>
                    <Icon icon="bxs:left-arrow-alt" color="#00e9fd" width="30" height="30" />
                </button>
                <button onClick={() => next()} className="absolute -right-[25px] top-[55px]">
                    <Icon icon="bxs:right-arrow-alt" color="#00e9fd" width="30" height="30" />
                </button>
            </div>
        );
    };
    return (
        <HomeBody>
            <img src='assets/launch-bg.png' alt='Homepage background' className='bg-container' />
            <Atropos shadow={false} highlight={false} className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[550px] 2xl:h-[550px] relative mt-20">
                <img
                    src='assets/atropos-1.png'
                    data-atropos-offset="-10"
                    alt=''
                    draggable={false}
                    className='absolute'
                />
                <img
                    src='assets/atropos-2.png'
                    data-atropos-offset="-5"
                    alt=''
                    draggable={false}
                    className='absolute w-[80px] sm:w-[110px] xl:w-[120px] 2xl:w-[180px] top-20'
                />
                <img
                    src='assets/atropos-3.png'
                    data-atropos-offset="5"
                    alt=''
                    draggable={false}
                    className='absolute right-0 top-32 w-[160px] sm:w-[240px] xl:w-[270px] 2xl:w-[400px]'
                />
                <img
                    src='assets/atropos-4.png'
                    data-atropos-offset="10"
                    alt=''
                    draggable={false}
                    className='absolute bottom-20 left-10 w-[200px] sm:w-[250px] xl:w-[300px] 2xl:w-[400px]'
                />
            </Atropos>
            <Content>
                <LaunchStatusCardGroup>
                    <LaunchStatusCard>
                        <Title>TOTAL USERS</Title>
                        <input type="text" id="total_user" className="w-4/5 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 text-center font-['Nippo-light'] outline-none mt-3" placeholder="2" required />
                    </LaunchStatusCard>
                    <LaunchStatusCard>
                        <Title>CURRENT TVL</Title>
                        <input type="text" id="current_tvl" className="w-4/5 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 text-center font-['Nippo-light'] outline-none mt-3" placeholder="0 SOL" required />
                    </LaunchStatusCard>
                    <LaunchStatusCard>
                        <Title>TOTAL DAILY APY</Title>
                        <input type="text" id="total_daily_apy" className="w-4/5 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 text-center font-['Nippo-light'] outline-none mt-3" placeholder="%" required />
                    </LaunchStatusCard>
                </LaunchStatusCardGroup>
                <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-20 shadow-lg w-[200px] sm:w-[400px] 2xl:w-auto' draggable={false} />
                <LaunchMainCardGroup>
                    <LaunchMainCardLeft className='pt-10'>
                        <Title>MINING PORTAL</Title>
                        <InputGroup>
                            <SubTitle>YOUR WALLET</SubTitle>
                            <input type="text" id="your_wallet" className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="0 SOL" required />
                        </InputGroup>
                        <InputGroup>
                            <SubTitle>SOL INVESTED</SubTitle>
                            <input type="text" id="sol_invested" className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="SOL" required />
                        </InputGroup>
                        <InputGroup>
                            <SubTitle>MINERS PURCHASED</SubTitle>
                            <input type="text" id="miners_purchased" className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="0" required />
                        </InputGroup>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-5 shadow-lg w-[100px] sm:w-[300px]' draggable={false} />
                        <div className='flex items-center w-4/5 justify-between'>
                            <div className='flex flex-col items-center w-full'>
                                <input type="text" id="miners_purchased" className="w-9/10 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="0 SOL" required />
                                <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB]'>APPROVE SOL</button>
                            </div>
                            <div className='flex flex-col items-center w-full'>
                                <input type="text" id="miners_purchased" className="w-9/10 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="0 SOL" required />
                                <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB]'>DEPOSIT SOL</button>
                            </div>
                        </div>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-5 shadow-lg w-[100px] sm:w-[300px]' draggable={false} />
                        <InputGroup>
                            <SubTitle>ABOVE AVAILABLE REWARDS</SubTitle>
                            <input type="text" id="miners_purchased" className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="SOL" required />
                            <div className='w-1/2 flex justify-between mt-1'>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB]'>COMPOUND</button>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB]'>CLAIM (-80%)</button>
                            </div>
                        </InputGroup>
                        <InputGroup>
                            <SubTitle>COMPOUND TIMER</SubTitle>
                            <input type="text" id="miners_purchased" className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="" required />
                        </InputGroup>
                        <InputGroup>
                            <SubTitle>AUTO COMPOUNDER</SubTitle>
                            <div className='flex items-start mt-1 gap-2'>
                                <button className='font-["Nippo-light"] text-[17px] text-[#A2DDFE] border-[1px] border-[#A2DDFE] px-5 py-1'>Off</button>
                                <div className='flex flex-col items-center'>
                                    <button className='font-["Nippo-light"] text-[17px] text-[#A2DDFE] border-[1px] border-[#A2DDFE] px-5 py-1'>ON</button>
                                    <SubTitle>5% TAX</SubTitle>
                                </div>
                            </div>
                        </InputGroup>
                    </LaunchMainCardLeft>
                    <LaunchMainCardRight>
                        <Title>OPERATIONS PORTAL</Title>
                        <InputGroup className='mt-5'>
                            <SubTitle>ASTRONAUTS LEFT</SubTitle>
                            <input type="text" id="your_wallet" className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="" required />
                        </InputGroup>
                        <ImageBtn className='mt-4'>Mint</ImageBtn>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-4 shadow-lg w-[100px] sm:w-[300px]' draggable={false} />
                        <div className='flex w-1/2 justify-between'>
                            <div className='w-[150px] relative'>
                                <Carousel
                                    responsive={responsive}
                                    itemClass="flex justify-center break-words"
                                    containerClass="carousel-container w-full"
                                    removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
                                    className="partner-container"
                                    shouldResetAutoplay={false}
                                    customButtonGroup={<ButtonGroup />}
                                    renderButtonGroupOutside={true}
                                    swipeable
                                    draggable
                                    infinite
                                    ssr
                                >
                                    <img src='assets/launch-card-carousel.png' alt='Launch page right main card carousel' draggable={false} />
                                    <img src='assets/launch-card-carousel.png' alt='Launch page right main card carousel' draggable={false} />
                                    <img src='assets/launch-card-carousel.png' alt='Launch page right main card carousel' draggable={false} />
                                </Carousel>
                            </div>
                            <div className='grid grid-rows-3'>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5E8CFB]'>STAKE</button>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5E8CFB]'>UNSTAKE</button>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5E8CFB]'>APPROVE</button>
                            </div>
                        </div>
                    </LaunchMainCardRight>
                </LaunchMainCardGroup>
            </Content>
        </HomeBody>
    )
}

export default LaunchPage