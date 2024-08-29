    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geomatry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

    const marker = new mapboxgl.Marker({color: red})
    .setLngLat(listing.geomatry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25, className: 'my-class'}).setHTML(`<h4>${listing.location}</h4>`))
    .addTo(map);