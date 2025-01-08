import { createContext, useContext, useState } from "react";

interface TitleProps {
  title?: String | null | undefined;
  setIsAuth?: (isAuth: boolean) => void;
}
export const TitleContext: any = createContext<TitleProps>({ title: null });

const AuthProvider = ({ isTitleProp = null, children }: any) => {
  const [title, setTitle] = useState(isTitleProp);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const { title, setTitle }: any = useContext(TitleContext);
  return { title, setTitle };
};
