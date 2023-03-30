const addToDb = (id) => {
	// get data and quantity from local storage
	let shoppingCart = getShoppingCart();
	const quantity = shoppingCart[id];
	// if there is no prev quantity then set 1, otherwise add to prev data
	if (!quantity) {
		shoppingCart[id] = 1;
	} else {
		const newQuantity = quantity + 1;
		shoppingCart[id] = newQuantity;
	}
	// add data to local storage
	localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
	let shoppingCart = {};
	// get data from local storage
	const storedCart = localStorage.getItem('shopping-cart');
	// if there is data on local storage store return them or return empty object
	if (storedCart) {
		shoppingCart = JSON.parse(storedCart);
	}
	return shoppingCart;
};

export { addToDb, getShoppingCart };
