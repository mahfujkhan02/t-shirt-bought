import React from 'react';
import './Cart.css'

const Cart = ({cart , handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>please buy at least one item!!</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h3>Amr jonou akta nao</h3>
            <p>Tmr jonou nio akta</p>
            <p><small>amr fr er jonou akta niou</small></p>
        </div>

    }
    else{
        message = <p>Thanks for buy!!!</p>
    }


    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : 'purple'}>Order Summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity : {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                
                
                >
                    {tshirt.name}
                    <button onClick={ () => handleRemoveItem(tshirt)}>X</button>
                </p>) 
            }
            
            {
                message
            }
            {cart.length === 3 ? <p>Thin jon k gift dibea?</p> : <p>Kino kino</p>}

            <p>And operator</p>
            {cart.length === 2 && <h2>Double items</h2>}
            <p>Or operator</p>
            {cart.length === 4 || <p>4ta item nah</p>}
        </div>
    );
};

export default Cart;