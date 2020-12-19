import React, { Component } from 'react';
import { Map, TileLayer, Marker, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {LocationIcon} from './LocationIcon';
const MyMarker = props => {

  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return <Marker ref={initMarker} {...props}/>
}

class User1View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null};
    this.state = {
      Posit: null};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.setState({ currentPos: e.latlng });
    localStorage.setItem('Poslat1', this.state.currentPos.lat);
    localStorage.setItem('Poslon1', this.state.currentPos.lng);
    localStorage.setItem('Pos', this.state.currentPos);
    const Posi = localStorage.getItem('Pos');
    this.setState({ Posit: Posi });
    console.log(this.state.Posit);
    console.log(this.state.currentPos);
  }
  
  render() {
    return (
      
      <div>
        <Map center={this.props.center} zoom={this.props.zoom} onClick={this.handleClick}>
          <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          
          { this.state.currentPos && <MyMarker icon={LocationIcon}  position={this.state.currentPos}>

          </MyMarker>}
        {this.state.currentPos && <Circle center={this.state.currentPos} pathOptions={{fillColor: 'blue' }} radius={1000} />}
        </Map>
      </div>
    );
  }
  
}
export default User1View;
