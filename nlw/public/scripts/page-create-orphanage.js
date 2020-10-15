//create map
const map = L.map('mapid').setView([-12.9154838,-38.4338184], 15)

//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

//creat icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add marks

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=latitude]').value = latitude;   
    document.querySelector('[name=longitude]').value = longitude;

    // remove icon
    marker && map.removeLayer(marker)

    //add icon layers
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
})

// select photos

function addPhotoField(event){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo está vazio, se sim, não adicionar ao container de images
    const input = newFieldContainer.children[0]
        if(input.value == ""){
            return
        }
    //limpar o campo antes de adicionar ao container de images
    input.value = ""
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deletField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();

}