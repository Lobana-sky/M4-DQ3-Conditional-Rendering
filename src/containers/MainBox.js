import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
constructor(){
super();
this.state={
  select:"pokemon"
}
}
handelClick = (selected)=>{
  this.setState({
    select:selected
  })
}
  render() {
    /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should 
    have state? Which component should have methods to control state? Where should 
    these methods be called?
    */
    const detailsToDisplay =(state)=> {
      if(state==="profile"){
        return(<Profile />)
      }
      else if(state==="photos"){
        return(<Photos />)
      }
      else if(state==="cocktails"){
        return(<Cocktails />)
      }
      else if(state==="pokemon"){
        return(<Pokemon />)
      }
    }

    return (
      <div>
        <MenuBar whatSelect={this.state.select} handelClick={this.handelClick}/>
        {detailsToDisplay(this.state.select)}
      </div>
    )
  }

}

export default MainBox
