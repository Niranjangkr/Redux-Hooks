import React from 'react'
import { useContext } from 'react'
import { appContext } from '../useContext/userContext'


const Child1 = () => {
    const userData = useContext(appContext)
    console.log(userData,"hii")

  return (
    <div>
        My name is {userData.name}
    </div>
  )
}

export default Child1