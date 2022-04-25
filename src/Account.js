import Navbar from "./Navbar";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
  };
  

  
  const url = "http://localhost:5000/employees";


function Account(){
    axios
      .get(url,
        {
            param:
            {
                ID: 12345
            }
        })
    return(
        <div style={{
            backgroundColor: 'gray',
          }}> 
    <Navbar/>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles, borderRadius: '16px',flex: 3, height:500}}>
        <Box sx={{ ...commonStyles, borderRadius: '16px', height:100, backgroundColor: 'blue'}}>
          <Typography color="#fff" variant="h3" align="center" textAlign ="center" sx={{ p: 1, m:1 }}>
            Your Account Info
          </Typography>
        </Box>
        <Typography color="#000" variant="h5" align="center" textAlign ="center" sx={{ p: 1, m:1 }}>
          Placeholder Text
        </Typography>
      </Box>
      <Box sx={{ ...commonStyles, borderRadius: '16px',flex: 1, height:500}}>
        <Box sx={{ ...commonStyles, borderRadius: '16px', height:100, backgroundColor: 'blue'}}>
        <Typography color="#fff" variant="h3" align="center" textAlign ="center" sx={{ p: 1, m:1 }}>
          Account Help
        </Typography>
      </Box>
      <Typography color="#000" variant="h5" align="center" textAlign ="center" sx={{ p: 1, m:1 }}>
        Placeholder Text
      </Typography>

      </Box>

    </Box>

 

    </div>


    )
}

export default Account;