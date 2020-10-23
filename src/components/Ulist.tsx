import React, { Children, ReactNode } from "react";

interface Props {
	children: ReactNode
	className?: string
}

export default function A({ children, className }: Props) {
	return <ul className={className}>{
		Children.map(children, child => <li>{child}</li>)
	}</ul>
}