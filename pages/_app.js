import "../styles/globals.css";
import "../styles/songAll.css";
import "../styles/index.css";
import "../styles/progress_customized.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { createContext, useState } from "react";

const client = new ApolloClient({
  uri: "https://song-tc.pixelotech.com/graphql",
  cache: new InMemoryCache(),
});
export const songContext = createContext();

export default function App({ Component, pageProps }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <ApolloProvider client={client}>
      <songContext.Provider value={{ isPlaying, setIsPlaying }}>
        <Component {...pageProps} />
      </songContext.Provider>
    </ApolloProvider>
  );
}
