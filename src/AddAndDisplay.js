import React from "react"
import Display from "./Display"



function AddAndDisplay(props){
   
    return(
        <div>
        <form id="to-do-form" onSubmit={props.addItem} >
            <input type="text" 
                  placeholder="Enter text" 
                  value={props.currentItem}
                  onChange={props.handleinput}
                  className="AddDisplay"
              ></input>
            <button>Submit</button><br></br>

            <div className="tache">
                <input type="radio"
                     name="todo" 
                     value="option1" 
                     checked={props.option==='option1'}
                     onClick={props.handleoption}></input>Toutes les taches
                <input type="radio" 
                        name="todo" 
                        value="option2"
                        checked={props.option==='option2'}
                        onClick={props.handleoption}></input>Taches complétées
                <input type="radio" 
                        name="todo" 
                        value="option3"
                        checked={props.option==='option3'}
                     onClick={props.handleoption}></input>Taches non complétées
            </div>
        </form>

       <Display
            items={props.items}
            deleteItem={props.deleteItem}
            setUpdate={props.setUpdate}
            changeComplete={props.changeComplete}
            completeditems={props.completeditems}
            noncompleteditems={props.noncompleteditems}
            option={props.option}                    />
       
        </div>
    )
}
export default AddAndDisplay