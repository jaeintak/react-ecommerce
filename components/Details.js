import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component{
	render(){
		return(
			<ProductConsumer>
				{(value) =>{
					const {id, company, img, info, price, title, inCart} = value.detailProduct;
					return (
						<div className="container py-5">
							<div className="row">
								<div className="text-title col-10 mx-auto text-center my-5">
									<h1>{title}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3">
									<img src={img} className="img-fluid" alt="product" />
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<h2>model: {title}</h2>
									<h4 className="text-uppercase text-muted mt-3 mb-2">made by: {company}</h4>
									<h4><strong>price: <span>$</span>{price}</strong></h4>
									<p className="text-capitalize text-muted mb-0">{info}</p>
									<div>
										<Link to='/'>
											<ButtonContainer back>
												Back to Products
											</ButtonContainer>
										</Link>
										<ButtonContainer
										cart
										disabled={inCart?true:false}
										onClick={()=>{
											value.addToCart(id)
										}}>
											{inCart?"In Cart":"Add to Cart"}	
										</ButtonContainer>										
									</div>
								</div>
							</div>
						</div>)
				}}
			</ProductConsumer>
		)
	}
}
