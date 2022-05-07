import "./Account.css";
import axios from "axios";
import { useState } from "react";
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
};


const url = "http://localhost:5000/employees";


function Account() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  axios
    .get(url,
      {
        param:
        {
          ID: 12345 //Negligible for now
        }
      }).then(response => {
        // response contains a JSON of all employees in the Database 
        const workers = response.data.employees;   
        
        setName (workers[0].firstName + ' ' + workers[0].lastName);
        setEmail (workers[0].email) ;
        setPhone (workers[0].phone);
        setText("successfully received all employee information"); //Access employees by index : workers[0], workers[1], etc. Access property by dot notation : workers[1].firstName 
      }, []);

    return (

        <div className="AccountClass">

            <div className="InfoPanel">
                <h2 className="Header">Your Account Info</h2>
                <h3 style={{ margin: 10 }}>Information such as name, contact information, profile/employee ID, etc. will be displayed here.</h3>
            </div>

            <div className="HelpPanel">
                <h2 className="Header">Account Help</h2>
                <h3 style={{ margin: 10 }}>Links to account support pages will be placed here.</h3>
            </div>
        </div>
  )
}

export default Account;