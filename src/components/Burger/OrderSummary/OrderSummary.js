import React from 'react';
import AuxComponent from '../../../hoc/AuxComponent';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}:
                    </span>
                    {props.ingredients[igKey]}
                </li>
            )
        });

    return (
        <AuxComponent>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </AuxComponent>
    );
};

export default orderSummary;