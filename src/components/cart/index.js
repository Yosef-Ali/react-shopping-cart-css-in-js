import React, { useRef } from 'react';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
	CartCount,
	CartSideBar,
	EmptyCart,
	Icon,
	SideBarHeader,
	Wrapper,
} from './Styles';
import useOnClickOutSide from '../../hooks/useOnClickOutSide';

export default function Cart({ isToggle, setIsToggle }) {
	const sideBarRef = useRef();
	useOnClickOutSide(sideBarRef, () => setIsToggle(false));
	return (
		<>
			<Wrapper onClick={() => setIsToggle(true)}>
				<Icon icon={faShoppingCart} />
				<CartCount>0</CartCount>
			</Wrapper>
			<CartSideBar ref={sideBarRef} className={isToggle ? 'expand' : 'shrink'}>
				<SideBarHeader>Shopping Cart</SideBarHeader>
				<EmptyCart>Empty Cart</EmptyCart>
			</CartSideBar>
		</>
	);
}
