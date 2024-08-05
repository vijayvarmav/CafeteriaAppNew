import React from 'react'
import { useState} from 'react'
import axios from 'axios'


const App = () => {

    const[itemName,setItemName] = useState('')
    const[cost,setCost] = useState('')



    const handleSubmit = async(e) => {
            e.preventDefault()
            try{
            const response = await axios.post('http://localhost:5000/item',{itemName,cost});
            console.log(response);
            }
            catch(err){
                console.log(err);
                
            }
          }

    return(
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <label>itemName</label> <br />
                <input required
                type="text"
                value={itemName}
                onChange={(e)=>{
                    setItemName(e.target.value)
                }}
                /><br />
                <label>cost</label><br />
                <input required
                type="text"
                value={cost}
                onChange={(e)=>{
                    setCost(e.target.value)
                }}
                /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App