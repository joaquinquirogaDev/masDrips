import React, { useState, useMemo } from 'react'
import Map from '../Map'
export default function Home() {
    
    return (
        <div>
            <Map
            googleMapURL= {"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCuRuflska2w89yln4KMIUGuyisLCrNl30"}
            containerElement= {<div style={{height: '400px'}}/>}
            mapElement= {<div style={{height: '100%'}}/>}
            loadingElement= {<p>Cargando</p>}
            />
        </div>
    )
}