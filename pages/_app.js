import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const { mutate } = useSWRConfig();
  mutate(key, data, options);
  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 1000,
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
