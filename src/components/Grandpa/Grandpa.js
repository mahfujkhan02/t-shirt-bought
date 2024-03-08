import React, { createContext } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const RingContext = createContext('Rupa Ring')

const Grandpa = () => {
    const house = 7;
    const ring = 'diamond ring';

    return (

        <RingContext.Provider>
            <div className='grandpa'>
                <h2>Grandpaa</h2>
                <section className='flex'>
                    <Father house={house} ring={ring}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>

                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;