import React from "react";
import styled from "styled-components"
import Ulist from '../../Ulist'
import logoImg from './MOTIONBIT_WORDMARK.svg'
import A from './A'

const Logo = styled.img({
	height: '1em'
})

const List = styled(Ulist)({
	listStyle: 'none',
	padding: 0,
	display: 'flex',
	margin: 0,
	'& li+li': {
		marginLeft: 5
	}
})

const Body = styled.div({
	position: 'relative'
})

const Copyright = styled.span({
	position: 'absolute',
	bottom: 0,
	color: '#888',
	fontSize: '0.8em'
})

interface Props {
	className?: string
}

export default function Head({ className }: Props) {
	return <Body className={className}>
		<a href="#"><Logo src={logoImg} alt="" /></a>
		<List>
			<A href="#">Blog</A>
			<A href="#">Discord</A>
			<A href="#">Youtube</A>
		</List>
		<Copyright>
			© 2020 Motionbit Project. All Rights Reserved
		</Copyright>
	</Body>
}