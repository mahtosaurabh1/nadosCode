import img1 from '../image/img1.png'
import nishita_aggarwal from '../image/nishita_aggarwal.jpg'
import './aboutpep.css'
function AboutPep(){
    return(
        <>
        <div className="about">
            <img src={img1} alt="" className="sidepic" />
            <div className="article">
            <h1>Why Nados</h1>
            <p className='skill'>Not A Degree Only Skill</p>
            <h1>Compete in hiring and Hackothon challenges.</h1>
            <p>Avail dream career opportunities through weekly Hackathons and hiring challenges.</p>
            <a className='btn-learn-more' href="https://nados.io/content">Learn More</a>
            </div>
            
        </div>
        <div className="whatpeplsay">
            <h1>What people say about NADOS ?</h1>
        </div>
        <div className="placed-student">
            <div className="student-container">
                <img className="nishitaimg" src={nishita_aggarwal} alt="" />
                <h3>nishita_aggarwal</h3>
                <img className="logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
            </div>

            <div className="student-container">
                <img className="nishitaimg" src="https://www.pepcoding.com/data/placements/photo/aman_rajput.jpg" alt="" />
                <h3>Aman Rajput</h3>
                <img className="logo" src="https://www.pepcoding.com/data/companies/icon/microsoft.png" alt="" />
            </div>

            <div className="student-container">
                <img className="nishitaimg" src="https://www.pepcoding.com/data/placements/photo/hansika_gupta.jpg" alt="" />
                <h3>Hanshika Gupta</h3>
                <img className="logo" src="https://www.pepcoding.com/data/companies/icon/linkedin.png" alt="" />
            </div>
        </div>
       </>
    )
}
export default AboutPep