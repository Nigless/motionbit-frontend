import React from "react";
import styled from "styled-components"
import Container from "../Container";

const Wrapper = styled.div({
	background: '#000',
	padding: '.1px 0'
})

export default function Navigation() {
	return (
		<Wrapper>
			<Container maxWidth="1200px" >
			</Container>
		</Wrapper>
	)
}