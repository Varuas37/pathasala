import React from 'react'

interface Props {
    cardTitle: string,
    cardDescription?: string,
    svg: JSX.Element,
}
const Cards: React.FC<Props> = ({ cardTitle, cardDescription, svg }) => {
    return (
        <li className="col-span-1 flex text-white flex-col text-center border border-cardBorderDark hover:bg-hoverblue cursor-pointer h-auto p-5 rounded-lg hover:shadow-2xl divide-gray-200">
            <div className="flex-1 justify-start items-start flex flex-col p-8">
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