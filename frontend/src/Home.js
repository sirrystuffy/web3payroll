import './Home.css'
import Navbar from "./Navbar";
import { saveAs } from "file-saver";
import React, { Component }  from 'react';
function Home() {
    const saveFile = () => {
        saveAs(
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          "example.pdf"
        );
      };

    return (
        <div className='HomeClass' 
        style={{
          }}> 
        <Navbar/>
   
        
        <h2 className= 'HomePageSchedule'
        style={{
        width: 700, 
        height: 500,
        }}>
            This Week's Schedule

            <button className='downloadBtnOne' onClick={saveFile}>Open this week's schedule</button>
            <button className='downloadBtnTwo' onClick={saveFile}>Open next week's schedule</button>
            <button className='downloadBtnThree' onClick={saveFile}>Open previous week's schedule</button>
        </h2>

        <h2 className='helpPanel'
        style=
        {
            {width: 400, height: 500}
        }
        >
            Help and Services
            <h3>Useful info goes here. Store policies regarding wages, state laws the employee should know, 
                Phone numbers that can be called etc...
            </h3>
            
        </h2>

        <h2 className='quicklinksPanel'
        style=
        {
            {width: 200, height: 250}
        }
        >
           Quick Links 

           <h3><a href="#">Link to Company's store page</a></h3>
           <h3><a href="#">Link to Company's FAQ</a></h3>
        </h2>

        <h2 className='PaymentPanel'
        style=
        {
            {width: 200, height: 250}
        }
        >
           Payments 
           <h3>Next Payment will be made on insertdate. Previous payment made on insertdate</h3>
        </h2>

           
        
        </div>

        

    )
}



export default Home