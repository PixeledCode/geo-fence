import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {LocationIcon} from './LocationIcon';
import Distance from './Distance'
var distance;
var lat1, lon1, lat2, lon2;
const MyMarker = props => {

  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return <Marker ref={initMarker} {...props}/>
}

class User2View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos2: null};
    this.state = {
      range: null};
    this.state = {
      dist: null};
    this.handleClick = this.handleClick.bind(this);   
  }

  handleClick(e){
    this.setState({ currentPos2: e.latlng });
    sessionStorage.setItem('Poslat2', this.state.currentPos2.lat);
    sessionStorage.setItem('Poslon2', this.state.currentPos2.lng);
    // lat1 = sessionStorage.getItem('Poslat1');
    // lon1 = sessionStorage.getItem('Poslon1');
    lat2 = sessionStorage.getItem('Poslat2');
    lon2 = sessionStorage.getItem('Poslon2');
    this.setState({ dist: Distance(lat1, lon1, lat2, lon2) })
    sessionStorage.setItem('dist1', this.state.dist);
    console.log(this.state.dist);
    if (this.state.dist <= 1) {
      this.setState({ range : "User is in range" });
    }
    else {
      this.setState({ range : "User is not in range" });
    }
    if (!(lat1 && lon1)) {
        this.setState({ range : "User 1 location unavailable" });
      }
  }

  componentDidMount() {
    lat1 = sessionStorage.getItem('Poslat1');
    lon1 = sessionStorage.getItem('Poslon1');
    lat2 = sessionStorage.getItem("Poslat2");
    lon2 = sessionStorage.getItem("Poslon2");
    distance = Distance(lat1, lon1, lat2, lon2)
    if (lat2 && lon2) this.setState({ currentPos2: [lat2, lon2] });
    console.log(distance);
    if (lat2 && lon2) {
      if (distance <= 1) {
        this.setState({ range : "User is in range" });
      }
      else {
        this.setState({ range : "User is not in range" });
      }
      if (!(lat1 && lon1)) {
        this.setState({ range : "User 1 location unavailable" });
      }
    }
  }

  render() {
    return (
      <div>
        <Map center={this.props.center} zoom={this.props.zoom} onClick={this.handleClick}>
          <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          
          { this.state.currentPos2 && <MyMarker icon={LocationIcon}  position={this.state.currentPos2}>
            <Popup position={this.state.currentPos2}>
              <pre>{this.state.range}</pre>
            </Popup>
          </MyMarker>}
        </Map>
      </div>
    );
  }
}

export default User2View;
