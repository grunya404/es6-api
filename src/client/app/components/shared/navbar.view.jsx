import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
require('./styles/navbar.scss');

export default class NavbarView extends React.Component {
	render() {
		return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">ReactJS Example</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to="home">
							<NavItem>Home</NavItem>
						</LinkContainer>
						<LinkContainer to="about">
							<NavItem>About</NavItem>
						</LinkContainer>
					</Nav>
					<Nav pullRight>
						<NavItem>Link Right</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
};