import React from 'react'
import Footer from '../../components/footer/Footer'
import Features from './Features'

import Hero from './Hero'
import Navbar from './Navbar'

interface Props {

}
const Landing: React.FC<Props> = () => {
    return (
        <>
        <div className="flex overflow-none items-center flex-col p-5 w-full bg-darkblue text-white">
            <Hero />
            <Features/>
        </div>
        <Footer/>
        </>
    );
}

export default Landing;