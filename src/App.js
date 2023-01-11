import React, { useEffect } from "react";
import Main from "./pages/Main";
import "./style/adaptive/tablet.scss";
import "./style/adaptive/laptop.scss";
import "./style/adaptive/desktop.scss";
function App() {
	useEffect(() => {
		if (localStorage.getItem("theme") === "dark") {
			document.body.classList.add("dark-theme")
		} else {
			document.body.classList.add("light-theme")
		}

	}, [])
	return (
		<div className="app">
			<Main />
		</div>
	);
}

export default App;
