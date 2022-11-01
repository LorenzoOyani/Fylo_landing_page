

import profile1 from "../assets/images/profile-1.jpg"; 
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";

function Card () {


    return (
        <>
        <div className="enclosing__div">
            <div className="card__wrapper">
                <div className="inner__wrapper">
                
                
                <div className="first__component">
                <div className="card__component">
                    <p className="card__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusamus blanditiis minus recusandae incidunt debitis 
                         dicta eligendi ad atque exercitationem ratione.
                    </p>
                    <img src= {profile1}  alt="profile-1" className="image__class" />
                    <h2 className="card__text1" >
                        Satish patel
                    </h2>
                    <p className="card__text1">fonder & CEO Huddle</p>
                    </div>

                </div>

                <div className="second__component">
                <div className="card__component">
                    <p className="card__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusamus blanditiis minus recusandae incidunt debitis 
                         dicta eligendi ad atque exercitationem ratione.
                    </p>
                    <img src= {profile2}  alt="profile-1" className="image__class"/>
                    <h2 className="card__text1">
                        Bruce mckenzie
                    </h2>
                    <p className="card__text1">fonder & CEO Huddle</p>
                    </div>

                </div>
                  
                  <div className="third__component">
  
                  <div className="card__component">
                    <p className="card__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusamus blanditiis minus recusandae incidunt debitis 
                         dicta eligendi ad atque exercitationem ratione.
                    </p>
                    <img src= {profile3}  alt="profile-1" className=" image__class" />
                    <h2 className="card__text1">
                        Eva Boyd
                    </h2>
                    <p className="card__text1">fonder & CEO Huddle</p>
                    </div>
                  </div>
                
                </div>

            </div>

        </div>
        
        </>
    )
}


export default Card;