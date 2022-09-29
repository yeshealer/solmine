import React from 'react'
import { FooterLink } from '../Constant'
import {
    FooterBody,
    FooterContent
} from './style'

export default function Footer() {
    return (
        <FooterBody>
            <FooterContent>
                <div>
                    <img src='assets/footer-logo.png' alt='footer logo' className='w-[200px] lg:w-auto' />
                    <div className='text-[#BFBFBF] text-sm lg:text-[15px] font-["Satoshi"]'>Solana’s First P2E NFT Staking Miner.</div>
                </div>
                <div className='flex justify-start sm:justify-center mt-10 sm:mt-0'>
                    <div>
                        <div className='text-lg xl:text-xl font-["Satoshi"] text-white font-bold'>LINKS</div>
                        <div className='text-base xl:text-lg font-["Satoshi"] text-[#BFBFBF] mt-[10px]'>Contact Us</div>
                        <div className='text-base xl:text-lg font-["Satoshi"] text-[#BFBFBF] mt-[10px]'>Launch</div>
                    </div>
                </div>
                <div className='flex justify-start md:justify-end mt-10 sm:mt-0'>
                    <div>
                        <div className='text-lg xl:text-xl font-["Satoshi"] text-white font-bold'>FOLLOW US</div>
                        <div className='flex items-center gap-4 mt-3'>
                            {FooterLink.map((footer) => {
                                return (
                                    <img src={`assets/${footer}.png`} alt={footer} className="cursor-pointer w-[35px] lg:w-auto h-[35px] lg:h-auto" key={footer} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </FooterContent>
            <div className='text-[#898787] text-sm lg:text-[15px] w-full text-center py-[10px]'>Copyright © 2022 Solmine Project. All rights reserved.</div>
        </FooterBody>
    )
}