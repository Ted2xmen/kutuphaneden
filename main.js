let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "db.json", true);
ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  


};
ourRequest.send();


function renderHTML(source){
    for (let i = 0; i < source.length; i++) {
    let bootcamps = `
            <div class="carousel-item">
                 <img src="${source[i].image}" class="d-block w-100" alt="${source[i].name}">
            </div>  `; 

    let bootcampTitle = document.querySelector(".bootcampJson"); 
    bootcampTitle.innerHTML = `Başvuruya Açık <a href="https://www.patika.dev/bootcamp" target="_blank" class="badge badge-warning"> ${source.length}</a> Bootcamp Var`;

    let carousel = document.querySelector(".bootcamplist");
    carousel.insertAdjacentHTML("beforeend", bootcamps);

// js section


let javaScript = `
        
<div class="col-sm-4">
 <div class="card shadow p-2 mb-2 bg-white rounded">
   <img src="${source[i].image}" style="width: 175px;" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${source[i].name}</h5>
     <a href="${source[i].url}" class="btn btn-outline-info btn-sm">yazıyı oku  <i class="bi bi-book"></i></a>
  </div>
 </div>
</div> 

 `;


 let jsSection = document.querySelector("#js");
 jsSection.insertAdjacentHTML("beforeend", javaScript);
           

    };
};






