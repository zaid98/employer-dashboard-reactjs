// import React, {Component} from 'react'
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
//
// class Maps extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       selectedPlace : 'bangalore',
//       stater:""
//     }
//     const worker = this;
//     worker.setState({stater:"jellpo"});
//   }
//   render(){
//     return(
//       <div>
//       <Map google={this.props.google} zoom={14}
//         style={{width:'50%',height:'70%',}}
//         initialCenter={{lat: 12.9715987,lng:77.5945627}}>
//           <Marker onClick={this.onMarkerClick} name={'Current location'} />
//           <InfoWindow onClose={this.onInfoWindowClose}>
//               <div>
//                 <h1>{this.state.selectedPlace.name}</h1>
//               </div>
//           </InfoWindow>
//         </Map>
//     </div>
//   );
//   }
// }
// export default GoogleApiWrapper({apiKey:(`AIzaSyBu-FfzeiqIWrNbxzpTQmmzMqwXhKbfLz8`)})(Maps) ;
