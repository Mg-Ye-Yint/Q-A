import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/Pages/Home";
import { AudienceLogin } from "./assets/Pages/AudienceLogin";
import { HostLogin } from "./assets/Pages/HostLogin";
import { Questions } from "./assets/Pages/Questions";
import AskNewQuestion from "./assets/Pages/AskNewQuestion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/audiencelogin"} element={<AudienceLogin />} />
        <Route path={"/hostlogin"} element={<HostLogin />} />
        <Route path={"/questions"} element={<Questions />} />
        <Route path={"/asknewquestion"} element={<AskNewQuestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
