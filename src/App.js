// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/navbar';
import './style/landingPage.css';
// import Intro from './components/intro';
// import SectionIntro from './components/section';
// import Footer from './components/footer';
// import Project from './components/projects';
// import ExampleCrud from './components/example';
import TodoList from './components/TodoList copy';
import LandingPage from './landingPage/LandingPage';


function App() {
  return (
    <div>
      <NavigationBar />
      <TodoList />
      <LandingPage />
      {/* // <Intro />
      // <SectionIntro />
      // <Project />
      // <ExampleCrud /> */}
      {/* <Footer /> */}
    </div>
    // <BrowserRouter>
    //   <LandingPage />
    //   <Routes>
    //     <Route exact path="/" element={<LandingPage />}></Route>
    //     <Route exact path="/app-todolist" element={<LandingPage />}></Route>
    //   </Routes>
    //   <Routes>
    //     <Route exact path="/create-todolist" element={<TodoList />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
