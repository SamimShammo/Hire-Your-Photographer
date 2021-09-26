import React, { useEffect, useState } from 'react';
import Charge from '../Charge/Charge';
import Person from '../Person/Person';
import './Photography.css'

const Photography = () => {
  const [persons, setPerson] = useState([])
  useEffect(() => {
      fetch('./photographer-persons.json')
      .then(res => res.json())
      .then(data => setPerson(data))
  }, [])

  const [charge, setCharge] = useState([])
  const hiremeHandelar = person =>{
      const passCharge = [...charge, person]
      setCharge(passCharge)
  }

    return (
        <div className="photography-container">
             <div className="photographer">
                 {
                    persons.map(person => <Person 
                        hiremeHandelar={hiremeHandelar}
                        key={person.key}
                        person={person}
                        ></Person>)
                 }
             </div>
             <div className="photographer-charge">
                <Charge charge={charge} >
                    
                </Charge>
             </div>
        </div>
    );
};

export default Photography;