import styles from './Map.module.scss'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Map = () => {


  const center = [47.7172,-122.2624] // Shows all markers
  const zoom = 11
  const juanita_creek_loc = [47.70530, -122.21280]
  const animal_acres_park_loc = [47.75578, -122.28787]
  const USGS_western_fisheries_loc = [47.67542, -122.25657]

  return (

    <MapContainer
      center={[47.7172,-122.2624]}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: 500, width: 500 }} // change to fit webpage
    >

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[47.70530, -122.21280]}> {/* cannot use consts for some reason */}
        <Popup>
          SPUD Fish & Chips <br /> Juanita Beach Park <br /> Kirkland, WA
        </Popup>
      </Marker>

      <Marker position={[47.75578, -122.28787]}> {/* cannot use consts for some reason */}
        <Popup>
          Animal Acres Park <br /> Lake Forest Park, WA
        </Popup>
      </Marker>

      <Marker position={[47.67542, -122.25657]}> {/* cannot use consts for some reason */}
        <Popup>
          USGS Western Fisheries Research Center <br /> Magnuson Park <br /> Seattle, WA
        </Popup>
      </Marker>

    </MapContainer>
  )

}
export default Map;
