import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import DashBoard from './components/dashboard/DashBoard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="row">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
