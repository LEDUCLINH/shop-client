import React, { Component } from 'react';

export  const CartContext = React.createContext();

export  class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: JSON.parse(localStorage.getItem('products')) || [],
            length: localStorage.getItem('length') || 0,
            cost:   localStorage.getItem('cost') || 0
        };
        this.addToCart =  this.addToCart.bind(this);
        this.removeToCart =  this.removeToCart.bind(this);
        //  this.addUnit = this.addUnit.bind(this);
    }

    addToCart(product) {
        var cost = 0;
        var length = 0;
        var check = false;
        var products =  JSON.parse(localStorage.getItem('products')) || [];
        if (products.length > 0){
         for (let i in products){
             if (products[i]._id === product._id){
                 products[i].units += 1;
                 check = true;
                 break;
             }
         }
         if ( !check ) {
            product.units = 1;
            products.push(product);
         }
        }
        else{
            product.units = 1;
            products.push(product);
        }
        for (let i in products){
            length = length+products[i].units;
            cost = cost + parseFloat(products[i].product__price.substring(1))* products[i].units;
        }
        localStorage.setItem('length', length);
        localStorage.setItem('cost', cost);
        this.setState({
            // cartItems: this.state.cartItems.concat(product)
             cartItems: products,
             length: length,
             cost: cost
        })
        // console.log(products);
       localStorage.setItem('products', JSON.stringify(products));
    }
   
    removeToCart(product) {
        var cost = 0;
        var length = 0;
        var products =  JSON.parse(localStorage.getItem('products')) || [];
        for (let i in products){
            if ((products[i]._id === product._id) && (products[i].units>0)){
                products[i].units-=1;
                if (products[i].units === 0){
                     products.splice(i,1);
                }
              break;
            }
        }
        for (let i in products){
            length = length + products[i].units;
            cost = cost + parseFloat(products[i].product__price.substring(1))* products[i].units;
        }
     
        localStorage.setItem('cost', cost);
        localStorage.setItem('length', length);
        this.setState({
            // cartItems: this.state.cartItems.concat(product)
             cartItems: products,
             length: length,
             cost: cost
        })
        // console.log(products);
       localStorage.setItem('products', JSON.stringify(products));
       if (length === 0){
        localStorage.removeItem('products');
    }
    }
    render(){
        return(
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart,
                length: this.state.length,
                removeToCart: this.removeToCart,
                cost: this.state.cost
               
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default { CartContext, CartProvider}