import Navbar from "./Navbar";
import './Timecards.css';
import { saveAs } from "file-saver";
import { useState } from "react";
import axios from "axios";


function Timecards(){

  const [tcnum, setTcnum] = useState('');
  const [corHrs, setCorHrs] = useState('');

  const url = "http://localhost:5000/disputes";


  const handleSubmit = (e) =>{
    e.preventDefault();
    const disputesubmit = {tcnum, corHrs};

    console.log(disputesubmit)

    axios
        .post(url, disputesubmit)
  }


    const saveFile2 = () => {
        saveAs(
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          "example.pdf"
        );
      };

    return(
    <div className='TimecardsClass'>
        <Navbar/>
        <h2 className= 'TimecardDisplay'
        style=
        {
        {width: 600, height: 400}
        }>
            Your Time cards

            <button className='downloadBtnFour' onClick={saveFile2}>Open this week's timecard</button>
            <button className='downloadBtnFive' onClick={saveFile2}>Open previous week's timecard</button>
        </h2>

        <h2 className= 'DisputePanel'
        style=
        {
        {width: 600, height: 150}
        }>
            File a time card dispute
            <form onSubmit={handleSubmit}>

              <label>Timecard number</label>
              <input
              type = "text"
              required
              value = {tcnum}
              onChange={(e) => setTcnum(e.target.value)} />

              <label>Correct hours worked</label>

              <input
              type = "text"
              required
              value = {corHrs}
              onChange={(e) => setCorHrs(e.target.value)} />  

              <button>Submit Dispute</button>


            </form>
    
        </h2>

        
    </div>


    )
}

export default Timecards;