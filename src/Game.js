import { Amplify, API, graphqlOperation } from 'aws-amplify';

import awsExports from './aws-exports';
import { useEffect, useState } from 'react';


import { listTasks } from './graphql/queries';

import "./Game.css"

Amplify.configure(awsExports);
//Xbm$zMjRtJBN3Kn
export default function Game() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([{name:"Aloita", description:"Aloita peli!"}]);

  const random = Math.floor(Math.random() * tasks.length);

    function randomTask() {
      setTask([tasks[random]])
      console.log(tasks[random])
    }

    useEffect( () => {


      async function listTaskItem() {

        const tasks = await API.graphql(graphqlOperation(listTasks));
        console.log(30, tasks.data.listTasks.items);
        setTasks(tasks.data.listTasks.items);
      }
      listTaskItem();
    }, [])

    return (
      <>

        <div className="menu-nav">
            <div className="menu-nav-text">
                Normal
            </div>

        </div>

        <div className='game-main'>
          <div className='game-main-container' onClick={randomTask}>
              {task.map((task, index) => (
                <div key = {index} className="game-main-task">
                  {task.description}
                </div>
              ))}
            </div>
        </div>
      </>
    );
  }