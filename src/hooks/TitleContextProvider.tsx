import { createContext, useContext, useEffect, useState } from 'react';

interface TitleProps {
	title?: String | null | undefined;
	setIsAuth?: (isAuth: String) => void;
}
export const TitleContext: any = createContext<TitleProps>({ title: null });

const TitleContextProvider = ({ strTitleProp = null, children }: any) => {
	const [title, setTitle] = useState(strTitleProp);

	useEffect(() => {
		document.title = title;
	}, [title]);

	return <TitleContext.Provider value={{ title, setTitle }}>{children}</TitleContext.Provider>;
};

export default TitleContextProvider;

export const useTitleContext = () => {
	const { title, setTitle }: any = useContext(TitleContext);
	return { title, setTitle };
};
