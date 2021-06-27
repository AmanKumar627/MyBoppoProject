import React from 'react'
import { products } from './Products';
import { useSelector,usesDispatch, useDispatch } from 'react-redux';
import { incnumber,decnumber } from '../ReduxFolder/Action';

const MainContent = () => {
   const mystate=useSelector((state)=>state.changeTheNumber)
   const dispatch=useDispatch();

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
            <div clasName="container">
            <h4>Add or Remove to Cart</h4>
              <div className="quantity">
               <a className="quantity-minus" title="Decreament" onClick={()=>dispatch(decnumber())} ><span>+</span></a>
               <input nameName="quantity" type="text" className="quantity-input" value={mystate} />
               <a className="quantity-plus"  title="Increament"  onClick={()=>dispatch(incnumber())}><span>-</span></a>
               

              </div>
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