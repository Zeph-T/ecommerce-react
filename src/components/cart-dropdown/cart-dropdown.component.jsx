import React from 'react';
import CustomButtom from "../../components/custom-button/custom-button.component";

import './cart-dropdown.styles.scss';


const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButtom >CHECKOUT</CustomButtom>
        </div>
    </div>
)

export default CartDropdown;