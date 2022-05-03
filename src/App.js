import Layout from "./components/Layout";
import { AnimeProvider } from "./context/AnimeProvider";

function App() {
  return (
    <>
      <AnimeProvider>
        <Layout/>
      </AnimeProvider>
    </>
  );
}

export default App;
