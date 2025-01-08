import { Route, Routes } from 'react-router-dom';

import './App.css';

import Detail from './pages/Detail';
import List from './pages/List';
import Notfound from './pages/Notfound';
import Regist from './pages/Regist';
import Update from './pages/Update';

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<List />} />
					<Route path="/regist" element={<Regist />} />
					<Route path="/detail" element={<Detail />} />
					<Route path="/update/:id" element={<Update />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
