import React, { Component } from 'react';

const Promottion = (props) =>{
    return (
        <div className="promotion__item col-md-3" id={props.id}>
         <div className="col-12  promotion__item--custom">
            {props.children}
            </div>
        </div>
    )
}

export class Promottions extends Component {
    render() {
        return (
             <div className="container promotions">
             <div className="row">
                <Promottion id="promotion__item--return">
                <i className="fa fa-refresh promotion__icon" aria-hidden="true"></i>
                    <h4>30 Days return</h4>
                </Promottion>
                <Promottion id="promotion__item--freeship">
                <i className="fa fa-truck promotion__icon" aria-hidden="true"></i>
                    <h4>Free shipping</h4>
                </Promottion>
                <Promottion id="promotion__item--secure">
                <i className="fa fa-lock promotion__icon" aria-hidden="true"></i>
                    <h4>Secure payments</h4>
                </Promottion>
                <Promottion id="promotion__item--newproducts">
                <i className="fa fa-gift promotion__icon" aria-hidden="true"></i>
                    <h4>New products</h4>
                </Promottion>
              </div>
              </div>
        );
    }
}

export default Promottions;
