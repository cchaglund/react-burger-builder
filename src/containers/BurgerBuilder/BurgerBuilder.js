import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
	state = {
		ingredients: {},
		price: 0
	}

	render() {
		return (
			<Aux>
				<div>Burger</div>
				<div>Build controls</div>
			</Aux>
		)
	}
}

export default BurgerBuilder;