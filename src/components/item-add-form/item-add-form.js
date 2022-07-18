import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
	state = {
		label: "",
	};
	onLabelChange = (e) => {
		this.setState({
			label: e.target.value,
		});
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.label);
		this.setState({
			label: "",
		});
	};
	render() {
		return (
			<form className="item-add-form" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="form-control"
					onChange={this.onLabelChange}
					placeholder="Enter you item"
					value={this.state.label}
				/>
				<button>
					<span>Add Item</span>
				</button>
			</form>
		);
	}
}
