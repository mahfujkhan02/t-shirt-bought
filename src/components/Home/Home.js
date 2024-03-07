import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData()

    const [cart, setCart] = useState([])



    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            alert('t-shirt already added')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
            alert('Successfully added')
        }

    }

    const handleRemoveItem = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remaining)
    }



    return (
        <div className='home-container'>

            {/* <h2>This is home : {tshirts.length}</h2> */}
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}

                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                        handleRemoveItem = {handleRemoveItem}
                        >

                </Cart>
            </div>
        </div>
    );
};

export default Home;