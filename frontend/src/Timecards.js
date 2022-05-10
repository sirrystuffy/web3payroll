import Navbar from "./Navbar";
import './Timecards.css';
import { saveAs } from "file-saver";
import { useState } from "react";
import axios from "axios";


function Timecards() {
    const saveFile = () => {
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
    };
    const [tcnum, setTcnum] = useState('');
    const [corHrs, setCorHrs] = useState('');
    const [text, setText] = useState('');

    const url = "http://localhost:5000/disputes";


    const handleSubmit = (e) => {
    e.preventDefault();
    const disputesubmit = { tcnum, corHrs };

    console.log(disputesubmit)

    axios
      .post(url, disputesubmit).then(response => {
        setText(response.data);
      })
  }


    const saveFile2 = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };

    return (

        <div className="TimecardClass">
            <div className="TimecardPanel">
                <h2 className="Header">This Week's Timecard</h2>

                <object className="TimecardViewer"
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

                <button className="PrevTimecardButton" onClick={saveFile}>View Last Week's Timecard</button>
            </div>

            <div className="DisputePanel">
                <h2 className="Header">File a Dispute</h2>
                <form onSubmit={handleSubmit}>
                <div>
                    <h3 style={{ marginTop: 25 }}>Timecard number</h3>
                <input
                    type="text"
                    required
                    value={tcnum}
                    onChange={(e) => setTcnum(e.target.value)} />

                <h3>Correct hours worked</h3>

                <input
                    type="text"
                    required
                    value={corHrs}
                    onChange={(e) => setCorHrs(e.target.value)} />
                </div>
                    <button className="DisputeButton" style={{ marginTop: 45 }}>Dispute</button>
                </form>
                {text}
            </div>
        </div>
  )
}

export default Timecards;