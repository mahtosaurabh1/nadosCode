import './footer.css'

function Footer(){
    return(
        <>
        <div className="footer">
            <img src="https://nados.io/assets/logo.svg" alt="" className="nadoslogo" />
            <div className="social-media-contact">
            <a href="https://www.facebook.com/pepcoding/" target="_blank"><img src="	https://nados.io/assets/landing/facebook%20icon.svg" alt=""/></a>
            <a href="https://www.instagram.com/pepcoding/" target="_blank"><img src="https://nados.io/assets/landing/instagram%20icon.svg" alt="" /></a>
            <a href="https://www.linkedin.com/company/pepcoding-education/" target="_blank"><img src="	https://nados.io/assets/landing/linkedin%20icon.svg" alt="" /></a>
            <a href="https://twitter.com/pepcoding" target="_blank"><img src="	https://nados.io/assets/landing/twitter%20icon.svg" alt=""/></a>
            <a href="https://www.youtube.com/pepcoding" target="_blank"><img src="https://nados.io/assets/landing/youtube%20icon.svg" alt="" /></a>
            </div>
            <div className="copyright">
            <p> © All rights reserved to Saurabh Kumar</p>
            </div>
            
        </div>

        </>
    )
}
export default Footer