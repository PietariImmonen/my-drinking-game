import React from 'react'
import "./admin.css"
import { API, graphqlOperation } from 'aws-amplify';
import { createTask } from './graphql/mutations';

export default function Admin() {
    const [formData, setFormData] = React.useState({name: "", task: ""})

    function handleChange(event) {
        setFormData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    const addNew = () => {
        async function createTaskItem() { 
            const task = { name: formData.name, description: formData.task };
            await API.graphql(graphqlOperation(createTask, {input: task}));
            console.log(task)
          }
        createTaskItem()
    }
  return (
    <div>
        <form>
            <input
                type="text"
                placeholder="Task name"
                onChange={handleChange}
                name="name"
                value={formData.name}
            />
            <textarea 
                value={formData.task}
                placeholder="Task instructions"
                onChange={handleChange}
                name="task"
            />
        </form>
        <button onClick={addNew}>Klikkaa lisätäksesi uusi tehtävä!</button>
    </div>
  )
}
