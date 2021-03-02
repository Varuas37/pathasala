import React from 'react'
import Cards from '../../components/cards/Cards'
import { FeaturesData, DetailData, bannerText, bannerSubHeading, btnBanner } from './data';
import { Link } from 'react-router-dom';
interface Props {

}
const Features: React.FC<Props> = ({ }) => {



    return (
        <>
            {/* FEATURES */}
            <h1 className="heading font-sora font-bold text-5xl mt-20 mb-20" >Features</h1>
            <section className="w-full md:w-full lg:w-5/6">
                <ul className="w-full grid grid-cols-1 gap-12 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {FeaturesData.map((card, index) => (
                        <Cards key={index} cardTitle={card.title} cardDescription={card.description} svg={card.svg} />
                    ))}
                </ul>
            </section>
            {/* DETAILS SECTION */}
            <h1 className="heading font-sora font-bold text-5xl mt-20 mb-20" >How does it work?</h1>
            {DetailData.map((item, index) => (
                <section key={index} className="w-full md:w-4/6 flex items-center flex-col mt-10">
                    <div className={`flex  flex-col ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} w-full items-center items-center justify-between md:space-x-10`}>
                        <img src={`${item.svg}`} alt="" height="200px" width="450px" />
                        <div className="flex  flex-col md:ml-50">
                            <h1 className="heading font-sora font-bold text-4xl mb-5 mt-20 md:mt-10 md:mt-0" >{item.title}</h1>
                            <p className="w-full md:w-5/6">{item.description}</p>
                        </div>
                    </div>
                </section>
            ))}
            {/* SIGN UP BANNER */}
            <section className="w-full md:w-4/6 rounded-2xl flex flex-col md:flex-row bg-blue-800 items-center p-10 flex-row mt-40 h-auto mb-20 justify-between space-y-10 md:space-y-0 ">
                <div className="flex items-start md:items-center flex-col font-sora">
                    <p className="font-medium text-xl" style={{ opacity: "0.86" }}>{bannerSubHeading}</p>
                    <h1 className="heading font-sora font-bold text-4xl">{bannerText}</h1>
                </div>
                <Link to="/login" className="bg-darkerBlue font-sora  text-xl rounded-xl p-4 outline-none focus:outline-none font-medium">
                    {btnBanner}
                </Link>

            </section>
        </>
    );
}
export default Features;