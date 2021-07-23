// data comes from the JSON
let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "data.json", true);
ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  
};
ourRequest.send();
// data comes from the JSON
// let r = Math.floor(Math.random() * source.length);

function renderHTML(source){

    // data category : link, bootcamp, post, 
        let featured = source.filter(e => e.featured === true);
        let links = source.filter(e => e.category === "link");
        let bootcamps = source.filter(e => e.category === "bootcamp");
        let post = source.filter(e => e.category === "post");
        
        let featuredBootcamps = source.filter(e => e.featured === true && e.category === "bootcamp");
        let featuredLinks = source.filter(e => e.featured === true && e.category === "link");
        let featuredTools = source.filter(e => e.tools === true && e.featured === true);
        console.log(featuredTools);

        //for posts in main page
        for(let i = post.length-2; i < post.length; i++) {

                    let blogItem = `
                    <li class="list-group-item">
                        <img src="${post[i].image}" class="img-thumbnail" alt="${post[i].name}" style="width: 40px;">
                        <a href="${post[i].url}">${post[i].name}</a>
                    </li>
                                    `;
                    
                    let blogContainer = document.querySelector('#blog-post');
                    console.log(blogContainer);
                    blogContainer.insertAdjacentHTML("beforeend", blogItem);
        }; 

        //for links in main page
        for(let i = links.length-6; i < links.length; i++) {

                    let siteItem = `

                    <div class="col-sm-2 col-md-2"> <a href="${links[i].url}"><img src="${links[i].image}" alt="${links[i].name}" class="hover img-thumbnail"style="width: 200px; weight: 200px;"></a></div>  

                                    `;
                    let siteContainer = document.querySelector('#links');
                    siteContainer.insertAdjacentHTML("beforeend", siteItem);
        };     
        

        //for tools in main page

        for(let i = featuredTools.length-6; i < featuredTools.length; i++) {
        let featuredToolItem = `
                        <div class="card"  >
                        <div class="card-body display-6">
                        <span><img src="${featuredTools[i].image}" alt="" style="width: 50px;"></span> <a href="${featuredTools[i].url}">${featuredTools[i].name}</a>
                        </div>
                        </div>
                            `;

            let featuredToolsContainer = document.querySelector("#featuredTools");
            featuredToolsContainer.insertAdjacentHTML("beforeend", featuredToolItem);

        }; 



        // link list linkler sayfasındaki
        for(let i = 0; i < links.length; i++) {

                let linkler = `
                
                <li class=""> 
                <div class="card "> 
                        <div class="m-1 display-6  p-3">
                        <span><img src="${links[i].image}" alt="" class="m-1 " style="width: 15%;"></span> 
                        <a href="${links[i].url}">${links[i].name}</a> 
                        <span>⭐⭐⭐⭐⭐</span> 
                        <span class="badge bg-success">Linkler</span>
                        <span class="badge bg-info text-dark">Framework</span>
                        <p class="m-1 ">The definitive source of the best
                            JavaScript libraries, frameworks, and plugins Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.. </p>
                        </div>
                </div> 
            </li>
                
                `;
                let linkList = document.querySelector("#linkList");
                linkList.insertAdjacentHTML("beforeend", linkler);
                console.log(linkList);


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
