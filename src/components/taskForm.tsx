import React, { useState, ChangeEvent, FormEvent, useEffect }from 'react'
import Style from './taskForm.module.css'
import { ITask } from "../interfaces/task"

type Props = {
    btnText: string;
    taskList: ITask[]
    setTakList?: React.Dispatch<React.SetStateAction<ITask[]>>;
    task?: ITask | null
    handleUpdate? (id: number, title: string, difficulty: number): void
}

const taskForm = ({ 
    btnText,
    talkList,
    setTakList,
    task,
    handleUpdate 
  }: Props) => {


  const [id, setid] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  useEffect(()=>{

    if(task){
      setid(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }

  }, [task])

  const addTaskHandler = (e: ChangeEvent<HTMLInputElement>) =>{

    e.preventDefault()
    if(handleUpdate){

      handleUpdate(id, title, difficulty)

    }else{
    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask =  {id, title, difficulty}
    setTakList!([ ...talkList, newTask])
    setTitle("")
    setDifficulty(0)
    }
  }



  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    if(e.target.name === "title"){

      setTitle(e.target.value)

    }else{


      setDifficulty(parseInt(e.target.value))

    }
    
    
  }


  return (
    <form onSubmit={addTaskHandler} className={Style.form}>
        <div className={Style.input_container}>
            <label htmlFor="title">titulo:</label>
            <input 
            type="text"
             name="title" 
             value={title}
             placeholder="titulo de tarefa" 
             onChange={handleChange}
              />
        </div>
        <div className={Style.input_container}>
            <label htmlFor="difficulty">Dificuldade:</label>
            <input 
            type="text" 
            value={difficulty} 
            name="difficulty" 
            placeholder="dificuldade de tarefa"
             onChange={handleChange}
              />
        </div>
        <input type="submit" value={btnText} />
    </form>
  )
}

export default taskForm