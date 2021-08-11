import React, { useState } from 'react';

import { MainContainer, NavBar, OverLay } from './AppStyles';
import Cart from './components/cart';
import GlobalStyles from './GlobalStyles';

export default function App() {
	const [isToggle, setIsToggle] = useState(false);
	return (
		<>
			<GlobalStyles />
			<NavBar>
				<Cart isToggle={isToggle} setIsToggle={setIsToggle} />
			</NavBar>
			<MainContainer>{isToggle && <OverLay />}</MainContainer>
		</>
	);
}
