import React, { useEffect } from 'react'
import { Homepage } from '../Components'

interface HomeProps {
    setBgColor: any
}

const Home: React.FC<HomeProps> = ({
    setBgColor
}) => {
    useEffect(() => {
        setBgColor('#00081B')
    })
    return (
        <Homepage />
    )
}

export default Home
