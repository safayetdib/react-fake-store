import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<div>
			<Header />
			<main className="container-xxl mx-auto row my-4">
				<div className="col-md-8">
					<Shop />
				</div>
				<div className="col-md-4">
					<Cart />
				</div>
			</main>
		</div>
	);
}

export default App;
