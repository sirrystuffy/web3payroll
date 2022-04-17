import Navbar from "./Navbar";
import './Timecards.css';
import { saveAs } from "file-saver";

function Timecards(){

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
            <button className='downloadBtnFive' onClick={saveFile2}>Open previous week's time card</button>
        </h2>

        <h2 className= 'DisputePanel'
        style=
        {
        {width: 600, height: 150}
        }>
            File a time card dispute

            <h3>Time card #</h3>
            <input className="Timecardnum" type="text" style={{ width: "30%", marginRight: "10px" }}/>
            <h3>Correct hours worked</h3>
            <input className="Timecardcorr" type="text" style={{ width: "30%", marginRight: "10px" }}/>
        </h2>

        
    </div>


    )
}

export default Timecards;