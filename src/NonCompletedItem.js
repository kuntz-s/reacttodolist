import React from "react"

function NonCompletedItems(props){
    const items=props.noncompleteditems;
    const listitems=items.map(item=>{
        return <div className="nlist" key={item.key}>
                <p>
                   {item.text}
                </p>
               
            </div>
    })
    return(
        <div >
            {listitems}
        </div>
    )
}

export default NonCompletedItems