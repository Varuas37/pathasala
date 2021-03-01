import React from 'react'
import Cards from '../../components/cards/Cards'
import { FeaturesData } from './data';
import svgFeature from "../../assets/images/Group.svg"
import svgStats from "../../assets/images/statsCard.svg"
import svgSearchCard from "../../assets/images/svgSearchCard.svg"
interface Props {

}
const Features: React.FC<Props> = ({ }) => {



    return (
        <>
            <h1 className="heading font-sora font-bold text-5xl mt-20 mb-20" >Features</h1>
            <section className="w-full md:w-4/6">
                <ul className="w-full grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    {FeaturesData.map((card, index) => (
                        <Cards key={index} cardTitle={card.title} cardDescription={card.description} svg={card.svg} />
                    ))}
                </ul>
            </section>

            <section className="w-full md:w-4/6 flex items-center flex-col">
                <h1 className="heading font-sora font-bold text-5xl mt-20 mb-20" >How does it work?</h1>
                <div className="flex  flex-col md:flex-row w-full items-center justify-between space-x-20">
                    <img src={svgFeature} alt="" height="200px" width="490px" />
                    <div className="flex flex-col ml-50">
                        <h1 className="heading font-sora font-bold text-4xl mb-5 mt-10 md:mt-0" >Customized Quizzes</h1>
                        <p className="w-5/6">Pathsala reccomends questions after an intial assesment of your knowledge on the topic. We provide questions that are tailored to you to help you succed in your upcomming exams.</p>
                    </div>
                </div>
            </section>
            <section className="w-full md:w-4/6 flex items-center flex-col mt-20">
                <div className="flex  flex-col md:flex-row w-full items-center justify-between space-x-20 md:flex-row-reverse">
                    <img src={svgStats} alt="" height="200px" width="490px" />
                    <div className="flex flex-col ml-50">
                        <h1 className="heading font-sora font-bold text-4xl mb-5 mt-10 md:mt-0" >Personalized Stats</h1>
                        <p className="w-5/6">Keep track of all your assignments and quzzies with our powerful suite of tools and analytics.</p>
                    </div>
                </div>
            </section>
            <section className="w-full md:w-4/6 flex items-center flex-col mt-20">
                <div className="flex  flex-col md:flex-row w-full items-center justify-between space-x-20">
                    <img src={svgSearchCard} alt="" height="200px" width="490px" />
                    <div className="flex flex-col ml-50">
                        <h1 className="heading font-sora font-bold text-4xl mb-5 mt-10 md:mt-0" >Hundreds of Question Sets</h1>
                        <p className="w-5/6">Pathsala has over 1000 questions on different topics. You can also search for flash cards or question sets generated by our users.</p>
                    </div>
                </div>
            </section>
            <section className="w-full md:w-4/6 rounded-2xl flex bg-blue-800 items-start p-20 flex-row mt-40 h-60 mb-20 justify-between ">
                <div className="flex items-center flex-col font-sora space-y-1">
                    <p className="font-medium text-xl" style={{ opacity: "0.86" }}>PATHASALA</p>
                    <h1 className="heading font-sora font-bold text-4xl mb-5 mt-10 md:mt-0">Your ultimate study partner!</h1>
                </div>
                <button className="bg-darkerBlue font-sora mt-2 text-xl rounded-xl p-4 outline-none focus:outline-none font-medium">
                    Start Learning!
                </button>
            </section>
        </>
    );
}
export default Features;