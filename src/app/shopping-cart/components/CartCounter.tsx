'use client';

import { useState } from "react";

interface Props {
    value?: number;
}

export const CartCounter = ({ value = 0 } : Props ) => {

    const [ counter , setCounter ] = useState(value);
    
    const sumar = () => {
        setCounter(counter + 1);
    }

    const restar = () => {
        setCounter(counter - 1);
    }
    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">

                <button onClick={restar} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 trnasition-all w-[100px] mr-2 ">
                    -1
                </button>

                <button onClick={sumar} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 trnasition-all w-[100px] mr-2 ">
                    +1
                </button>

            </div>
        </>
    )
}
