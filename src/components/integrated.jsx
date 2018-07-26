import React,{Component} from 'react';
import Sidebar from './Sidebar';
import Tasks from './Tasks';
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];
class Integrated extends Component{


  render(){
    return(

      <div>
journal.map((user)=><li>{user.squirrel}</li>)
</div>
    );
  }
}
export default Integrated;
