import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Directory from "../pages/Directory";

const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/directory' element={<Directory />} />
            <Route path='/posting' element=''/>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

    )
}
export default AppRoutes;