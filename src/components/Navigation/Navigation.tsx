import styled from "styled-components";
import { Button } from "@material-ui/core";
import React from "react";
import logoImg from './MOTIONBIT_WORDMARK.svg'
import Item from '../Grid/Item'
import Container from "../Container";
import Grid from "../Grid/Grid";

const Wrapper = styled.div({
	position: 'fixed',
	left: 0,
	right: 0,
	background: 'rgba(255,255,255,.9)'
})

const Menu = styled.ul({
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
				<Body justify="space-between" wrap="nav" align="center">
					<Item>
						<img src={logoImg} alt="Логотип MotionBit" height="13px" />
					</Item>
					<Item>
						<Menu>
							<li>
								<Button color="inherit">Home</Button>
							</li>
							<li>
								<Button color="inherit">Downloads</Button>
							</li>
							<li>
								<Button color="inherit">Support</Button>
							</li>
							<li>
								<Button color="inherit">Sign in</Button>
							</li>
						</Menu>
					</Item>
				</Body>
			</Container>
		</Wrapper>
	)
}