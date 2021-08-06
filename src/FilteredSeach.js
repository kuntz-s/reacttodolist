import React from "react"
import SearchItems from "./SearchItems"

function FilteredSearch(props){
    return(
        <div> <input type="text" 
                placeholder="search your item here" 
                onChange={props.searchItem} 
                className="filter"></input>
        <SearchItems items={props.filterText}/></div>
    )
}

export default FilteredSearch