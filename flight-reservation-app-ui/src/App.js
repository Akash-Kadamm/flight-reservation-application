import logo from './logo.svg';
import './App.css';
import Feedback from './Components/Feedback';

import Signup1 from './Components/Signup';
import { Feedback1 } from './Components/Feedback1';
import { Complaint } from './Components/Complaint';
import { Login1 } from './Components/Login1';
import { EmailLogin } from './Components/EmailLogin';
import { OtpLogin } from './Components/OtpLogin';
import { BlockedList } from './Components/BlockedList';
import { ComplaintList } from './Components/ComplaintList';
import { MaterialUiFromValidation } from './Components/MaterialUiFromValidation';


function App() {
  return (
    <div className="App">
      
        {/* <Feedback/> */}
       
        {/* <Signup1/>  */}
        {/* <Feedback1/> */}
        {/* <Complaint/> */}
         <Login1/> 
        <EmailLogin/>
         <OtpLogin/>
      <BlockedList/>
      {/* <ComplaintList/> */}

      {/* <MaterialUiFromValidation/> */}
      
    </div>
  );
}

export default App;
