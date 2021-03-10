
main()

async function main() {
    const cameras = await getCameras()
    console.log(cameras)
    for(camera of cameras){
        //displayCamera(camera)
        dCamera(camera)
    }
}

function getCameras() {
    return fetch("http://localhost:3000/api/cameras")
        .then(function (httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function (cameras) {
            return cameras
        })
        .catch(function (error) {
            alert(error)
        })
}

function displayCamera(camera) {
const templateElt = document.getElementById("templateCamera")
const cloneElt = document.importNode(templateElt.content, true)

cloneElt.getElementById("camera__image").src = camera.imageUrl 
cloneElt.getElementById("camera__name").textContent = camera.name
cloneElt.getElementById("camera__price").textContent = camera.price

document.getElementById("main").appendChild(cloneElt)
}

const dCamera = (camera) => {
    const list = document.getElementById('list-camera');
    const c = document.createElement('div');
    c.appendChild(document.createElement('div').appendChild(document.createTextNode(camera.name)));
    c.setAttribute('class', 'lucas oc 12')
    list.appendChild(c);
}