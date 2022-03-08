
function Home() {

    return (
        <div className='HomeClass'> 
        <h1 className='NavBar'>Home Account Schedule Timecards Employers</h1> 
        
        <h2 className= 'HomePageSchedule'
        style=
        {
        {width: 700, height: 500}
        }>
            This Week's Schedule
        </h2>

        <h2 className='helpPanel'
        style=
        {
            {width: 200, height: 500}
        }
        >
            Help and Services
        </h2>

        <h2 className='quicklinksPanel'
        style=
        {
            {width: 200, height: 250}
        }
        >
           Quick Links 
        </h2>

        <h2 className='PaymentPanel'
        style=
        {
            {width: 200, height: 250}
        }
        >
           Payments 
        </h2>

           
        
        </div>

        

    )
}



export default Home