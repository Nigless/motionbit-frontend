import styled from "styled-components";
import { Button } from "@material-ui/core";
import React from "react";
import logoImg from './MOTIONBIT_WORDMARK.svg'
import Item from '../Grid/Item'
import Container from "../Container";
import Grid from "../Grid/Grid";
import Flex from '../Flex'
import Ulist from '../Ulist'

const Wrapper = styled.div({
	position: 'fixed',
	left: 0,
	right: 0,
	background: 'rgba(255,255,255,.9)'
})

const Menu = styled(Ulist)({
	margin: 0,
	padding: 0,
	listStyle: 'none',
	display: 'flex'
})

const Body: typeof Grid = styled(Grid)({
	height: '80px',
	padding: '0 20px'
})

export default function Navigation() {
	return (
		<Wrapper>
			<Container maxWidth="1200px">
				<Flex justify="space-between" align="center" >
					<Body wrap="nav" >
						<Item>
							<img src={logoImg} alt="Логотип MotionBit" height="13px" />
						</Item>
						<Item>
							<Menu>
								<Button color="inherit">Home</Button>
								<Button color="inherit">Downloads</Button>
								<Button color="inherit">Support</Button>
								<Button color="inherit">Sign in</Button>
							</Menu>
						</Item>
					</Body>
				</Flex>
			</Container>
		</Wrapper>
	)
}