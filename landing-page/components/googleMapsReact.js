import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

const defaultProps = {
  center: {
    lat: 7.1198549,
    lng: -73.1127888
  },
  zoom: 17
}

const googleMapsReact = compose (
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBFjJcSQF4jyIe4PKW9b6SItv-wDoCP2wU&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }}/>,
    containerElement: <div style={{ height: '450px' }}/>,
    mapElement: <div style={{ height: '100%' }}/>
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={defaultProps.zoom}
    defaultCenter={defaultProps.center}
  >
    {
      props.isMarkerShown  && (
        <Marker
          position={{ lat: 7.1198549, lng: -73.1127888}}
        />
      )
    }
  </GoogleMap>
))

export default googleMapsReact
