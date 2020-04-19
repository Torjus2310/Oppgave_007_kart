mapboxgl.accessToken = 'pk.eyJ1IjoidG9yanVzMjMxMCIsImEiOiJjazk2dWNsaXYwbmxtM3FvNTU5ZGJjOXoxIn0.Zup9kv7z2zqo73f6F9hHaw';

const knapper = document.querySelector("#knapper");
const flyKnapper = document.querySelector("#flyKnapper");

const map = new mapboxgl.Map({
container: 'kartet',
style: 'mapbox://styles/mapbox/streets-v11',
zoom:10,
center: [10.774450, 59.917879],

});

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