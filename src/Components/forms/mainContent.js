import React from 'react'
import { products } from './Products';

const MainContent = () => {
    console.log(products);
    const listItems = products.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.img} />
            </div>
            <div className="card_header">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className="main_content">
          
            {listItems}
        </div>
    )
}
export default MainContent;