import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>MySlef</h2>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default MySelf;