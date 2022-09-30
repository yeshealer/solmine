import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { Modal } from 'react-responsive-modal';
import {
    HeaderBody,
    HeaderLink,
    HeaderContent
} from './style'
import { ImageBtn } from '../style'
import { HeaderTitle } from '../Constant'

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <Icon icon="eva:close-outline" width="30" height="30" />
    )
    return (
        <HeaderBody>
            <HeaderContent>
                <img src='assets/logo.png' alt='logo' />
                <HeaderLink className='hidden lg:flex'>
                    {HeaderTitle.map((header) => {
                        return (
                            <div
                                className={`${location.pathname === ('/' + header.link) && 'shiny-link'} cursor-pointer text-base lg:text-lg xl:text-base 2xl:text-xl`}
                                onClick={() => navigate(`/${header.link}`)}
                                key={header.link}
                            >
                                {header.name}
                            </div>
                        )
                    })}
                </HeaderLink>
                <div className='hidden lg:flex'>
                    <ImageBtn>Connect</ImageBtn>
                </div>
                {/* </div> */}
                <div className='bg-transparent hover:bg-[#FFFFFF30] rounded-md transition-all duration-500 p-1 cursor-pointer block lg:hidden' onClick={() => onOpenModal()}>
                    <Icon icon="entypo:menu" className='w-[25px] md:w-[30px] h-[25px] md:h-[30px] text-white' />
                </div>
            </HeaderContent>
            <Modal
                open={open}
                onClose={onCloseModal}
                classNames={{
                    modal: 'w-[90%] rounded-xl block lg:hidden modal-bg'
                }}
                closeIcon={closeIcon}
            >
                <div className='flex flex-col w-full overflow-hidden relative'>
                    {HeaderTitle.map((header) => {
                        return (
                            <div
                                className={`${location.pathname === ('/' + header.link) && 'shiny-link'} text-white cursor-pointer text-base lg:text-lg xl:text-xl`}
                                onClick={() => navigate(`/${header.link}`)}
                                key={header.link}
                            >
                                {header.name}
                            </div>
                        )
                    })}
                </div>
            </Modal>
        </HeaderBody>
    )
}
