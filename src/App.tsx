import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import HomePage from "./pages/home";
import DetailsPage from "./pages/details";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/:id" element={<DetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
