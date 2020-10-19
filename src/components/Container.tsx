import React, { ReactNode } from "react";
import styled from "styled-components"
import Root from './Root'


interface Props {
	className?: string
	children?: ReactNode
	width?: string
	maxWidth?: string
	wrap?: string
}

export default function Container({ className, children, width, maxWidth, wrap }: Props) {
	const Wrapper = styled(wrap || Root)({
		width: width,
		maxWidth: maxWidth,
		margin: 'auto'
	})
	return (
		<Wrapper className={className}>
			{children}
		</Wrapper>
	)
}