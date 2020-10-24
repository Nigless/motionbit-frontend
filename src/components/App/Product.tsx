import React from "react";
import styled from "styled-components"


interface Props {
	className?: string,
	img: string
	title: string
}

const Title = styled.div({
	fontWeight: 600,
	textAlign: 'center'
})

const Img = styled.img({
	height: 200
})

export default function Container({ className, img, title }: Props) {

	return (
		<div>
			<Img src={img} alt={title} />
			<Title>{title}</Title>
		</div>

	)
}