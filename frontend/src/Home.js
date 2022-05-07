import './Home.css'
import initialize from "./metamask/contract";
import axios from "axios";
import Navbar from "./Navbar";
import { saveAs } from "file-saver";
import React, { Component, useState, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
function Home() {
    const saveFile = () => {
        saveAs(
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          "example.pdf"
        );
      };

    return (
        <div className='HomeClass'>

            <div className="DualPanels">
                <div className='HelpPanel'>
                    <h2 className='Header'>
                        Help and Services
                    </h2>
                    <h3 style={{ margin: 30 }}>Links to helpful pages will go here. Other useful info may also here, such as store policies regarding wages, state laws the employee should know, etc.</h3>
                </div>

                <div className='QuickLinksPanel'>
                    <h2 className="Header">Quick Links</h2>

                    <h3><a href="#">Link to Company's Website</a></h3>
                    <h3><a href="#">Link to Company's FAQ</a></h3>
                    <h3><a href="#">Even More Links Here</a></h3>
                </div>
            </div>




            <div className='SchedulePanel'>
                <h2 className='Header'>
                    This Week's Schedule
                </h2>
                <object className="ScheduleViewer"
                    data='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                    <iframe
                        src='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
                        width="100%"
                        height="100%"
                    >
                        <p>This browser does not support PDF viewing.</p>
                    </iframe>
                </object>
                <div className="ScheduleButtons">
                    <ul>
                        <li><button className="PrevSchedule" onClick={saveFile}>Open previous week's schedule</button></li>
                        <li><button className="NextSchedule" onClick={saveFile}>Open next week's schedule</button></li>
                    </ul>
                </div>
            </div> 

        

            <div className="PanelAndButton">
                <div className='PaymentPanel'>
                    <h2 className="Header">Payments</h2>
                    <h3 style={{ margin: 20, paddingTop: 50, paddingBottom: 50}}>Current wallet balance is [INSERTBALANCE].</h3>
                    <h3 style={{ margin: 20 }}>Next payment of [INSERTAMOUNT] will be made on [INSERTDATE].</h3>
                    <h3 style={{ margin: 20 }}>Previous payment of [INSERTAMOUNT] was made on [INSERTDATE].</h3>
                </div>

                <button className="MetamaskButton" id="connectButton" onClick={initialize} disabled>Connect MetaMask</button>
            </div>
        </div>
    )
}

export default Home