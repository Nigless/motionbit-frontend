import { Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components"
import Container from "../Container";
import Break from "../Grid/Break";
import Grid from '../Grid/Grid'
import Item from "../Grid/Item";

const Wrapper = styled(Box)({
	background: '#000',
	padding: '.1px 0'
})

const Xyu = styled.div({
	border: 'solid #fff 3px'
})
export default function Navigation() {
	return (
		<Wrapper>
			<Container maxWidth="1000px" >
				<Grid>
					<Item width="50px">
						<Xyu>lol</Xyu>
					</Item>
					<Item width="10fr">
						<Xyu>lol</Xyu>
					</Item>
					<Item width="5fr">
						<Xyu>lol</Xyu>
					</Item>
					<Item width="40px">
						<Xyu>lol</Xyu>
					</Item>
					<Item width="40%">
						<Xyu>lol</Xyu>
					</Item>
					<Break />
					<Item width="1fr">
						<Xyu>lol</Xyu>
					</Item>
					<Item width="20fr">
						<Xyu>lol</Xyu>
					</Item>
					<Item width="40%">
						<Xyu>lol</Xyu>
					</Item>
				</Grid>
			</Container>
		</Wrapper>
	)
}