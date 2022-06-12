import '../styles/ShareLocation.css';
import map from '../map-preview.png'
import { createContext, useState } from 'react';
import MapComponent from './MapComponent';

const center = {
    lat: 51.505,
    lng: -0.09,
  }

export const DataContext = createContext();

export default function ShareLocation() {
    const [showMap,setShowMap] = useState(false);
    const [data, setData] = useState({
        name:'',
        locationCord:center,
        type:'Business',
        logo:''
      });

    // saves name input to state
    const handleName = (e) => {
        const newData = {...data};
        newData.name = e.target.value;
        setData(newData);
    }

    // saves type input to state
    const handleType = (e) => {
        const newData = {...data};
        newData.type = e.target.value;
        setData(newData);
    }

    // saves logo input to state
    const handleLogo = (e) => {
        const newData = {...data};
        newData.logo = e.target.files[0];
        setData(newData);
    }

    return (
        <DataContext.Provider value={[data,setData]}>
        <div className='form'>
            <form action="">
                <legend className='legend'>Share Location</legend>
                <div className='wrapper'>
                <div className='name'>
                    <label htmlFor="name">Location name:</label>
                    <input type="text" id='name' name="name" value={data.name} onChange={handleName}/>
                </div>

                <div className='map'>
                    <label htmlFor="map">Location on map:</label>
                    <div id='map' onClick={() => setShowMap(true)}><img
                    src={map}
                    width={200}
                    height={140}
                    alt="map preview"
                    /></div>
                </div>

                <div className='type'>
                <label htmlFor="type">Location type</label>
                <select name="type" id='type' value={data.type} onChange={handleType} >
                    <option value="Business">Business</option>
                    <option value="House">House</option>
                </select>
                </div>

                <div className='logo'>
                    <label htmlFor="logo">Logo:</label>
                    <input type="file" name="logo" id='logo' accept="image/*" onChange={handleLogo} />
                </div>

                </div>
            </form>
            <div className='btns'>
            <button className='Cancelbtn'>Cancel</button>
            <button className='Savebtn'>Save</button>
            </div>
        </div>
            {showMap? <div className='mapOverlay'><MapComponent setShowMap={setShowMap}/> <span onClick={() => setShowMap(false)}>X</span> </div> : ''}
        </DataContext.Provider>
        )
}