import './navbar.css'
function NavBar() {
  return (
    <>
      <header >
      <img className="logo" src="https://nados.io/assets/logo.svg" alt="nados" />
        <div className="options">
        <li><a href="/">Home</a></li>
         <li>
         <select class="select">
                    <option value="" >Solutions</option>
                    <option value="1">For Recruiter</option>
                    <option value="2">For Student</option>
            </select>
         </li>
         <li><a href="https://www.pepcoding.com/trainings" target="_blank">Courses</a></li>
        <li><a href="https://nados.io/our-team" target="_blank">Our Team</a></li>
        <li><a href="https://nados.io/contactus" target="_blank"></a></li>
        <li><a  href="https://nados.io/community" target="_blank"><button className='btn'>Go To Community</button></a></li> 
        </div>
      </header>
    </>
  );
}
export default NavBar;
