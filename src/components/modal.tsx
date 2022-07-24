import React from 'react'
import Style from "./modal.module.css"

interface Props {
    children: React.ReactNode
}

const modal = ({children}: Props) => {
    const closeModal = (e: React.MouseEvent): void =>{
    const modal = document.querySelector("#modal")
    modal!.classList.add("hide")
    }
  return (
    <div id="modal" className="hide">
        <div class={Style.fade} onClick={closeModal}></div>
        <div class={Style.modal}>
            <h2>Texto modal</h2>
              {children}
        </div>

    </div>
  )
}

export default modal