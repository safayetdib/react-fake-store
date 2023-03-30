import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Product from '../Product/Product';

const Shop = () => {
	return (
		<div className="row gap-4">
			<Product />
			<Product />
			<Product />
		</div>
	);
};

export default Shop;
