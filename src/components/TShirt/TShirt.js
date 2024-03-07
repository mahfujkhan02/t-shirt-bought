import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {id , price , name , picture, gender} = tshirt
    return (
        <div className='t-shirt'>

            <img src={picture}></img>
            <h1>Name : {name}</h1>
            <h4>Price : {price}</h4>
            <button onClick={ () => handleAddToCart(tshirt)}>Buy This</button>
            
        </div>
    );
};

export default TShirt;