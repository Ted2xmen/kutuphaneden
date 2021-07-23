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

        let blog = source.filter(e => e.blog === true);
        // console.log(blog);
         let links = source.filter(e => e.link === true);

        // let r = Math.floor(Math.random() * source.length);
        // for blog



        
        // for blog yazıları
        for(let i = blog.length-12; i < blog.length; i++) {

            let blogItem = `
            <li class="list-group-item">
            <img src="${blog[i].image}" class="img-thumbnail" alt="${blog[i].name}" style="width: 40px;">
            <a href="${blog[i].url}">${blog[i].name}</a>
          </li>
                            `;
            let blogContainer = document.querySelector('#blog-post');
            console.log(blogContainer);
            blogContainer.insertAdjacentHTML("beforeend", blogItem);
}; 

        //for internet siteleri

            for(let i = links.length-6; i < links.length; i++) {

                    let siteItem = `

                    <div class="col-sm-2 col-md-2"> <a href="${links[i].url}"><img src="${links[i].image}" alt="${links[i].name}" class="hover img-thumbnail"style="width: 200px; weight: 200px;"></a></div>  


                                    `;
                    let siteContainer = document.querySelector('#links');
                    siteContainer.insertAdjacentHTML("beforeend", siteItem);
            };     
        




    // FOR LOOP 
    // for (let i = 0; i < source.length; i++) {
    //     let bootcamps = `

    //         <div class="carousel-item">
    //              <img src="${source[i].image}" class="d-block w-100" alt="${source[i].name}">
    //         </div>  `; 

    //     let bootcampTitle = document.querySelector(".bootcampJson"); 
    //     bootcampTitle.innerHTML = `Başvuruya Açık <a href="https://www.patika.dev/bootcamp" target="_blank" class="badge badge-warning"> ${source.length} Bootcamp</a> Var`;

    //     let carousel = document.querySelector(".bootcamplist");
    //     carousel.insertAdjacentHTML("beforeend", bootcamps);

    

    // // Card Bölümü
    //     let javaScript = `
        
    //         <div class="col-sm-4">
    //         <div class="card shadow p-2 mb-2 bg-white rounded">
    //         <img src="${source[i].image}" style="width: 250%; height: 200%; " class="card-img-top img-fluid" alt="...">
    //         <div class="card-body">
    //             <p class="card-title">${source[i].name}</p>
    //             <p class="card-title muted">${source[i].desc}</p>
    //             <a href="${source[i].url}" class="btn btn-outline-info btn-sm">yazıyı oku  <i class="bi bi-book"></i></a>
    //         </div>
    //         </div>
    //         </div> 

    //                     `;
    //     let jsSection = document.querySelector("#js");
    //     jsSection.insertAdjacentHTML("beforeend", javaScript);
           

    // }; // for loop

   
}; 












// const words = ['javascript', 'html', 'css', 'bootstrap', 'react'];
// let word = document.getElementById('word');
// let seconds = 200;
// let i = 0;
// setInterval(() => {
//     if (i == words.length) i = 0;
//     word.innerHTML =  words[i];
//     i++;
// }, seconds);
