import Navbar from "./Navbar";
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
    <div style={{
      backgroundColor: 'gray',
    }}>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ ...commonStyles, borderRadius: '16px', flex: 3, height: 500 }}>
          <Box sx={{ ...commonStyles, borderRadius: '16px', height: 100, backgroundColor: 'blue' }}>
            <Typography color="#fff" variant="h3" align="center" textAlign="center" sx={{ p: 1, m: 1 }}>
              Your Account Info
            </Typography>
          </Box>
          {/* Mock data */}
          <Typography color="#000" variant="h5" align="center" textAlign="center" sx={{ p: 1, m: 1 }}>
            {name}
          </Typography>
          <Typography color="#000" variant="h5" align="center" textAlign="center" sx={{ p: 1, m: 1 }}>
            {email}
          </Typography>
          <Typography color="#000" variant="h5" align="center" textAlign="center" sx={{ p: 1, m: 1 }}>
            {phone}
          </Typography>
          <Typography color="#000" variant="h5" align="center" textAlign="center" sx={{ p: 1, m: 1 }}>
            {text}
          </Typography>
          
        </Box>

        <Box sx={{ ...commonStyles, borderRadius: '16px', flex: 1, height: 500 }}>
          <Box sx={{ ...commonStyles, borderRadius: '16px', height: 100, backgroundColor: 'blue' }}>
            <Typography color="#fff" variant="h3" align="center" textAlign="center" sx={{ p: 1, m: 1 }}>
              Account Help
            </Typography>
          </Box>
          <Typography color="#000" variant="h5" align="center" textAlign="center" sx={{ p: 1, m: 1 }}>
            Placeholder Text
          </Typography>

        </Box>

      </Box>



    </div>


  )
}

export default Account;