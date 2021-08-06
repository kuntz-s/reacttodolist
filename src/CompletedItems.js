import React from "react"

function CompletedItems(props){
    const items=props.completeditems;
    const listitems=items.map(item=>{
        return <div className="clist" key={item.key}>
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

export default CompletedItems