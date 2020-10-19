import React, { ReactNode } from "react"
import styled from "styled-components"
import Root from './Root'

interface Props {
	className?: string,
	wrap?: string,
	children: ReactNode
}

export default function ClearFix({ className, wrap, children }: Props) {
	const Wrapper = styled(wrap || Root)({
		'&::after': {
			content: '""',
			clear: 'both',
			display: 'table'
		}
	})
	return (
		<Wrapper className={className}>
			{children}
		</Wrapper>
	)
}
