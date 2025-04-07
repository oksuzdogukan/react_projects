import "./App.css";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef, useEffect, useState } from "react";

function App() {

  const mapRef = useRef();
  const mapContainerRef = useRef();


  const INITIAL_CENTER = [
    33.4616,
    39.4965
  ]
  const INITIAL_ZOOM = 5.20

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);





  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoib2tzdXotZG9ndWthbiIsImEiOiJjbThlZmkxcnowMTJ4MmlzZGN0dnIwdGV0In0.IBKub_i1cGYLxOXY5TwZ6w';
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: center,
      zoom: zoom
      // style:'mapbox://styles/mapbox/satellite-streets-v11'
    });

    mapRef.current.on("move", () => {
      
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();

      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    })



    return () => mapRef.current.remove();
    
  }, []);

  //reset button
  const handleButtonClick = () => {
    mapRef.current.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM
    })
  }



  return (
    <>
      
      <div className="sidebar">
        Boylam : {center[0].toFixed(4)} | Enlem : {center[1].toFixed(4)} | Yakınlaştırma : {zoom.toFixed(2)}
      </div>

      <button className="reset-button" onClick={handleButtonClick}>
        Sıfırla
      </button>

      <div id="map-container" ref={mapContainerRef}></div>
    </>
  );
}
export default App;
