import React from 'react'
import {getAllEntries} from '../services/entryService'
import { useEffect, useState } from 'react'

function PublicEntries() {
    //send get request to get all entries from the api
    //set the state 
    //map throgh all the ]
    const [entries,setEntries]=useState([])

    async function getEntries(){
        const response = await getAllEntries()
        setEntries(response)

    }
    useEffect(()=>{
        getEntries()
    },[])
  return (
    <div>
        <h1>Public Entries</h1>
        {entries.map((oneEntry)=>{
            return(
                <div key={oneEntry._id}>
                    <h2>title: {oneEntry.title}</h2>
                    <p>entryBody: {oneEntry.entryBody}</p>
                    <p>isPublic: {oneEntry.isPublic ? "true" : "false"}</p>
                 
                </div>
            )
        })}
    </div>
  )
}

export default PublicEntries
