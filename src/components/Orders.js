import React from 'react';

export default function Orders(props) {
    const order = props.order;
    let sauceKeys = Object.keys(order.sauce);
    let sauces = sauceKeys.filter(function (key) {
        return order.sauce[key]
    });
    let cheeseKeys = Object.keys(order.cheese);
    let cheeses = cheeseKeys.filter(function (key) {
        return order.cheese[key]
    });
    return (
        <div>
            Name : {order.name}<br />
            Size: {order.size}<br />
            Sauce: {sauces.join()}<br />
            Sauce: {cheeses.join()}<br />
            Instructions: {order.instructions}
        </div>
    )
}