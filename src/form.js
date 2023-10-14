import {useState} from 'react';

function Myform() {
    const [name, setname] = useState("");
    const [phonenumber, setphonenumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name} and Phonenumber: ${phonenumber}`)
      }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='name'>
            <label className='Nametext'>Enter Your name : 
                <input 
                    type = "text"
                    value = {name}   
                    onChange={(e) => setname(e.target.value)}/>
            </label>
            </div>
            <div className='name'>
            <label>
                Phone Number : 
                <input 
                type="phonenumber"
                value={phonenumber}
                onChange={(e) => setphonenumber(e.target.value)}/>
            </label>
            </div>
            <input type="Submit"/>
        </form>
    )
}

export default Myform;
