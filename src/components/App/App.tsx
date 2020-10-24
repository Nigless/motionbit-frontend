import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Item from '../Grid/Item'
import Container from '../Container';
import Grid from '../Grid/Grid';
import Flex from '../Flex'
import Discription from './Discription/Discription'

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
export default function App(): JSX.Element {
	return (
		<>
			<Navigation />
			<Container maxWidth="1200px">
				<Flex align="center">
					<Header wrap="header">
						<Item>
							<Title>
								Made different
						</Title>
						</Item>
					</Header>
				</Flex>
			</Container>
			<Discription />
			<Footer />
		</>
	);
}