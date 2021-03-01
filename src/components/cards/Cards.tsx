import React from 'react'

interface Props {
    cardImage?: undefined | string,
    cardTitle?: string,
    cardDescription?: string,
    svg?: JSX.Element | undefined,
    // svg: string,

}
const Cards: React.FC<Props> = ({ cardTitle, cardDescription, svg }) => {

    return (

        <li className="col-span-1 flex text-white flex-col text-center border border-cardBorderDark  rounded-lg shadow divide-gray-200" style={{ height: "300px", minHeight:"auto" }}>
            <div className="flex-1 justify-start items-start flex flex-col p-8">
                {/* <img className="w-12 h-12 flex-shrink-0 mx-auto bg-black rounded-full" src={svg} alt="" /> */}
                {svg}
                <div>
                    <h3 className="mt-6  text-2xl font-bold mb-5" style={{ textAlign: "left" }}>{cardTitle}</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                        {/* <dt className="sr-only">Title</dt> */}
                        <dd className="text-md" style={{ textAlign: "left" }}>{cardDescription}</dd>
                    </dl>
                </div>

                <div>
                </div>
            </div>
        </li>
    );
}

export default Cards;