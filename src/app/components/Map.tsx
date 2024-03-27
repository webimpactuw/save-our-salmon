import styles from './Map.module.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className={styles.map}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[40.505, -100.09]}>
        <Popup>
          I am a pop-up!
        </Popup>
      </Marker>
    </MapContainer>
  )

}

export default Map;
