import { Marker, Popup } from "react-leaflet"
import { useState, useRef, useMemo, useCallback, useContext } from "react"
import '../styles/DraggableMarker.css';
import { DataContext } from "./ShareLocation";

const center = {
    lat: 51.505,
    lng: -0.09,
  }
  
  export default function DraggableMarker(props) {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const { setShowMap} = props;
    const [data, setData] = useContext(DataContext);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            const newData = {...data};
            newData.locationCord.lat = position.lat;
            newData.locationCord.lng = position.lng;
            setData(newData);
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable(true)
    }, [])
  
    

    const closeMap = () => {
        setShowMap(false)
      }

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
        <Popup minWidth={90}>
            <div className="popupTitle">Location Details</div>
            <div className="popupDetails">
                <strong>Longitude:</strong> {position.lng}
                <br/>
                <strong> Latitude:</strong> {position.lat}
            </div>
            <div className="popupBtns">
            <button className="close" onClick={closeMap}>Close</button>
            <button className="edit" onClick={toggleDraggable}>Edit</button>
            </div>
        </Popup>
      </Marker>
    )
  }