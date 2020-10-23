import React, { Children, cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import ClearFix from '../ClearFix';
import Break from './Break';
import Item from './Item'
import Flex from '../Flex'


interface Props {
	className?: string
	children: ReactNode
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

export default function Grid({ className, children, wrap, justify, align }: Props) {

	let sizes: string[][] = [['100%']]
	let row: number = 0
	let parts: number[] = [0]

	children = Children.map(children, child => {
		if (isValidElement(child))
			switch (child.type) {
				case Item:
					let width = child.props.width
					if (/^\d*fr$/.test(width))
						parts[row] += parseInt(width.slice(0, -2))
					else
						sizes[row].push(width)
					return child

				case Break:
					row++
					sizes.push(['100%'])
					parts.push(0)
					return child
			}
	})

	let calcSizes = sizes.map((size, i) =>
		(size.length > 1 ? `(${size.join(' - ')})` : size) +
		(parts[i] !== 0 ? ` / ${parts[i]}` : ''))

	let singleLine: boolean = true
	row = 0
	children = Children.map(children, (children, i) => {
		let child = (children! as ReactElement)
		let width = child.props.width
		switch (child.type) {
			case Item:
				if (/\d*fr$/.test(width))
					return cloneElement(child, {
						width: `calc(${calcSizes[row]} * ${width.slice(0, -2)})`
					})
				return child

			case Break:
				singleLine = false
				row++
				break
		}
	})

	const Wrapper = justify || !singleLine || align ? Flex : ClearFix

	return (
		<Wrapper wrap={wrap} className={className} justify={justify} align={align}>
			{children}
		</Wrapper>
	);
}