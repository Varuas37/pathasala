import React from 'react'
import Cards from '../../components/cards/Cards'
import { FeaturesData } from './data';

interface Props {
    
}
const Features: React.FC<Props> = ({}) => {
    


    return (
        <>
            <h1 className="heading font-sora font-bold text-5xl mt-20 mb-20" >Features</h1>
            <section className="w-full md:w-4/6">
                <ul className="w-full grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    {FeaturesData.map((card, index) => (
                        
                        <Cards key={index} cardTitle={card.title} cardDescription={card.description} svg={card.svg}/>
                    ))}


                </ul>
            </section>
            <section>
                <h1 className="heading font-sora font-bold text-5xl mt-20 mb-20" >How does it work?</h1>
            </section>
        </>
    );
}

export default Features;