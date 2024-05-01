import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "./pages/home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
