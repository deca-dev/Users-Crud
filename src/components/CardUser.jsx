import React from 'react'

const CardUser = ({ user, getAllUsers, URL, setObjectUpdate, setIsShowForm, reset, deleteUser, showDeleteNotification }) => {

    const updateUser = () => {
        setIsShowForm(true)

        const obj = {
            email: user.email,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name,
            birthday: user.birthday
        }
        reset(obj)
        setObjectUpdate(user)
    }

    return (

        <article className='card'>
            <h2 className='card_title'>{`${user.first_name} ${user.last_name}`}</h2>
        
            <ul>
                <li><span className='card__subtitle'>EMAIL</span><p><i className="fa-solid fa-envelope card__subtitle__data"></i>{user.email}</p></li>
                <li><span className='card__subtitle'>BIRTHDAY</span><p><i className="fa-solid fa-cake-candles card__subtitle__data"></i>{user.birthday}</p></li>
                <div className='card__footer'>
                    <div onClick={updateUser}><i className="fa-solid fa-pencil card__edit"></i></div>
                    <div onClick={() => deleteUser(user.id)}><i className="fa-regular fa-trash-can card__trash"></i></div>
                </div>
            </ul>
        </article>

    )
}

export default CardUser