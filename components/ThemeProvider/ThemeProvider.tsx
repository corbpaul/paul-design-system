import React, {
  AnchorHTMLAttributes,
  ComponentType,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { TreatProvider } from "react-treat";

import { Theme } from "../../themes/Theme";

const ThemeContext = createContext<Theme | null>(null);
export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (theme === null) {
    throw new Error("No theme available on context");
  }

  return theme;
};

export interface ILinkComponentProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
export type LinkComponent = ComponentType<ILinkComponentProps>;
const DefaultLinkComponent = (props: ILinkComponentProps) => <a {...props} />;
const LinkComponentContext = createContext<LinkComponent>(DefaultLinkComponent);
export const useLinkComponent = () => useContext(LinkComponentContext);

export interface IThemeProviderProps {
  theme: Theme;
  children: ReactNode;
  styleBody?: boolean;
  linkComponent?: LinkComponent;
}

export const ThemeProvider = ({
  theme,
  children,
  styleBody = true,
  linkComponent,
}: IThemeProviderProps) => {
  const linkComponentFromContext = useLinkComponent();

  return (
    <ThemeContext.Provider value={theme}>
      <TreatProvider theme={theme.treatTheme}>
        <LinkComponentContext.Provider
          value={linkComponent || linkComponentFromContext}
        >
          {styleBody ? (
            <style type="text/css">{`body{margin:0;padding:0;background:${theme.background}}`}</style>
          ) : null}
          {children}
        </LinkComponentContext.Provider>
      </TreatProvider>
    </ThemeContext.Provider>
  );
};
