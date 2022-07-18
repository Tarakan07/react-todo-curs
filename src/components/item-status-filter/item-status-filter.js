import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
	buttons = [
		{ name: "all", label: "All" },
		{ name: "active", label: "Active" },
		{ name: "done", label: "Done" },
	];

	render() {
		const { filter, onFilterChange } = this.props;
		const buttons = this.buttons.map((el) => {
			const isActive = filter == el.name;
			const clazz = isActive ? "btn-info" : "btn-outline-secondary";
			return (
				<button
					type="button"
					className={`btn ${clazz}`}
					key={el.name}
					onClick={() => onFilterChange(el.name)}
				>
					{el.label}
				</button>
			);
		});
		return <div className="btn-group">{buttons}</div>;
	}
}
