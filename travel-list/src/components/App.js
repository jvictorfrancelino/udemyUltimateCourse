import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItems(id) {
		console.log("The id: " + id + " was deleted from the list.");
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearList() {
		let confirmed = Boolean;
		if (items.length) {
			confirmed = window.confirm("Are you sure you want do delete all items?");
		} else {
			window.alert("There is no items to be deleted on the list");
		}

		if (confirmed) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItems}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}

