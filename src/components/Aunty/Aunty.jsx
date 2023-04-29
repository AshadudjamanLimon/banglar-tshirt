import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cusin hasFriend={true} ring={ring}>Shafia</Cusin>
                <Cusin>Humaira</Cusin>
            </section>
        </div>
    );
};

export default Aunty;