import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import TitleContextProvider from './hooks/TitleContextProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<TitleContextProvider strTitleProp={'게시판 샘플'}>
			<App />
		</TitleContextProvider>
	</BrowserRouter>,
);
