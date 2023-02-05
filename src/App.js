import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import AboutMe from "./components/AboutMe";
import PostPage from "./components/PostPage";
import Columns from './components/Columns';
import ThisPost from "./components/ThisPost";



function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-black to-gray-600 max-h-full">
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
                <Route path="/post/:postId" element={<ThisPost postId=""/>} />
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;