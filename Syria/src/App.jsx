import React, { useEffect } from 'react'
import './app.css'
import flag from './images/flag.jpg'
import Person from './Components/Person'
import { getUser } from './Components/API.jsx'
// import persons from '../persons.json'
import { useState } from 'react'
const App = () => {
  const [name,setName]=useState('');
  const [users,setUsers]=useState([])
  const [fusers,setFusers]=useState([])
  useEffect(()=>{
        getUser().then(response=>{
          console.log(response.data);
          setUsers(response.data);
         }).catch(()=>alert('ther is poblem in conction with Api'));
      
  },[getUser])
  useEffect(()=>{
    let copyUsers=users;
    if(name.length>0){
      copyUsers=copyUsers.filter(item=>item.name.includes(name));
      }
      setFusers(copyUsers)
  },[name,users])

  return (
    <>
      <section>
        <div className="container">
              <h3 className='text-center head'>اسماء المعتقلين في سوريا</h3>
              <div className="image"><img src={flag}/></div>
              <hr/>
              <div>
                <input onChange={(e)=>setName(e.target.value)} className='input-group search' value={name} type="text" placeholder='search' />
              </div>
              <hr/>
              <table class="table ">
                    <thead>
                      <tr className='table table-success'>
                        <th scope="col">#</th>
                        <th scope="col">الاسم</th>
                        <th scope="col">المحافظة</th>
                      </tr>
                    </thead>
                  {fusers.map(person=><Person person={person}/>)}
              </table>
         </div>
      </section>
    </>
  )
}

export default App
