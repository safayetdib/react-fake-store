import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/utilities';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleAddToCart = (product) => {
		let newCart = [];

		const exists = cart.find((pd) => pd.id === product.id);

		if (!exists) {
			product.quantity = 1;
			newCart = [...cart, product];
		} else {
			exists.quantity = exists.quantity + 1;
			const remaining = cart.filter((pd) => pd.id !== product.id);
			newCart = [...remaining, exists];
		}

		setCart(newCart);
		addToDb(product.id);
	};

	return (
		// Shop Container
		<div className="container-xxl mx-auto row my-4">
			<div className="col-md-8">
				{/* Products Container */}
				<div className="row gap-4">
					{products.map((product) => (
						<Product
							key={product.id}
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					))}
				</div>
			</div>
			{/* Cart Container */}
			<div className="col-md-4">
				<Cart cart={cart} />
			</div>
		</div>
	);
};

export default Shop;
