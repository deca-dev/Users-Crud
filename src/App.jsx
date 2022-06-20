import { useEffect, useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import CardUser from './components/CardUser'
import Form from './components/Form'



const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {

  const { handleSubmit, register, reset } = useForm()

  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  console.log(users)

  useEffect(() => {
    getAllUsers()
  }, [])

  const createUser = newUser => {
    axios.post(URL, newUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }



  const deleteUser = id => {
    axios.delete(`${URL}${id}/`)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }


  const updateUserById = (id, updateUser) => {
    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const showForm = () => {
    const obj = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  return (
    <div className="App">
      <div className='principal_container'>
        <h1>Users</h1>
        <button className='create_button' onClick={showForm}>{isShowForm ? "" :
          <div>
            <i className="fa-solid fa-plus plus_sign_button"></i>
            <span>Create a new User</span>
          </div>}
        </button>
      </div>

      <div>
        {
          isShowForm &&
          <Form
            createUser={createUser}
            updateUserById={updateUserById}
            objectUpdate={objectUpdate}
            handleSubmit={handleSubmit}
            reset={reset}
            register={register}
            setIsShowForm={setIsShowForm}
          />
        }
      </div>
      <div className='card-container'>
        {
          users?.map(user => (
            <CardUser
              key={user.id}
              user={user}
              URL={URL}
              getAllUsers={getAllUsers}
              setObjectUpdate={setObjectUpdate}
              setIsShowForm={setIsShowForm}
              reset={reset}
              deleteUser={deleteUser}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
