import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "./shadcn.css";
import App from "./components/component";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <App /> */}
		<App />
	</StrictMode>
);
