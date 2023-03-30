import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
	return (
		<Card style={{ width: '16rem' }} className="p-0">
			<Card.Img
				variant="top"
				src="https://i.dummyjson.com/data/products/1/1.jpg"
			/>
			<Card.Body>
				<Card.Title>Iphone 14</Card.Title>
				<Card.Title>$500</Card.Title>
				<Card.Subtitle className="fw-fw-semibold my-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
					temporibus.
				</Card.Subtitle>
				<div className="d-flex justify-content-between">
					<Card.Text>Rating: 4.5 Star</Card.Text>
					<Card.Text>Stock: 94</Card.Text>
				</div>
				<Button variant="dark" className="w-100">
					Add to Cart
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;
