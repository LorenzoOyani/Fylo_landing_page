
import desktop from  "../assets/images/icon-access-anywhere.svg";
import security from  "../assets/images/icon-security.svg";
import collaboration from "../assets/images/icon-collaboration.svg";
import anyFile from "../assets/images/icon-any-file.svg";
import productive from "../assets/images/illustration-stay-productive.png";


function FirstSection() {

    return (
        <>
        <div className="hero__section">
            <div className="inner-section">
                <div className="contents">
                    <div className="content-items">
                    <img src= {desktop} alt="curvy-desktop" className="content-img"/>
                    <h2>
                        Access your files, anywhere. 
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum,<br />
                         doloribus tenetur! Velit reprehenderit a iure ipsa <br />
                          aspernatur magnam laudantium est!
                    </p>

                    </div>
                    
                    <div className="content-items">
                        <img src={security} alt="security" className="content-img" />
                        <h2>
                            security you can trust.
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, repudiandae.</p>
                    </div>

                    <div className="content-items">
                        <img src={collaboration} alt="collaboration"  className="content-img"/>
                        <h2>
                            Real-time collaboration
                        </h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, architecto?</p>
                    </div>

                    <div className="content-items">
                        <img src={anyFile} alt="any-file" className="content-img" />
                        <h2>
                            Store any type of file
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, assumenda.
                        </p>
                    </div>
                </div>
                
                <div className="last_content">
                        <img src={productive} alt="stay_productive" className="content-img" />
                        <div className="last_content_item">
                            <div className="inner-content">
                            <h1>
                        stay productive, <br />
                             wherever you are.
                        </h1>
                           
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                         Praesentium iure voluptatem consequuntur sunt. <br />
                          Soluta sequi eaque ex quibusdam cum dolorem veritatis earum voluptate incidunt debitis?</p>

                            </div>
                       
                        </div>
                       
                        </div>

            </div>

        </div>
        
        </>
    )
}


export default FirstSection;