import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
	render() {
		const addItem = this.props.addItem;
		return (
			<div className="item-add-form">
				<button onClick={() => this.props.addItem("klalala")}>
					<span>Add Item</span>
				</button>
			</div>
		);
	}
}
