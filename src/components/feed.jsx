import './feed.css'
import student from '../image/student.png'

function Feed(){
    return(
        <>
       <div className="feed">
        <div className="joinbest">
            <h1>Join The Best Coding Community</h1>
            <p>Coding has never been so easy, fun and effective as with NADOS</p>
            {/* <button className='signupbtn'>Sign up</button> */}
            <a className="signupbtn" target='blank' href="https://nados.io/community">Sign up</a>
           <div className="student">
            <img src={student} alt=""></img>
            <p>1.5L+ people already registered</p>
           </div>
        </div>
        <div className="mobileimg">
            <img src="https://nados.io/assets/landing/mobile_Images.svg" alt="" />
        </div>
       </div>
       <div className="band">
          <div className="band-part">
          <h1>1.70L+</h1> 
          <p>Active Users</p>
          </div>
          <div className="band-part">
          <h1>177K+</h1> 
           <p>Doubts Solved</p>
          </div>
          <div className="band-part">
          <h1>700+</h1> 
           <p>Teaching Assistance</p>
          </div>
          <div className="band-part">
          <h1>170+</h1> 
           <p>Good Testimonials</p>
          </div>
        </div>
    </>
    )
}
export default Feed