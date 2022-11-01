
import logo from "../assets/images/logo.svg"
import illustration from "../assets/images/illustration-intro.png";

function NavBar() {


    return (
        <>
        <div className="header__wrapper">
        <div className="header">
            <img src= {logo} alt="flo_logo"  className="logo_img"/>
            <ul className="list-item">
                <li className="lists">product</li>
                <li className="lists">Team</li>
                <li className="lists">signIn</li>
            </ul>
        </div>
        <section className="first_section">
        <div className="section_class">
        <img src= {illustration} alt="intro_photo" className="sect_logo"/>
        <h2 className="sect-header">
            All your files in one secure location  accessible anywhere.
        </h2>
        <p className="paragraph">Flo stores all your most important important files in one secure location 
            Access them wherever you need, share and collaborate   friends, family and co-workers.
        </p>
        <div className="button_class">
        <button className="div_btn">
            Get started.
        </button>
        </div>
       
        </div>
        </section>
        </div>
       
        </>
    )

}

export default NavBar