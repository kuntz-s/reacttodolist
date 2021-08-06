import React from "react"

function ListItems(props){
    const items=props.items;
    const listitems=items.map(item=>{
        return <div  key={item.key}>
                <p>
                    <input type="text" 
                    className="list"
                        id={item.key} 
                        value={item.text}
                        onChange={(event)=>{
                            props.setUpdate(event.target.value, item.key)
                        }}
                        style={item.completed?{color:"red",textDecoration:"line-through",fontSize:"italic",fontWeight:"bold"}:{color:"black",fontWeight:"bold"}}
                    ></input>
                      <input className="listcheckbox" type="checkbox" checked={item.completed} onClick={()=>{props.changeComplete(item.key)}}></input>
                    <button  className="listbutton" onClick={()=>{props.deleteItem(item.key)}}>Delete</button>
                </p>
               
            </div>
    })
    return(
        <div >
            {listitems}
        </div>
    )
}

export default ListItems