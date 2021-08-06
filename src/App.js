import React from "react"
import AddAndDisplay from "./AddAndDisplay";
import FilteredSearch from "./FilteredSeach";



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            completeditems:[],
            noncompleteditems:[],
            currentItem:{
                text:'',
                key:'',
                completed:false
            },
            filterText:[],
            option:'option1'
            
         
        }
        this.handleinput=this.handleinput.bind(this)
        this.addItem=this.addItem.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        this.setUpdate=this.setUpdate.bind(this)
        this.searchItem=this.searchItem.bind(this)
        this.changeComplete=this.changeComplete.bind(this)
        this.handleoption=this.handleoption.bind(this)
       
    }
    handleinput(event){
        this.setState(
            { 
                currentItem:{
                    text:event.target.value,
                    key:Date.now(),
                    completed:false
                }
            }
          
        )
    }
    addItem(event){
       
        event.preventDefault();
        let newItem=this.state.currentItem;
        if(newItem.text!==""){
            const newItems=[...this.state.items,newItem]
            this.setState(
                {
                    items:newItems,
                    currentItem:{
                        text:'',
                        key:'',
                        completed:false
                    },
                    option:"option1"

                }
            )
        }
    }
    deleteItem(key){
        const filteredItems= this.state.items.filter(item=>item.key!==key)
        this.setState({items:filteredItems})
    }

    setUpdate(text, key){
        const items=this.state.items;
        items.map(item=>{
            if(item.key===key){
                item.text=text
            }
        })
        this.setState({items:items})
    }

    searchItem(event){
        const filteredItems=this.state.items.filter(item=>item.text===event.target.value)
        this.setState({filterText:filteredItems})
        
    }

    changeComplete(key){
        const items= this.state.items
        items.map(item=>{
            if(item.key===key){
                item.completed= !item.completed
            }
        })
        this.setState({items:items})
    }

    handleoption(event){
        const filteredCompletedItems= this.state.items.filter(item=>item.completed===true)
            const filterednonCompletedItems= this.state.items.filter(item=>item.completed===false)
        this.setState({
            option:event.target.value,
            completeditems:filteredCompletedItems,
            noncompleteditems:filterednonCompletedItems,

            }
        )
    }
  

  
    render(){
      
          return (
            <main className="App">
            <AddAndDisplay addItem={this.addItem} 
                    currentItem={this.state.currentItem.text}
                    handleinput={this.handleinput} 
                    handleoption={this.handleoption}
                    items={this.state.items}
                    completeditems={this.state.completeditems}
                    noncompleteditems={this.state.noncompleteditems}
                    option={this.state.option}
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}
                    changeComplete={this.changeComplete}/>
             <FilteredSearch searchItem={this.searchItem} filterText={this.state.filterText}/> 
             
               </main>
          )
      
            

                
            
             

           
        
    }
}

export default App