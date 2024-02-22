import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {GOOGLE_API_KEY} from "@/config.ts";
import React, {Dispatch, useEffect, useState} from "react";

const containerStyle = {
    width: '100%',
    height: '100%'
};
export default function LocationComponent({setState}:{setState:Dispatch<any>}){

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_API_KEY
    })

    // eslint-disable-next-line no-unused-vars
    const [map, setMap] = React.useState(null)

    const [center, setCenter] = useState({
        lat:0,
        lng:0
    });

    // @ts-ignore
    const onLoad = React.useCallback(function callback(x) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        if(map){
            // @ts-ignore
            map.fitBounds(bounds);
        }

        setMap(x)
    }, [])

    // @ts-ignore
    const onUnmount = React.useCallback(function callback(x) {
        setMap(x)
    }, [])


    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    },[])


    return (

        <div className={'col-span-2 h-[400px]'}>

            {
                isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onClick={(x)=>{
                                console.log(x.latLng?.lng())
                                // @ts-ignore
                                setState(prev=>({
                                    ...prev,
                                    lat:`${x.latLng?.lat()}`,
                                    lng:`${x.latLng?.lng()}`
                                }))
                            }}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            options={{
                                styles: [
                                    { elementType: "geometry", stylers: [{ color: "#18181b" }] },
                                    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                                    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                                    {
                                        featureType: "administrative.locality",
                                        elementType: "labels.text.fill",
                                        stylers: [{ color: "#d59563" }]
                                    },
                                    {
                                        featureType: "poi",
                                        elementType: "labels.text.fill",
                                        stylers: [{ color: "#d59563" }]
                                    },
                                    {
                                        featureType: "poi.park",
                                        elementType: "geometry",
                                        stylers: [{ color: "#263c3f" }]
                                    },
                                    {
                                        featureType: "poi.park",
                                        elementType: "labels.text.fill",
                                        stylers: [{ color: "#6b9a76" }]
                                    },
                                    {
                                        featureType: "road",
                                        elementType: "geometry",
                                        stylers: [{ color: "#38414e" }]
                                    },
                                    {
                                        featureType: "road",
                                        elementType: "geometry.stroke",
                                        stylers: [{ color: "#212a37" }]
                                    },
                                    {
                                        featureType: "road",
                                        elementType: "labels.text.fill",
                                        stylers: [{ color: "#9ca5b3" }]
                                    },
                                    {
                                        featureType: "road.highway",
                                        elementType: "geometry",
                                        stylers: [{ color: "#746855" }]
                                    },
                                    {
                                        featureType: "road.highway",
                                        elementType: "geometry.stroke",
                                        stylers: [{ color: "#1f2835" }]
                                    },
                                    {
                                        featureType: "road.highway",
                                        elementType: "labels.text.fill",
                                        stylers: [{ color: "#f3d19c" }]
                                    },
                                    {
                                        featureType: "transit",
                                        elementType: "geometry",
                                        stylers: [{ color: "#2f3948" }]
                                    },
                                    {
                                        featureType: "transit.station",
                                        elementType: "labels.text.fill",
                                        stylers: [{ color: "#d59563" }]
                                    },
                                    {
                                        featureType: "water",
                                        elementType: "geometry",
                                        stylers: [{ color: "#17263c" }]
                                    },
                                    {
                                        featureType: "water",
                                        elementType: "labels.text.fill",
                                        stylers: [{ color: "#515c6d" }]
                                    },
                                    {
                                        featureType: "water",
                                        elementType: "labels.text.stroke",
                                        stylers: [{ color: "#17263c" }]
                                    }
                                ]
                            }}
                            >
                            { /* Child components, such as markers, info windows, etc. */ }
                            <></>
                            </GoogleMap>
                ) : <></>
            }

            </div>

    )
}