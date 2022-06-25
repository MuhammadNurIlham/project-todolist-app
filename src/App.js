import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <NavigationBar />
      <TodoList />
      {/* <LandingPage /> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

// <div>
//   <NavigationBar />
//   <TodoList />
//   <LandingPage />
//   <Intro />
//   <SectionIntro />
//   <Project />
//   <ExampleCrud />
//   <Footer />
// </div>

{/* <Route exact path="/app-todolist" element={<LandingPage />}></Route> */ }
{/* <Routes>
        <Route exact path="/create-todolist" element={<TodoList />}></Route>
      </Routes> */}