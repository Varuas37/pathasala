import React from 'react'
import Features from './Features'

import Hero from './Hero'
import Navbar from './Navbar'

interface Props {

}
const Landing: React.FC<Props> = () => {
    return (
        <div className="flex overflow-none items-center flex-col w-full bg-darkblue sm:p-6 p-4 text-white">
          
            <Hero />
            <Features/>
        </div>
    );
}

export default Landing;