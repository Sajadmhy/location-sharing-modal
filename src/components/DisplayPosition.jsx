import { useState, useCallback, useEffect } from "react"
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const center = [51.505, -0.09]
const zoom = 13


export default function DisplayPosition({ map }) {
  const [position, setPosition] = useState(() => map.getCenter())

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  const onMove = useCallback(() => {
    setPosition(map.getCenter())
  }, [])

  useEffect(() => {
    map.on('move', onMove)
    return () => {
      map.off('move', onMove)
    }
  }, [map, onMove])

  
    return (
      <p>
        latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
        <button onClick={onClick}>reset</button>
      </p>
    )
  
}