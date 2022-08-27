import React from 'react'
function NameList(){
  const persons=[
    {
      id:1,
      name:'Rose',
      age:21,
      skills:'react'
    },
    {
      id:2,
      name:'Karishma',
      age:17,
      skills:'angular'
    },
    {
      id:3,
      name:'Samuel',
      age:29,
      skills:'vue'
    }
  ]
  const personsList=persons.map(persons=> <h2>I am {persons.name} I am {persons.age} years old.I know {persons.skills}</h2>)
  return <h2> {personsList}</h2>
}
export default NameList