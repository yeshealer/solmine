import React, { useState } from 'react';
import Atropos from 'atropos/react';
import Carousel from "react-multi-carousel";
import ReactSlider from "react-slider"
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
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
    SubTitle,
    FooterCardGroup,
    FooterCard
} from './style'
import 'react-toastify/dist/ReactToastify.css';
import "react-multi-carousel/lib/styles.css";

interface StyledTrackProps {
    index: number
}

const StyledTrack = styled.div<StyledTrackProps>`
    top: 0;
    bottom: 0;
    background: ${props => (props.index === 2 ? '#004C60' : props.index === 1 ? '#004C60' : '#00C7FC')};
    border-radius: 999px;
`;

const LaunchPage = () => {
    const [isOn, setIsOn] = useState(false)

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
                <button className={currentSlide === 0 ? 'disable' : 'absolute -left-[30px] top-[50px]'} onClick={() => previous()}>
                    <Icon icon="bxs:left-arrow-alt" color="#00e9fd" width="30" height="30" />
                </button>
                <button onClick={() => next()} className="absolute -right-[30px] top-[50px]">
                    <Icon icon="bxs:right-arrow-alt" color="#00e9fd" width="30" height="30" />
                </button>
            </div>
        );
    };

    const Track = (props: any, state: any) => <StyledTrack {...props} index={state.index} />;

    const notify = () => toast("Wow so easy!", {
        theme: 'dark'
    });
    return (
        <HomeBody>
            <img src='assets/launch-bg.png' alt='LaunchPage background' className='bg-container' />
            <img src='assets/launch-footer-bg.png' alt='LaunchPage background' className='absolute -bottom-[100px] sm:-bottom-[150px] lg:-bottom-[250px] home-footer-bg' />
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
                    data-atropos-offset="-4"
                    alt=''
                    draggable={false}
                    className='absolute w-[120px] sm:w-[140px] xl:w-[160px] 2xl:w-[180px] top-16 left-10'
                />
                <img
                    src='assets/atropos-3.png'
                    data-atropos-offset="4"
                    alt=''
                    draggable={false}
                    className='absolute -right-6 w-[270px] sm:w-[300px] xl:w-[350px] 2xl:w-[400px]'
                />
                <img
                    src='assets/atropos-4.png'
                    data-atropos-offset="10"
                    alt=''
                    draggable={false}
                    className='absolute bottom-20 sm:bottom-32 left-2 w-[300px] sm:w-[380px] lg:w-[400px] 2xl:w-[550px]'
                />
            </Atropos>
            <Content>
                <LaunchStatusCardGroup>
                    <LaunchStatusCard>
                        <Title>TOTAL USERS</Title>
                        <div className="w-4/5 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 text-center font-['Nippo-light'] outline-none mt-3">10</div>
                    </LaunchStatusCard>
                    <LaunchStatusCard>
                        <Title>CURRENT TVL</Title>
                        <div className="w-4/5 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 text-center font-['Nippo-light'] outline-none mt-3">2 SOL</div>
                    </LaunchStatusCard>
                    <LaunchStatusCard>
                        <Title>TOTAL DAILY APY</Title>
                        <div className="w-4/5 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 text-center font-['Nippo-light'] outline-none mt-3">15%</div>
                    </LaunchStatusCard>
                </LaunchStatusCardGroup>
                <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-20 shadow-lg w-[200px] sm:w-[400px] 2xl:w-auto' draggable={false} />
                <LaunchMainCardGroup>
                    <LaunchMainCardLeft className='pt-28 pb-16 2xl:pb-0 2xl:pt-10'>
                        <Title>MINING PORTAL</Title>
                        <InputGroup>
                            <SubTitle>YOUR WALLET</SubTitle>
                            <div className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1">0 SOL</div>
                        </InputGroup>
                        <InputGroup>
                            <SubTitle>SOL INVESTED</SubTitle>
                            <div className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1">4 SOL</div>
                        </InputGroup>
                        <InputGroup>
                            <SubTitle>MINERS PURCHASED</SubTitle>
                            <div className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1">0</div>
                        </InputGroup>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-5 shadow-lg w-[180px] sm:w-[300px]' draggable={false} />
                        <InputGroup>
                            <input type="text" id="miners_purchased" className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1" placeholder="0 SOL" required />
                            <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB] underline-effect-button' onClick={notify}>DEPOSIT SOL</button>
                        </InputGroup>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-5 shadow-lg w-[180px] sm:w-[300px]' draggable={false} />
                        <InputGroup>
                            <SubTitle>ABOVE AVAILABLE REWARDS</SubTitle>
                            <div className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1">SOL</div>
                            <div className='w-1/2 flex justify-between mt-1'>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB] underline-effect-button'>COMPOUND</button>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB] underline-effect-button'>CLAIM</button>
                            </div>
                        </InputGroup>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-5 shadow-lg w-[180px] sm:w-[300px] block sm:hidden' draggable={false} />
                        <InputGroup>
                            <SubTitle>COMPOUND TIMER</SubTitle>
                            <div className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1">0</div>
                        </InputGroup>
                        <InputGroup>
                            <SubTitle>AUTO COMPOUNDER</SubTitle>
                            <div className='flex items-start mt-1 gap-2'>
                                <button className={`font-["Nippo-light"] text-[17px] ${isOn ? 'text-[#A2DDFE]' : 'bg-[#A2DDFE] text-[#170231]'} border-[1px] border-[#A2DDFE] px-5 py-1`} onClick={() => setIsOn(!isOn)}>Off</button>
                                <div className='flex flex-col items-center'>
                                    <button className={`font-["Nippo-light"] text-[17px] ${isOn ? 'bg-[#A2DDFE] text-[#170231]' : 'text-[#A2DDFE]'} border-[1px] border-[#A2DDFE] px-5 py-1`} onClick={() => setIsOn(!isOn)}>ON</button>
                                    <SubTitle>5% TAX</SubTitle>
                                </div>
                            </div>
                        </InputGroup>
                    </LaunchMainCardLeft>
                    <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-0 shadow-lg w-[200px] sm:w-[300px] block sm:hidden self-center' draggable={false} />
                    <LaunchMainCardRight className='pt-28 pb-16 2xl:pb-0 2xl:pt-10'>
                        <Title>OPERATIONS PORTAL</Title>
                        <InputGroup className='mt-3'>
                            <SubTitle>ASTRONAUTS LEFT</SubTitle>
                            <div className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-1">5</div>
                        </InputGroup>
                        <div className=''>
                            <ImageBtn className='my-1 2xl:mt-3 relative'>Mint</ImageBtn>
                        </div>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-3 shadow-lg w-[200px] sm:w-[300px]' draggable={false} />
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
                                    <div className='launch-nft-medium'>
                                        <img src='assets/launch-nft.jpg' alt='Launch page right main card carousel' draggable={false} className="w-[150px]" />
                                    </div>
                                    <div className='launch-nft-medium'>
                                        <img src='assets/launch-nft.jpg' alt='Launch page right main card carousel' draggable={false} className="w-[150px]" />
                                    </div>
                                    <div className='launch-nft-medium'>
                                        <img src='assets/launch-nft.jpg' alt='Launch page right main card carousel' draggable={false} className="w-[150px]" />
                                    </div>
                                </Carousel>
                            </div>
                            <div className='grid grid-rows-2'>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5E8CFB] underline-effect-button h-10'>STAKE</button>
                                <button className='font-["Nippo-light"] text-[17px] text-[#5E8CFB] underline-effect-button h-10'>UNSTAKE</button>
                            </div>
                        </div>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-3 shadow-lg w-[200px] sm:w-[300px]' draggable={false} />
                        <div className='mt-3 grid grid-cols-2 sm:grid-cols-4 w-4/5'>
                            <div className='flex flex-col items-center'>
                                <div className='launch-nft'>
                                    <img src='assets/launch-nft.jpg' alt='Launch page right main card carousel' draggable={false} className="w-[100px]" />
                                </div>
                                <div className='flex items-end -mt-3'>
                                    <img src='assets/lightning.png' alt='Lightning' />
                                    <div className='flex flex-col items-center'>
                                        <ReactSlider
                                            minDistance={10}
                                            defaultValue={[100]}
                                            className="w-full h-[3px] pr-2 rounded-md cursor-grab"
                                            trackClassName="h-[3px] pr-2 rounded-md cursor-grab"
                                            thumbClassName="absolute w-[10px] h-[10px] cursor-grab bg-[#00F1D6] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 -top-[4px]"
                                            renderTrack={Track}
                                            withTracks
                                            pearling
                                            disabled
                                        />
                                        <div className='flex items-center mt-1 gap-1'>
                                            <Icon icon="ant-design:clock-circle-filled" color="#00e9fd" width="16" height="16" />
                                            <div className='text-xs'>12:00:30</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className='launch-nft'>
                                    <img src='assets/launch-nft.jpg' alt='Launch page right main card carousel' draggable={false} className="w-[100px]" />
                                </div>
                                <div className='flex items-end -mt-3'>
                                    <img src='assets/lightning.png' alt='Lightning' />
                                    <div className='flex flex-col items-center'>
                                        <ReactSlider
                                            minDistance={10}
                                            defaultValue={[50]}
                                            className="w-full h-[3px] pr-2 rounded-md cursor-grab"
                                            trackClassName="h-[3px] pr-2 rounded-md cursor-grab"
                                            thumbClassName="absolute w-[10px] h-[10px] cursor-grab bg-[#00F1D6] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 -top-[4px]"
                                            renderTrack={Track}
                                            withTracks
                                            pearling
                                            disabled
                                        />
                                        <div className='flex items-center mt-1 gap-1'>
                                            <Icon icon="ant-design:clock-circle-filled" color="#00e9fd" width="16" height="16" />
                                            <div className='text-xs'>06:00:30</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className='launch-nft'>
                                    <img src='assets/launch-nft.jpg' alt='Launch page right main card carousel' draggable={false} className="w-[100px]" />
                                </div>
                                <div className='flex items-start -mt-3'>
                                    <img src='assets/lightning.png' alt='Lightning' />
                                    <div className='flex flex-col items-center mt-[6px]'>
                                        <div className='w-full'>
                                            <ReactSlider
                                                minDistance={10}
                                                defaultValue={[0]}
                                                className="w-full h-[3px] pr-2 rounded-md cursor-grab"
                                                trackClassName="h-[3px] pr-2 rounded-md cursor-grab"
                                                thumbClassName="absolute w-[10px] h-[10px] cursor-grab bg-[#00F1D6] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 -top-[4px]"
                                                renderTrack={Track}
                                                withTracks
                                                pearling
                                                disabled
                                            />
                                        </div>
                                        <div className='flex items-start mt-1 gap-1'>
                                            <Icon icon="ant-design:clock-circle-filled" color="#00e9fd" width="16" height="16" />
                                            <div className='flex flex-col items-center'>
                                                <div className='text-xs'>00:00:00</div>
                                                <div className='text-xs'>timeout</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center'>
                                <div className='launch-nft'>
                                    <img src='assets/launch-nft.jpg' alt='Launch page right main card carousel' draggable={false} className="w-[100px]" />
                                </div>
                                <div className='flex items-end -mt-3'>
                                    <img src='assets/lightning.png' alt='Lightning' />
                                    <div className='flex flex-col items-center'>
                                        <ReactSlider
                                            minDistance={10}
                                            defaultValue={[100]}
                                            className="w-full h-[3px] pr-2 rounded-md cursor-grab"
                                            trackClassName="h-[3px] pr-2 rounded-md cursor-grab"
                                            thumbClassName="absolute w-[10px] h-[10px] cursor-grab bg-[#00F1D6] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 -top-[4px]"
                                            renderTrack={Track}
                                            withTracks
                                            pearling
                                            disabled
                                        />
                                        <div className='flex items-center mt-1 gap-1'>
                                            <Icon icon="ant-design:clock-circle-filled" color="#00e9fd" width="16" height="16" />
                                            <div className='text-xs'>12:00:30</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src='assets/mint-divider.png' alt='Mintpage Divider' className='mt-5 shadow-lg w-[200px] sm:w-[300px]' draggable={false} />
                        <InputGroup>
                            <SubTitle>FORCED WITHDRAW</SubTitle>
                            <div className='font-["Nippo-light"] font-thin text-[#A2DDFE]'>(BASE INVESTMENT)</div>
                            <div className='font-["Nippo-light"] font-thin text-[#A2DDFE]'>50% TAX</div>
                            <input type="text" id="your_wallet" className="w-1/2 bg-transparent border-[2px] border-[#5930E2] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-3" placeholder="0 SOL" required />
                            <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB] mt-2 underline-effect-button'>WITHDRAW SOL</button>
                        </InputGroup>
                    </LaunchMainCardRight>
                </LaunchMainCardGroup>
                <img src='assets/mint-divider.png' alt='Mintpage Divider' className='my-10 shadow-lg w-[200px] sm:w-[400px] 2xl:w-auto' draggable={false} />
                <FooterCardGroup>
                    <FooterCard>
                        <SubTitle>REFERRAL REWARDS</SubTitle>
                        <div className='font-["Nippo-light"] text-base font-thin'>3% Referrer</div>
                        <div className='font-["Nippo-light"] text-base font-thin'>1% Referred</div>
                        <div className="w-2/3 bg-transparent border-[2px] border-[#835EFF] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-3">8 SOL</div>
                        <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB] mt-2 underline-effect-button'>COMPOUND</button>
                    </FooterCard>
                    <FooterCard>
                        <SubTitle>REFERRAL LINK</SubTitle>
                        <div className="w-2/3 bg-transparent border-[2px] border-[#835EFF] text-white text-lg focus:ring-blue-500 focus:border-blue-500 block p-1 text-center font-['Nippo-light'] outline-none mt-3">https://solmine.is</div>
                        <button className='font-["Nippo-light"] text-[17px] text-[#5EBCFB] mt-2 underline-effect-button'>(CLICK TO COPY)</button>
                    </FooterCard>
                </FooterCardGroup>
            </Content >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </HomeBody >
    )
}

export default LaunchPage