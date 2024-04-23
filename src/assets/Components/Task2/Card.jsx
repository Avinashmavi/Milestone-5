import React from 'react'
import randomData from '../Task2data'

const Card = ({content}) => {
    return (
        <div>
            <div className="flex justify-center p-6  ">
                <div className="w-1/2 shadow-2xl px-6 py-10 m-10 border-solid border-2 border-indigo-500 bg-orange-200">
                    <h1 className="font-bold text-4xl text-center">{content.title}</h1>
                    <p className="font-medium text-xl text-center p-4">{content.explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
