import React from 'react';
import Counter from './Counter/Counter';

function Test_counter() {
    return (
        <div className='bg-indigo-400 w-1/2 m-auto mt-18 rounded-3xl py-10'>
            <h1 className='text-[36px] font-bold text-white'>Counter</h1>
            <div>
                <Counter/>
                <Counter/>
            </div>
        </div>
    );
}

export default Test_counter;