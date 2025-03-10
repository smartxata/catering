import './App.css'
import { Route, Routes,BrowserRouter } from 'react-router'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import MyMenu from './pages/MyMenu';


const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="gallery" element={<Gallery />} />
			<Route path="menu" element={<MyMenu />} />
		</Routes>
	</BrowserRouter>
);

export default App