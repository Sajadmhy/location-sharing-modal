import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState, useMemo} from "react";
import DraggableMarker from './DraggableMarker';

const zoom = 13

const centerMap = [51.505, -0.09];

export default function Map(props) {
  const [map, setMap] = useState(null)
  const { setShowMap } = props;



  const displayMap = useMemo(
    () => (
      <MapContainer
        center={centerMap}
        zoom={zoom}
        scrollWheelZoom={false}
        ref={setMap}
        style={{ height: '100vh', width: '100wh' }}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker setShowMap={setShowMap}/>
      </MapContainer>
    ),
    [],
  )

  return (
    <div>
      {/* {map ? <DisplayPosition map={map} /> : null} */}
      {displayMap}
    </div>
  )
}
