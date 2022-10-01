import React, { useEffect } from 'react'
import { LaunchPage } from '../Components'

interface LaunchProps {
    setBgColor: any
}

const Launch: React.FC<LaunchProps> = ({
    setBgColor
}) => {
    useEffect(() => {
        setBgColor('#170231')
    })
    return (
        <LaunchPage />
    )
}

export default Launch