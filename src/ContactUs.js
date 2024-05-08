import React, { useState } from 'react';
import './App.css';



function ContactUs()
{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:''
  });

     function handleSubmit(e)
   {
  e.preventDefault();

   }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Name:</label>
          <input type= "text" className='form-control' id='name' name='name'
          value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})}/>

        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email:</label>
          <input type= "email" className='form-control' id='email' name='email'
          value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>

      </div>

      <div className='mb-3'>
          <label htmlFor='message' className='form-label'>Message:</label>
          <textarea className='form-control' id='message' name='message'
          value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})}/>

      </div>

    <button type="submit" className='btn btn-primary'>Submit

    </button>

    </form>

    </div>
  );
}

export default ContactUs;
