import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
})



const Contacts = () => {

    const position = [55.724586, 37.353225]

    return (
        <div id='contact'>
            <div className="container mb-4">
                <h3 className='pb-3'>Как нас найти</h3>
                <br />
                <p>Тел.: +7 916 746-68-60</p>
                <p>What'sApp: +7 916 746-68-60</p>
                <br />
                <p>Адрес: Московская обл., Одинцовский район, Немчиновка, Советский проспект, 98</p>
            </div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <div>
                            <h6 className="fw-bold pb-0 mb-0">Beauty Life</h6>
                            <p>Салон красоты</p>
                            <span>
                                Тел.: +7 916 746-68-60
                                <br />
                                What'sApp: +7 916 746-68-60
                                <br /><br />
                                Адрес: Московская обл., Одинцовский район, Немчиновка, Советский проспект, 98
                            </span>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>,
        </div>
    )
}

export default Contacts