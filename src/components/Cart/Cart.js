import React from 'react';

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
            <h3>Order Summary</h3>
            <h5>Order Quantity : {cart.length}</h5>
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
        </div>
    );
};

export default Cart;