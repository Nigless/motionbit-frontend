import React from "react";
import styled from "styled-components"
import Container from "../../Container";
import Grid from "../../Grid/Grid";
import Item from "../../Grid/Item";
import Ulist from '../../Ulist'
import A from "./A";
import Head from "./Head";

const Wrapper = styled.footer({
	background: '#000',
	padding: '.1px 0',
	color: '#fff'
})
const Header = styled.h3({
	fontSize: '1em',
	margin: 0
})
const List = styled(Ulist)({
	listStyle: 'none',
	padding: 0,
	lineHeight: 1.8,
	margin: 0,
	marginTop: 10
})
const Body = styled(Container)({
	padding: 20
})
export default function Navigation() {
	return (
		<Wrapper>
			<Body maxWidth="1200px" >
				<Grid justify="flex-start">
					<Item width="1fr">
						<section>
							<Header>Softwares</Header>

							<List>
								<A href="#">Polymer</A>
								<A href="#">Engine</A>
								<A href="#">Other</A>
								<A href="#">Free</A>
							</List>
						</section>
					</Item>
					<Item width="1fr">
						<section>
							<Header>Motionbit</Header>
							<List>
								<A href="#">Our project</A>
								<A href="#">Blog</A>
								<A href="#">ID</A>
							</List>
						</section>
					</Item>
					<Item width="1fr">
						<section>
							<Header>Support</Header>

							<List>
								<A href="#">Forum</A>
								<A href="#">Softwares</A>
								<A href="#">Contact us</A>
							</List>
						</section>
					</Item>
					<Item width="1fr">
						<section>
							<Header>Company</Header>

							<List>
								<A href="#">Homepage</A>
								<A href="#">Refund Policy</A>
								<A href="#">Legal Notice</A>
								<A href="#">Privacy Policy</A>
							</List>
						</section>
					</Item>
					<Item width="2fr">
						<Head />
					</Item>
				</Grid>
			</Body>
		</Wrapper>
	)
}