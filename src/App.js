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
                element={(props) => <PostPage postType={"project"} {...props}/>} 
                path="project" 
                />
                <Route 
                path="diary" 
                element={(props) => <PostPage postType={"diary"} {...props}/>}
                />
                <Route path="about-me" element={<AboutMe/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;