import React from "react"

function SearchItems(props){
    const items = props.items;
    const filter= items.map(item=>
       {  
          return  <div key={item.key} className="search">
                    <p>{item.text}
                    </p>
            </div>
        })

     
    return(
        
        <div>
            <p>{filter}</p>
            <h2>NB:VEUILLEZ ECRIRE TOTALEMENT LA TACHE A RECHERCHER</h2>
        </div>
    )
}
export default SearchItems