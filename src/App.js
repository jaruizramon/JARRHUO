import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import AboutMe from "./components/AboutMe";
import PostPage from "./components/PostPage";
import Columns from './components/Columns';



function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-800">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Columns/>}/>
                <Route 
                element={<PostPage postType={"project"}/>} 
                path="project" 
                />
                <Route 
                path="diary" 
                element={<PostPage postType="diary"/>}
                />
                <Route path="about-me" element={<AboutMe/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;