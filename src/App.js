import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './components/mainPage/homePage';
import About from './components/mainPage/aboutPage';
import Contact from './components/mainPage/contactPage';
import Projects from './components/mainPage/projects';
import PageNotFound from './components/pageNotFound';
import VideoPoker from './components/videoPoker/videoPoker';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path='/poker' element={<VideoPoker />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
