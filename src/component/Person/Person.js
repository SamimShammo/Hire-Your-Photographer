import React from 'react';
import './Person.css'

const Person = (props) => {
    console.log(props)
    // destructuring object
    const {name, img, about, age, expertise, charge, gender, location} = props.person
    return (
        <div className="perosn-container shadow">
             <div className="person-img">
                 <img src={img} alt="" />
             </div>
             <div className="person-content">
                 <h2>{name}</h2>
                 
                 <p><strong>About:</strong> {about.slice(0, 67)}</p>
                 <p><strong>Expertise:</strong> {expertise}</p>
                 <p><strong>Age:</strong> {age}</p>
                 <p><strong>Location:</strong> {location}</p>
                 <p><strong>Charge:</strong> ${charge}</p>
             </div>
             <button onClick={() => props.hiremeHandelar(props.person)} className="btn btn-outline-primary w-100 hireme"><i class="fas fa-user"></i> Hire Me</button>

        </div>
    );
};

export default Person;