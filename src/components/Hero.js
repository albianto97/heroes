import React from 'react';

const Hero = ({hero}) => {
    return (
        <div>
            {<li>{hero.name}</li>}
        </div>
    );
}
export default Hero;