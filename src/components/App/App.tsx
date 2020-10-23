import React from 'react';
import styled from 'styled-components';
import laptopImg from './laptop.png';
import cubesImg from './cubes.png';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Item from '../Grid/Item'
import Container from '../Container';
import Grid from '../Grid/Grid';
import Break from '../Grid/Break';

const Header = styled(Grid)({
	height: '100vh',
	padding: '0 20px'
})

const Title = styled.span({
	fontWeight: 'bold',
	textTransform: 'uppercase',
	marginLeft: 20,
	fontSize: '5rem'
});

const Promo = styled.img({
	height: 300,
	objectFit: 'contain',
	padding: 30
})
const Body = styled(Container)({
	padding: '0 20px'
})

export default function App(): JSX.Element {
	return (
		<>
			<Navigation />
			<Container maxWidth="1200px">
				<Header align="center" wrap="header">
					<Item>
						<Title>
							Made different
						</Title>
					</Item>
				</Header>
			</Container>
			<Body maxWidth="1200px">
				<Grid align="center">
					<Item width="1fr">
						<Promo src={laptopImg} />
					</Item>
					<Item width="2fr">
						<section>
							<h2>Lorem ipsum dolor sit amet</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
							</p>
						</section>
					</Item>
					<Break />
					<Item width="2fr">
						<section>
							<h2>Lorem ipsum dolor sit amet</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
							</p>
						</section>
					</Item>
					<Item width="1fr">
						<Promo src={cubesImg} />
					</Item>
				</Grid>
			</Body>
			<Footer />
		</>
	);
}