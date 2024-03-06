import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from "./users/Register";
import Login from './users/Login';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Tracking from './pages/Tracking';
import Setting from './pages/Setting';
import UserDashboard from './pages/UserDashboard';
import UpdateProfile from './pages/Updateprofile';
import WorkoutForm from './pages/WorkoutForm';
import WorkoutTrack from './pages/WorkoutTrack';
import WorkoutBase from './pages/WorkoutBase';
import WeightTracker from './pages/WeightTracker';
import ViewGoals from './pages/ViewGoals';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/UpdateProfile' element={<UpdateProfile/>}/>
          <Route exact path='/WorkoutForm' element={<WorkoutForm/>}/>
          <Route exact path='/workout-history' element={<History />} />
          <Route exact path='/exercise-tracking' element={<Tracking />} />
          <Route exact path='/goal-setting' element={<Setting />} />
          <Route exact path='/user-dashboard' element={<UserDashboard />} />
          <Route exact path='/WorkoutBase' element={<WorkoutBase />} />
          <Route exact path='/workout-track' element={<WorkoutTrack />} />
          <Route exact path='/weight-tracker' element={<WeightTracker />} />
          <Route exact path='/view-goals' element={<ViewGoals />} />
          <Route exact path='/update-goal/:id' element={<Setting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
