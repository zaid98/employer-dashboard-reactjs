import React,{Component} from 'react';
import Sidebar from './Sidebar';
import Tasks from './Tasks';

class Integrated extends Component{
  render(){
    return(

      <div>
        <Sidebar/>
        <Tasks/>
    </div>
    );
  }
}

export default Integrated;
