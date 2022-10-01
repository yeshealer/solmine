import React, { useEffect } from 'react'
import { MintPage } from '../Components'

interface MintProps {
    setBgColor: any
}

const Mint: React.FC<MintProps> = ({
    setBgColor
}) => {
    useEffect(() => {
        setBgColor('#00081B')
    })
    return (
        <MintPage />
    )
}

export default Mint