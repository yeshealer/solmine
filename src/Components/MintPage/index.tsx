import React, { useState } from 'react'
import ReactSlider from "react-slider"
import { ImageBtn } from '../style'
import {
    MintBody,
    MintContent,
    Title,
    MintCard,
    CardBody,
    CardSection,
    CardText,
    Slider,
    TextGroup,
    PlusMinusGroup,
    Description,
    Note
} from './style'
import 'react-responsive-modal/styles.css';

export default function MintPage() {
    const [valueAstronauts, setValueAstronauts] = React.useState(0)
    const [valueCost, setValueCost] = React.useState(0)
    return (
        <MintBody>
            <img src='assets/mint-bg.png' alt='mint background' className='bg-container' />
            <img src='assets/mint-footer.png' alt='Mint page Footer background' className="absolute bottom-0 mint-footer-bg" />
            <MintContent>
                <img src='assets/mint-section-art.png' className='mint-main-art w-[250px] md:w-[360px] lg:w-[450px] xl:w-[360px] 2xl:w-auto' alt='mint page main art' />
                <Title>HIRE ASTRONAUTS</Title>
                <MintCard>
                    <img src='assets/rocket.png' alt='rocket' className='absolute xl:-left-[250px] 2xl:-left-[400px] bottom-40 w-[200px] 2xl:w-auto hidden xl:block' draggable={false} />
                    <img src='assets/earth.png' alt='earth' className='absolute hidden xl:-right-[250px] 2xl:-right-[400px] xl:block -bottom-10 w-[180px] 2xl:w-auto' draggable={false} />
                    <img src='assets/mint-card-top-bar.png' alt='mint page card top bar' className='w-[300px] lg:w-[400px] xl:w-[300px] 2xl:w-auto mt-4 lg:mt-16 hidden sm:block' draggable={false} />
                    <CardBody>
                        <CardSection>
                            <TextGroup>
                                <CardText className='mt-[27px]'>ASTRONAUT</CardText>
                                <CardText className='mt-[27px]'>1 SOL</CardText>
                            </TextGroup>
                            <Slider>
                                <ReactSlider
                                    step={1}
                                    min={0}
                                    max={75}
                                    className="w-full h-[5px] pr-2 bg-[#00F1D6] rounded-md cursor-grab"
                                    thumbClassName="absolute w-[12px] h-[12px] cursor-grab bg-[#00F1D6] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -top-[4px]"
                                    value={valueAstronauts}
                                    onChange={(value: number) => {
                                        setValueAstronauts(value)
                                    }}
                                />
                            </Slider>
                            <PlusMinusGroup>
                                <div className="p-0 border border-stone-800 rounded-md px-2 cursor-pointer"><CardText>-</CardText></div>
                                01
                                <div className="p-0 border border-stone-800 rounded-md px-2 cursor-pointer"><CardText>+</CardText></div>
                            </PlusMinusGroup>
                            <TextGroup className='mt-1 lg:mt-3 xl:mt-3 2xl:mt-5'>
                                <CardText>COST</CardText>
                                <div className='flex items-center gap-2'>
                                    <img src='assets/sol-icon.png' alt='solana icon' />
                                    <CardText>1 SOL</CardText>
                                </div>
                            </TextGroup>
                            <Slider>
                                <ReactSlider
                                    step={1}
                                    min={0}
                                    max={75}
                                    className="w-full h-[5px] pr-2 bg-[#00F1D6] rounded-md cursor-grab"
                                    thumbClassName="absolute w-[12px] h-[12px] cursor-grab bg-[#00F1D6] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -top-[4px]"
                                    value={valueCost}
                                    onChange={(value: number) => {
                                        setValueCost(value)
                                    }}
                                />
                            </Slider>
                            <div className='flex items-center justify-between 
                                mt-1 lg:mt-3 xl:mt-3 2xl:mt-5 
                                text-[#00F1D6] font-["Nippo-light"] text-base 
                                lg:text-lg w-full'
                            >
                                <div>ASTRONAUTS LEFT</div>
                                <div>3000</div>
                            </div>
                            <ImageBtn className='mt-5 sm:mt-1 lg:mt-3 xl:mt-3 2xl:mt-8'>Mint</ImageBtn>
                        </CardSection>
                        <img src='assets/mint-card-image.png' alt='MintCard' className='w-[180px] md:w-[220px] lg:w-[250px] xl:w-[220px] 2xl:w-auto' draggable={false} />
                    </CardBody>
                </MintCard>
                <Description>Astronaut Crew Members can help you mine SOL at a faster rate. You may mint as many as you like! However, only 4 NFTs are available to stake. Each astronaut gives your operation +1% onto your daily APY! (Max +4%)</Description>
                <Description>The collection will consist of 3000 NFTs and there is a 1% chance of minting an ALIEN!. Aliens give you a +1% boost in daily APY as well as a % of Solmine fees.</Description>
                <Note>Note: The utility of these NFTs doesn't stop there. This is just the beginning of a broader ecosystem. This collection will provide bonuses in a number of upcoming projects. As the ecosystem develops, the demand for these NFTs will grow increasingly stronger! Roadmap info in the Whitepaper!</Note>
            </MintContent>
        </MintBody>
    )
}
