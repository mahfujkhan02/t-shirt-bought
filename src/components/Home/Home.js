import React, {  useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData()

    const [cart , setCart]  = useState([])
    


    const handleAddToCart = tshirt =>{
       const newCart = [...cart , tshirt]
       setCart(newCart)
    }
    return (
        <div className='home-container'>

            {/* <h2>This is home : {tshirts.length}</h2> */}
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddToCart = {handleAddToCart}

                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Home;