
import logo from "../assets/images/logo.svg";
function BaseFooter () {


    return (
        <>
        <div className="base__footer">
            <div className="base__content">
                <div className="img__logo">
            <img src= {logo} alt="logo" className="logo__image" />
                </div>

             
                <div className="enclosing__divs">

               
                    <div className="contentss">
                        
                    <h2>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum, dolor sit amet consectetur <br />
                 adipisicing elit. Quia, ipsa.</p>
                </div>

                <div className="mid__contents">
                    <h2>+123-081-35-87-5494</h2>
                    <h2>email@example</h2>

                </div>

                <div className="list__div">
                <ul className =  "list__items">
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blogs</li>
                </ul>

                </div>
                <div className="list__div">
                <ul list__items>
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    
                </ul>

                </div>

                <div className="social__Links">
                    
                </div>
                
                
                </div>
               
            </div>
            </div>

        </>
    )
}

export default BaseFooter