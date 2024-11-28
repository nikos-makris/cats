import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import MainPage from "./pages/home/MainPage";
import NoMatch from "./pages/no-match/NoMatch";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NoMatch />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
