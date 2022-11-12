import { BrowserRouter, Routes, Route } from "react-router-dom";

//scss
//import "./app.scss";

import Home from "./page/home/Home";
import Upload from "./page/videoUpload/VideoUpload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":videoId" element={<Home />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
