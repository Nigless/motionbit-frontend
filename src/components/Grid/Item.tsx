import styled from 'styled-components';
import Root from '../Root'

const Item = styled(Root)<{ width: String }>
	((props) => ({
		width: props.width,
		float: 'left'
	}))
export default Item