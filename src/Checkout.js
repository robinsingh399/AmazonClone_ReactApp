import React, { forwardRef } from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';
function Checkout() {

    const [{basket , user},dispatch] = useStateValue();

    const FunctionalArticle = forwardRef((props, ref) => (
        <div ref={ref}>
          {props.children}
        </div>
      ));

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />
                <div>
                    <h3>Hello , {!user ? "Guest":user.email}</h3>
                    <h2 className="checkout_title">
                        Your shopping Basket
                    </h2>
                    <FlipMove>
                    {basket.map(item =>(
                        <FunctionalArticle>
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            rating={item.rating}
                            price={item.price}
                            title={item.title}
                            image={item.image}
                        />
                        </FunctionalArticle>
                    ))}
                     </FlipMove> 
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

