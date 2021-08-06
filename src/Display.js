import React from "react"
import CompletedItems from "./CompletedItems";
import NonCompletedItems from "./NonCompletedItem"
import ListItems from "./ListItems";

function Display (props){
    if(props.option==="option1")
    {
        return(
            <ListItems items={props.items}
                    deleteItem={props.deleteItem}
                    setUpdate={props.setUpdate}
                    changeComplete={props.changeComplete}/>
        )
    }
    else if(props.option==="option2"){
        return(
            <CompletedItems completeditems={props.completeditems}/>
        )
    }
    else if(props.option==="option3"){
        return(
            <NonCompletedItems noncompleteditems={props.noncompleteditems}/>
        )
    }
}


export default Display