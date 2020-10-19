import { cloneElement, createElement, ReactElement, ReactNode } from "react";

interface Props {
	className?: string,
	children: ReactNode
}

export default function Root({ className, children }: Props) {

	return Array.isArray(children)
		? createElement('div', { className: className }, children)
		: cloneElement((children as ReactElement), { className: className })

}