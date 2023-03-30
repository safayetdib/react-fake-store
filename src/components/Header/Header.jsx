import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container fluid className="container-xxl py-2">
				<Navbar.Brand href="#">
					<FontAwesomeIcon
						icon={faCartArrowDown}
						className="me-2 text-warning"
					/>
					<span className="text-light">React</span>{' '}
					<span className="text-danger">Fake</span>{' '}
					<span className="text-info">Shop</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto me-4 my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll>
						<Nav.Link
							href="#action2"
							className="text-warning fw-medium text-uppercase">
							FLASH SALE!
						</Nav.Link>
						<NavDropdown title="Categories" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Smartphones</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Feature Phones
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">Tablets</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#action1">Sign Up / Login</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
