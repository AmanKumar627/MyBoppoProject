import react, { useState } from 'react'

const MultipleInputs=()=>{
  const [userRegistration,setUserRegistration]=useState(
     {
       username:"",
       email:"",
       phone:"",
       password:""
     }
  )

   const [records,setRecords]=useState([]);

  const handleinput=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      console.log(name,value)

      setUserRegistration({...userRegistration, [name]:value})






  }
   const handleSubmit=(e)=>{
       e.preventDefault();


       const newRecords={...userRegistration, id:new Date().toString()}
       console.log(records)
        setRecords([...records,newRecords])
        console.log(records)

        setUserRegistration({username:"",email:"",phone:"",password:""})



   }



    return(
  <>      
   <form action="" onSubmit={handleSubmit}>
       <div>
    <label htmlFor ="username">username</label>
    <input type="text" name="username" id="username"
       onChange={handleinput}
      value={userRegistration.username} autoComplete="off"

    />
    </div>
    <div>
    <label htmlFor ="email">email</label>
    <input type="email" name="email" id="email"
     onChange={handleinput}
     value={userRegistration.email} autoComplete="off"
    />
    </div>
    <div>
    <label htmlFor ="phone">phone</label>
    <input type="phone" name="phone" id="phone"
     onChange={handleinput}
     value={userRegistration.phone} autoComplete="off"
    
    />
    </div>
    <div>
    <label htmlFor ="password">password</label>
    <input type="text" name="password" id="password"
     onChange={handleinput}
     value={userRegistration.password} autoComplete="off"
    />
    </div>
    <button type="Submit">Registration </button>
   </form>



</>
    )
}

export default MultipleInputs

