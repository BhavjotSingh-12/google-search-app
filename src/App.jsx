import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/:query/:startIndex" element={<SearchResult />}></Route>
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

export default App;