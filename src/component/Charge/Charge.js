import React from 'react';
import './Charge.css'

const Charge = (props) => {
    console.log(props)
    const {charge} = props

    let total = 0;
    for (const totalAmount of charge) {
        total = total + totalAmount.charge;
        
    }
    return (
        <div className="charge-container shadow">
            <h2><span className="totalHire">Total Hire: </span>{charge.length} </h2>
            <h3><span className="totalHire">Total Charge: </span>${total}</h3>
            {
                charge.map(addName => <div className="addname">
                    <img className="shadow" src={addName.img} alt="" />
                    <h4>{addName.name}</h4> 
                    </div>)
            }
            <div className="pay">
            <button className="btn btn-outline-primary payment w-100"><i class="fab fa-paypal"></i> Payment</button>
            </div>
            
        </div>
    );
};

export default Charge;