// data comes from the JSON

let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "db.json", true);
ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  
};
ourRequest.send();
// data comes from the JSON


function renderHTML(source){

    // data category

        let blog = source.filter(e => e.blog === true);
        console.log(blog);

        let links = source.filter(e => e.link === true);
        console.log(links);

     // data category

     // Okuma listesi // manuel random

        let r = Math.floor(Math.random() * source.length);
        let r2 = Math.floor(Math.random() * source.length);
        let r3 = Math.floor(Math.random() * source.length);

        let listItem = `

            <li class="list-group-item">${source[r].name}</li>
            <li class="list-group-item">${source[r2].name}</li>
            <li class="list-group-item">${source[r3].name}</li>
    
                        `;
        let list = document.querySelector("#list");
        list.insertAdjacentHTML("beforeend", listItem);

    // Okuma listesi anuel random
   


    // FOR LOOP 
    for (let i = 0; i < source.length; i++) {
        let bootcamps = `

            <div class="carousel-item">
                 <img src="${source[i].image}" class="d-block w-100" alt="${source[i].name}">
            </div>  `; 

        let bootcampTitle = document.querySelector(".bootcampJson"); 
        bootcampTitle.innerHTML = `Başvuruya Açık <a href="https://www.patika.dev/bootcamp" target="_blank" class="badge badge-warning"> ${source.length} Bootcamp</a> Var`;

        let carousel = document.querySelector(".bootcamplist");
        carousel.insertAdjacentHTML("beforeend", bootcamps);

    

    // Card Bölümü
        let javaScript = `
        
            <div class="col-sm-4">
            <div class="card shadow p-2 mb-2 bg-white rounded">
            <img src="${source[i].image}" style="width: 175px;" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-title">${source[i].name}</p>
                <a href="${source[i].url}" class="btn btn-outline-info btn-sm">yazıyı oku  <i class="bi bi-book"></i></a>
            </div>
            </div>
            </div> 

                        `;
        let jsSection = document.querySelector("#js");
        jsSection.insertAdjacentHTML("beforeend", javaScript);
           

    }; // for loop

    // Card Bölümü
}; // function






