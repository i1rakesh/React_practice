import React, { useState } from "react";

function App(){
 const[fullName, setFullName] = useState(
     {
         fName: "",
         lName: "",
         email: ""
     }
 );
 
 
 function handleChange(event){
     const{ value, name} = event.target;
     
     setFullName(prevValue =>{
         if(name === "fName"){
           return{  
             fName : value,
             lName : prevValue.lName,
             email : prevValue.email
         };
        }
        else if(name ==="lName"){
            return{
                fName : prevValue.fName,
                lName : value,
                email : prevValue.email
            };
        }
        else if(name ==="email"){
            return{
                fName : prevValue.fName,
                lName : prevValue.lName,
                email: value
            };
        }
     });
    }
return(
    <div className="container">
        <h1>Hello {fullName.fName} {fullName.lName} </h1>
        <p>{fullName.email}</p>
        <form action="">
        <input name = "fName"
        placeholder="your name"
        onChange={handleChange}
        value={fullName.fName} />
        <input name = "lName"
        placeholder="your name"
        onChange={handleChange}
        value={fullName.lName} />
        <input 
        name = "email"
        placeholder="email"
        onChange={handleChange}
        value={fullName.email} 
        />
        <button>submit</button>
        </form>
    </div>
);   
}
export default App;