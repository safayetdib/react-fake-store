import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
	const { title, price, description, rating, stock, thumbnail } = props.product;

	return (
		<Card style={{ width: '16rem' }} className="p-0">
			<Card.Img
				variant="top"
				src={thumbnail}
				style={{ height: '180px' }}
				className="img-img-fluid"
			/>
			<Card.Body className="d-flex flex-column justify-content-between">
				<div>
					<Card.Title>{title}</Card.Title>
					<Card.Title>${price}</Card.Title>
					<Card.Text className="fw-fw-semibold my-2">{description}</Card.Text>
				</div>
				<div>
					<div className="d-flex justify-content-between">
						<Card.Text>Rating: {rating} Star</Card.Text>
						<Card.Text>Stock: {stock}</Card.Text>
					</div>
					<Button
						variant="dark"
						className="w-100"
						onClick={() => props.handleAddToCart(props.product)}>
						Add to Cart
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Product;
