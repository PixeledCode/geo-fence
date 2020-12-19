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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const lat1 = sessionStorage.getItem("Poslat1");
    const lon1 = sessionStorage.getItem("Poslon1");
    if (lat1 && lon1) this.setState({ currentPos: [lat1, lon1] });
  }

  handleClick(e){
    this.setState({ currentPos: e.latlng });
    sessionStorage.setItem('Poslat1', this.state.currentPos.lat);
    sessionStorage.setItem('Poslon1', this.state.currentPos.lng);
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
