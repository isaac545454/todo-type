import React from 'react'

import { ITask } from "../interfaces/task"

import Style from "./taskList.module.css"

type Props = {
  talkList: ITtask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void; 
}

const taskList = ({ talkList, handleDelete, handleEdit }: Props) => {
  return (
    <>
          {talkList.length > 0 ? (
            talkList.map((task)=>(
                <div key={task.id} className={Style.task}>

                     <div className={Style.details}>

                         <h4>titulo: {task.title}</h4>
                         <p>dificuldade: {task.difficulty}</p>
                         
                     </div>

                     <div class={Style.actions}>

                         <i className="bi bi-pencil" onClick={()=>{handleEdit(task)}}></i> 
                         <i className="bi bi-trash" onClick={
                          ()=>{handleDelete(task.id)}}>
                            </i> 

                     </div>

                </div>
            ))
          ):(
            <p>não ha tarefas cadastradas</p>
          )}
    </>
  )
}

export default taskList