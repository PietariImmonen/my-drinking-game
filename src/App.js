import { Amplify, API, graphqlOperation } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createTask } from './graphql/mutations';

import awsExports from './aws-exports';
import { useEffect, useState } from 'react';


import { listTasks } from './graphql/queries';


Amplify.configure(awsExports);
//Xbm$zMjRtJBN3Kn
function App({user, signOut}) {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([]);

  const random = Math.floor(Math.random() * tasks.length);

    function randomTask() {
      setTask([tasks[1]])
      console.log(tasks[random])
    }

    useEffect( () => {

      

      async function createTaskItem() { 
        const task = { name: "Juo", description: "Ota pari hörppyy!" };
        await API.graphql(graphqlOperation(createTask, {input: task}));
      }


      async function listTaskItem() {

        const tasks = await API.graphql(graphqlOperation(listTasks));
        console.log(30, tasks.data.listTasks.items);
        setTasks(tasks.data.listTasks.items);
      }
      listTaskItem();
    }, [])

    return (
      <>
        <button onClick={signOut}>Sign out</button>

        {task.map((task, index) => (
          <div key = {index}>
            {task.name} = {task.description}
          </div>
        ))}
        <button onClick={randomTask}>Pick random task</button>

      </>
    );
  }

  export default withAuthenticator(App);