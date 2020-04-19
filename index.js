mapboxgl.accessToken = 'pk.eyJ1IjoidG9yanVzMjMxMCIsImEiOiJjazk2dWNsaXYwbmxtM3FvNTU5ZGJjOXoxIn0.Zup9kv7z2zqo73f6F9hHaw';

const knapper = document.querySelector("#knapper");
const flyKnapper = document.querySelector("#flyKnapper");

const map = new mapboxgl.Map({
container: 'kartet',
style: 'mapbox://styles/mapbox/streets-v11',
zoom:10,
center: [10.774450, 59.917879],

});

const fabrikker =[
{
    navn: "Sørlandschips",
    tekst: "Sørlandschips.no",
    lng: 7.870466, 
    lat: 58.132959
},
{
    navn: "Kims",
    tekst: "kims.no",
    lng:10.932742,
    lat:60.650278
},
{
    navn: "Maarud",
    tekst: "Maarud.no",
    lng:11.566786,
    lat:60.182668
},
{
    navn: "Lays",
    tekst: "Lays.com",
    lng: -96.845813,
    lat: 32.979978
},
{
    navn: "Pringles",
    tekst: "Pringles.com",
    lng:-85.184158,
    lat:42.316539
},
{
    navn: "Lays",
    tekst: "Lays.com",
    lng: -96.845813,
    lat: 32.979978
},

]


const addMarker = (fabrikk) => {
    const marker = new mapboxgl.Marker()
    const minPopup = new mapboxgl.Popup()

    minPopup.setHTML(`

        <h2>${fabrikk.navn}</h2>
        <p>${fabrikk.tekst}</p>
    `)


    marker.setLngLat([fabrikk.lng, fabrikk.lat])
    marker.setPopup(minPopup)

    marker.addTo(map)
}

const addMarkers = () => {
    for(const fabrikk of fabrikker) {
        addMarker(fabrikk)
    }
}

map.on("load", addMarkers)

const changeMode = (evt) => {
    
    const knapp = evt.target
    const mode = knapp.dataset.mode

    map.setStyle (mode)

}

const flyTil = (evt) => {
    
    const knapp = evt.target
    const lng = knapp.dataset.lng
    const lat = knapp.dataset.lat
    
    map.flyTo({
        center: [lng, lat],
        zoom:18,
    })
}


knapper.onclick = changeMode
flyKnapper.onclick = flyTil