import { useState } from 'react'

//componenets
import Header from './components/header'
import Footer from './components/footer'
import Form from './components/taskForm'
import List from './components/taskList'
import Modal from './components/modal'

import Style from "./app.module.css"

import { ITask } from "./interfaces/task"

function App() {

  const [talkList, setTakList] = useState<ITask[]>([])
  const [taskUpdte, settaskUptate] = useState<ITask | null >(null)

  const deleteTask = (id: number) =>{
    setTakList( talkList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean)=>{
 
  const modal = document.querySelector("#modal")
  if(display){
    modal!.classList.remove("hide")
  }else{
        modal!.classList.add("hide")
  }
  }

  const editTask = (task: ITask):void=>{
    hideOrShowModal(true)
    settaskUptate(task)

  }

  const updateTask = (id: number, title: string, difficulty: number)=>{
      const updatedTask: ITask = {id, title, difficulty}

      const updateItem = talkList.map((task)=>{
        return task.id === updatedTask.id? updatedTask : task
      })
      setTakList(updateItem)

      hideOrShowModal(false)
  }




  return (
    <div>
      <Modal 
      children={
      <Form btnText="editar tarefa" 
       talkList={talkList}
      task={taskUpdte}
      handleUpdate={updateTask}
         />}
      
       />
      <Header />
      <main className={Style.main}>

         <div>

          <h2>o que você vai fazer?</h2>
          <Form 
          btnText="criar tarefa" 
          talkList={ talkList } 
           setTakList={setTakList} 
         
           />

         </div>

         <div>

             <h2>suas tarefas: </h2>

             <List
              talkList={ talkList } 
              handleDelete={deleteTask}
              handleEdit={editTask}
               />

         </div>
       
       </main>
       <Footer />
       
    </div>
  )
}

export default App
