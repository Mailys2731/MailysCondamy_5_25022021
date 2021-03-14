main ()

async function main() {
    const cameras = await getCameras()
    console.log(cameras)
    detailCameraProd (detailProduit)
    
}

//Lien avec l'API

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

async function detailCameraProd () {

    const queryString = window.location.search;
    console.log (queryString);

    const rulParams = new URLSearchParams (queryString);
    console.log (urlParams);

    const id = urlParams.get('id');
    console.log(id);

    const detailProduit = await Ajax ('cameras/' + id , 'GET');
    console.log(detailProduct)


    //Element section product html

    const detailCameras = await getCameras();



    const detailProduct = document.getElementById("product");


    let detailContent = document.createElement("article");
    let detailPicturebox = document.createElement("div");
    let detailPicture = document.createElement("img");
    let detailDesrciption = document.createElement("div");
    let detailName = document.createElement("h2");
    let detailPrice = document.createElement("p");
    let detailText = document.createElement("p");
    let detailOption = document.createElement("");

    detailContent.setAttribute("class", "detail_content");
    detailPicturebox.setAttribute("class", "detail_picturebox");
    detailPicture.setAttribute("alt", "photo de la caméra");
    detailDesrciption.setAttribute("class", "detail_description");
    detailName.setAttribute("class", "detail_name");
    detailPrice.setAttribute("class", "detail_price");
    detailText.setAttribute("class", "detail_text");

    detailPicture.src(detailcamera.imageUrl)
    detailName.textContent(detailcamera.name)
    detailPrice.textContent(detailPrice / 100 + " euros")

}