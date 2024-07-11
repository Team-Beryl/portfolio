import { PlusCircleIcon } from 'lucide-react';
import React from 'react'

const PagesLayout = ({ headerText, buttonText, children }) => {
    return (
        <div className='p-10 flex-col gap-y-16 '>

            <div className='flex '>
                <h1 className='text-2xl font-bold'>{headerText}</h1>
                <button className='bg-primary text-white px-6 py-2 ml-auto rounded flex'>

                    <PlusCircleIcon/>
                    {buttonText}

                </button>
            </div>
            <div className=''>{children}</div>
        </div>
    );
};

export default PagesLayout