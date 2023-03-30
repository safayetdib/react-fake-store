import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/utilities';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedCart = getShoppingCart();
		const savedCart = [];

		for (const id in storedCart) {
			const addedProduct = products.find((product) => {
				// console.log(product.id, id);
				return product.id.toString() === id;
			});
			if (addedProduct) {
				const quantity = storedCart[id];
				// console.log(quantity);
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct);
			}
		}
		setCart(savedCart);
	}, [products]);

	const handleAddToCart = (product) => {
		let newCart = [];
		// find previous data in cart
		const exists = cart.find((pd) => pd.id === product.id);
		if (!exists) {
			// if there is no prev data then set quantity 1 and update cart
			product.quantity = 1;
			newCart = [...cart, product];
		} else {
			// if prev data exists then update quantity and cart
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
