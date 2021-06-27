import React from 'react';
import './cart.css'

import { products } from './Products';

const Cart=()=>{
console.log(products)
const listItems=products.map((items=>
   <div className="card" key={items.id}>

 
       </div>

)
)
}
export default Cart;
//export const CartContext=createContext()



// const Cart=()=>{
// return(
// <>
// <header>
//     <div  className="Continue-Shopping">

//     <img  src="./Images/arrow.png" alt="arrow" className="arrow-icon"/>
//     <h3>Continue Shopping</h3>

//     </div>



//     <div  className="cart-icon">
// <img  src="./Images/cart.png" alt="arrow"/>
// <p>7</p>

// </div>
    
// </header>


// <section  className="main-cart-section">
//     <h1>Shopping Cart</h1>
//   <div  className="cart-items">
// <div className="cart-items-container">
//     <scrollbars></scrollbars>
//     <div className="items-info">
//         <div className="product-img">
//           <img  src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img1"/>
           
//         </div>


//         <div className="title">
//           <h2>SamSung S2</h2>
//            <p>black color</p>
//         </div>
//          <div ClassName="add-minus-quantity">
//         <i Class="fa fa-minus minus"></i>
//         <input type='text'  placeholder="6"></input>
//         <i Class="fa fa-plus add"></i> 
//     </div>
//     <div className="price">
//         <h3>2000Rs</h3>



//     </div>
//   <div  ClassName="remove-item">
//   <i Class="fa fa-trash-alt remove"></i> 



//   </div>

// </div>
// <hr/>

// <div className="items-info">
//         <div className="product-img">
//           <img  src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img1"/>
           
//         </div>


//         <div className="title">
//           <h2>SamSung S2</h2>
//            <p>black color</p>
//         </div>
//          <div ClassName="add-minus-quantity">
//         <i Class="fa fa-minus minus"></i>
//         <input type='text'  placeholder="6"></input>
//         <i Class="fa fa-plus add"></i> 
//     </div>
//     <div className="price">
//         <h3>2000Rs</h3>



//     </div>
//   <div  ClassName="remove-item">
//   <i Class="fa fa-trash-alt remove"></i> 



//   </div>

// </div>
// <hr/>

// <div className="items-info">
//         <div className="product-img">
//           <img  src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img1"/>
           
//         </div>


//         <div className="title">
//           <h2>SamSung S2</h2>
//            <p>black color</p>
//         </div>
//          <div ClassName="add-minus-quantity">
//         <i Class="fa fa-minus minus"></i>
//         <input type='text'  placeholder="6"></input>
//         <i Class="fa fa-plus add"></i> 
//     </div>
//     <div className="price">
//         <h3>2000Rs</h3>



//     </div>
//   <div  ClassName="remove-item">
//   <i Class="fa fa-trash-alt remove"></i> 



//   </div>

// </div>
// <hr/>

// <div className="items-info">
//         <div className="product-img">
//           <img  src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img1"/>
           
//         </div>


//         <div className="title">
//           <h2>SamSung S2</h2>
//            <p>black color</p>
//         </div>
//          <div ClassName="add-minus-quantity">
//         <i Class="fa fa-minus minus"></i>
//         <input type='text'  placeholder="6"></input>
//         <i Class="fa fa-plus add"></i> 
//     </div>
//     <div className="price">
//         <h3>2000Rs</h3>



//     </div>
//   <div  ClassName="remove-item">
//   <i Class="fa fa-trash-alt remove"></i> 



//   </div>

// </div>
// <hr/>

// <div className="items-info">
//         <div className="product-img">
//           <img  src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img1"/>
           
//         </div>


//         <div className="title">
//           <h2>SamSung S2</h2>
//            <p>black color</p>
//         </div>
//          <div ClassName="add-minus-quantity">
//         <i Class="fa fa-minus minus"></i>
//         <input type='text'  placeholder="6"></input>
//         <i Class="fa fa-plus add"></i> 
//     </div>
//     <div className="price">
//         <h3>2000Rs</h3>



//     </div>
//   <div  ClassName="remove-item">
//   <i Class="fa fa-trash-alt remove"></i> 



//   </div>

// </div>

// <hr/>

// <Scrollbars/>






















































// </div>

//   </div>
    
// </section>

// </>



// )



// }

// export default Cart;