import React, { ReactNode } from "react";
import styled from "styled-components"
import Root from './Root'


interface Props {
	className?: string
	children?: ReactNode
	wrap?: string
	justify?:
	'flex-start' |
	'center' |
	'flex-end' |
	'space-between' |
	'space-around' |
	'space-evenly'
	align?:
	'flex-start' |
	'center' |
	'flex-end' |
	'stretch' |
	'baseline'
}

export default function Container({ className, children, wrap, justify, align }: Props) {
	const Wrapper = styled(wrap || Root)({
		alignItems: align,
		justifyContent: justify,
		flexWrap: 'wrap',
		display: 'flex'
	})
	return (
		<Wrapper className={className}>
			{children}
		</Wrapper>
	)
}