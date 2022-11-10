import React, { createContext, useState } from 'react'

const Context = createContext()


const ContextProvider = ({children}) => {

  const [departments, setDepartments] = useState('')
  const [cities, setCities] = useState('')

  const data = {
    departments,
    setDepartments,
    cities,
    setCities
  }

  return (
    <Context.Provider value={data} >{children}</Context.Provider>
  )
}

export {ContextProvider, Context}