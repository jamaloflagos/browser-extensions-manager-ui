// 'use client'

// import React, { useState } from 'react';
import Image from 'next/image'

interface CardPropsType {
    id: number
    name: string;
    description: string;
    logo: string;
    isActive: boolean;
    removeExtension: (index: number) => void;
    toggleActive: (index: number) => void;

}

const Card = ({name, description, logo, isActive, id, removeExtension, toggleActive}: CardPropsType) => {

  return (
    <div className="flex flex-col justify-between gap-12 p-5 border border-neutral-200 bg-neutral-0 rounded-3xl dark:bg-neutral-800 dark:border-neutral-600">
        <div className="flex items-start gap-4">
            <Image
                alt={name}
                src={logo}
                height={60}
                width={60}  
            />
            <div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-0">{name}</h2>
                <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <button className="px-4 py-2 border rounded-full border-neutral-300 dark:border-neutral-600 dark:text-neutral-0 cursor-pointer" onClick={() => removeExtension(id)}>Remove</button>
            <div className="flex items-center justify-center">
    <div className={`relative rounded-full w-9 h-5 transition duration-200 ease-linear ${isActive ? 'bg-red-700' : 'bg-neutral-300'}`}>
        <label htmlFor={id.toString()}
            className={`absolute left-0 bg-white border-2 mb-2 size-5 rounded-full transition transform duration-100 ease-linear cursor-pointer ${isActive ? 'translate-x-full border-red-700' : 'translate-x-0 border-neutral-300'}`}><span className="sr-only">Enable/Disable Extension</span></label>
        <input type="checkbox" id={id.toString()} name={id.toString()}
            className="w-full h-full appearance-none active:outline-none focus:outline-none" onClick={() => {
                toggleActive(id);
            }} />
    </div>
</div>
        </div>
    </div>
  )
}

export default Card