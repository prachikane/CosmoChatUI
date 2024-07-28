import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Layout from "./components/layout/layout";
import CosmoChat from "./components/cosmochat/cosmochat";
import ActivityPage from "./components/activitypage/activitypage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/cosmochat" element={<Layout/>}>
          <Route index element = {<CosmoChat/>} />
          <Route path="activity" element = {<ActivityPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
