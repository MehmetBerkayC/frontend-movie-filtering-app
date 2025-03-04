import { Route, Routes } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { MovieProvider } from "./contexts/MovieContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<MovieProvider>
				<Header />
				{/* Put a header here */}
				<main className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favourites" element={<Favourites />} />
					</Routes>
				</main>
				{/* Put a footer here */}
				<Footer />
			</MovieProvider>
		</>
	);
}

export default App;
