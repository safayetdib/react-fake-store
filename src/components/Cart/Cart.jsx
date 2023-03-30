import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListGroupItem } from 'react-bootstrap';

const Cart = (props) => {
	const { cart } = props;

	let quantity = 0;
	let totalPrice = 0;
	let totalShipping = 0;

	for (const product of cart) {
		quantity = quantity + product.quantity;
		totalPrice = totalPrice + product.price * product.quantity;
		totalShipping = totalShipping + product.quantity * 5;
	}

	const tax = (totalPrice * 7) / 100;

	const grandTotal = totalPrice + totalShipping + tax;

	return (
		<ListGroup style={{ width: '380px' }}>
			<ListGroup.Item className="text-center bg-dark text-light">
				<h4>Order Summary</h4>
			</ListGroup.Item>
			{/* Cart Items */}
			{cart.map((product, index) => (
				<ListGroup.Item
					key={index}
					className="d-flex justify-content-between align-items-center">
					<div className="d-flex align-items-center gap-4">
						<img
							src={product.thumbnail}
							alt=""
							style={{ width: '80px', height: '80px' }}
							className="border"
						/>
						<div>
							<h6>{product.title}</h6>
							<h6 className="fw-normal">Quantity: {product.quantity}</h6>
							<button className="border-0 d-flex align-items-center justify-content-center p-1">
								<FontAwesomeIcon icon={faTrash} />
							</button>
						</div>
					</div>
					<h5>${product.price}</h5>
				</ListGroup.Item>
			))}

			{/* Cart Calculations */}
			<ListGroup.Item className="py-3">
				<Table striped bordered>
					<tbody>
						<tr>
							<td>Selected Items</td>
							<td>{quantity}</td>
						</tr>
						<tr>
							<td>Total Price</td>
							<td>${totalPrice}</td>
						</tr>
						<tr>
							<td>Total Shipping Cost</td>
							<td>${totalShipping}</td>
						</tr>
						<tr>
							<td>Tax</td>
							<td>${tax}</td>
						</tr>
						<tr>
							<th>Grand Total</th>
							<th>${grandTotal}</th>
						</tr>
					</tbody>
				</Table>
				<Button variant="dark" className="w-100">
					Proceed to Checkout
				</Button>
			</ListGroup.Item>
		</ListGroup>
	);
};

export default Cart;
