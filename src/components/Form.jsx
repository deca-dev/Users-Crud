import React from 'react'

const Form = ({ createUser, updateUserById, objectUpdate, handleSubmit, reset, register,setIsShowForm }) => {

  const defaultValuesForm = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
  }

  const submit = data => {
    if (objectUpdate !== undefined) {
      updateUserById(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createUser(data)
    }
    reset(defaultValuesForm)
  }

  return (
    <>
      <div className='form-background'>
        <article className='form_container'>
          <div className='form_header'>
          <h2>New User</h2>
          <div onClick= {()=>setIsShowForm(false)}><i className="fa-solid fa-xmark form_header_button"></i></div>
          </div>
          <form onSubmit={handleSubmit(submit)} className="x">
            <div>
              <label className="form_label" htmlFor="name">Name</label>
              <input className = "form_input"type="text" id='name' {...register('first_name')} placeholder="Name..." />
            </div>
            <div>
              <label className="form_label" htmlFor="lastName">Last name</label>
              <input className = "form_input" type="text" id='lastName' {...register('last_name')} placeholder="Last Name..." />
            </div>
            <div>
              <label className="form_label" htmlFor="email">email</label>
              <input className = "form_input" type="text" id='email' {...register('email')} placeholder="Email..." />
            </div>
            <div>
              <label className="form_label" htmlFor="password">Password</label>
              <input className = "form_input" type="password" id='password' {...register('password')} placeholder="Password..."/>
            </div>
            <div>
              <label className="form_label" htmlFor="birthdate">Birthday</label>
              <input className = "form_input" type="date" id='birthdate' {...register('birthday')} />
            </div>
            <div className='form_button_container'>
            <button className='form_button'>Submit</button>
            </div>
          </form>
        </article>
      </div>
    </>
  )
}

export default Form