import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListGroupItem } from 'react-bootstrap';

const Cart = () => {
	return (
		<ListGroup>
			<ListGroup.Item className="text-center bg-dark text-light">
				<h4>Order Summary</h4>
			</ListGroup.Item>
			{/* Cart Items */}
			<ListGroup.Item className="d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center gap-4">
					<img
						src="https://i.dummyjson.com/data/products/1/4.jpg"
						alt=""
						style={{ width: '80px', height: '80px' }}
						className="border"
					/>
					<div>
						<h5>Iphone 14</h5>
						<p>Quantity: 1</p>
					</div>
				</div>
				<h4>$500</h4>
				<button className="border-0 d-flex align-items-center justify-content-center p-1">
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</ListGroup.Item>

			{/* Cart Calculations */}
			<ListGroup.Item className="py-3">
				<Table striped bordered>
					<tbody>
						<tr>
							<td>Selected Items</td>
							<td>1</td>
						</tr>
						<tr>
							<td>Total Price</td>
							<td>$500</td>
						</tr>
						<tr>
							<td>Total Shipping Price</td>
							<td>$5</td>
						</tr>
						<tr>
							<td>Tax</td>
							<td>$10</td>
						</tr>
						<tr>
							<th>Grand Total</th>
							<th>$525</th>
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
