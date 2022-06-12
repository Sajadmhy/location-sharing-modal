import '../styles/MapComponent.css';
import Map from './Map';

export default function MapComponent(props) {


  const { setShowMap } = props;

  return (
    <main>
      <div id='mapComp'>
        <Map setShowMap={setShowMap}/>
      </div>
    </main>
  );
}
