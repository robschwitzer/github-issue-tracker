import { createContext } from "react";

export interface IHeaderContext {
  logo?: string;
  url?: string;
  setHeaderConfig?: Function;
}

const HeaderContext = createContext<IHeaderContext>({});

export default HeaderContext;
