import { useState } from 'react'

function Form() {

    let [form,setform] = useState({
        firstName :'anand',
        lastName :'bhagat',
        email:'kumaranandstudent@gmail.com',
        house:{
            state:'Bihar',
            distict:'madhepura',
            village:'chousa'
        }
    });
 
   function handlefirst(e){
     setform({
        ...form,
        firstName : e.target.value
     });
   }

   function handlelast(e){
     setform({
        ...form,
        lastName : e.target.value
     });
   }

   function handleemail(e){
     setform({
        ...form,
        email : e.target.value
     });
   }
   function handlestate(e){
     setform({
        ...form,
        house:{
            ...form.house,
            state:e.target.value
        }
     });
   }
   function handledistict(e){
     setform({
        ...form,
        house:{
            ...form.house,
            distict:e.target.value
        }
     });
   }
   function handlevillage(e){
     setform({
        ...form,
        house:{
            ...form.house,
            village:e.target.value
        }
     });
   }

  return (
    <div className='box'>
      <label>First Name :
        <input value={form.firstName} 
        onChange={handlefirst} className='bg-white text-black px-2 mx-2 my-2'/>
      </label><br />

      <label>Last Name :
        <input value={form.lastName} 
        onChange={handlelast} className='bg-white text-black px-2 mx-2 my-2'/>
      </label><br />

      <label>Email :
        <input value={form.email} 
        onChange={handleemail} className='bg-white text-black px-2 mx-2 my-2'/>
      </label><br />

      <label>State :
        <input value={form.house.state} 
        onChange={handlestate} className='bg-white text-black px-2 mx-2'/>
      </label><br />

      <label>Distict : 
        <input value={form.house.distict} 
        onChange={handledistict} className='bg-white text-black px-2 mx-2 my-2'/>
      </label><br />

      <label>Village :
        <input value={form.house.village} 
        onChange={handlevillage} className='bg-white text-black px-2 mx-2 my-2 '/>
      </label>

      <p>
        {form.firstName}{' '}
        {form.lastName}{' '} <br/>
        {form.house.state}{' '} 
        {form.house.distict}{' '}
        {form.house.village}{' '} <br/>
        ({form.email})
      </p>
    </div>
  )
}

export default Form
