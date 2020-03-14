import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <a className={props.whatSelect===0?"item active":"item"} id="profile" onClick={()=>props.handelClick(0)} >
        <i className="user large icon" id="profile"/>
      </a>

      <a className={props.whatSelect===1?"item active":"item"} id="photo" onClick={()=>props.handelClick(1)} >
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={props.whatSelect===2?"item active":"item"} id="cocktail" onClick={()=>props.handelClick(2)}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={props.whatSelect===3?"item active":"item"} id="pokemon" onClick={()=>props.handelClick(3)}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
