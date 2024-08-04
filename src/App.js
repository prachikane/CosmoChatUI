import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Layout from "./components/layout/layout";
import CosmoChat from "./components/cosmochat/cosmochat";
import ActivityPage from "./components/activitypage/activitypage";
import HomePage from './components/homepage/homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="homepage" element = {<HomePage/>} />
          <Route path="cosmochat" element = {<CosmoChat/>} />
          <Route path="activity" element = {<ActivityPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
