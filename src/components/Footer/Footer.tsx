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

export default function Navigation() {
	return (
		<Wrapper>
			<Container maxWidth="1000px" >
			</Container>
		</Wrapper>
	)
}