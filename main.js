let ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "db.json", true);
ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);

};
ourRequest.send();
// data comes from the JSON
// let r = Math.floor(Math.random() * source.length);

function renderHTML(source){

    // data category : link, bootcamp, post, news(+duyurular)
        let featured = source.filter(e => e.featured === true);
        let links = source.filter(e => e.category === "link");
        let bootcamps = source.filter(e => e.category === "bootcamp");
        let post = source.filter(e => e.category === "post");
        let news = source.filter(e => e.category === "news");
        let tools= source.filter(e => e.tools === true);
     

                // let featuredTools = source.filter(e => e.tools === true && e.featured === true);
                // let featuredBootcamps = source.filter(e => e.featured === true && e.category === "bootcamp");
                // let featuredLinks = source.filter(e => e.featured === true && e.category === "link");
                // let featuredNews = source.filter(e => e.category === "news" && e.featured === true);
    


// main page haberler & duyurular
// for(let i = news.length-2; i < news.length; i++) {
//     console.log(news);

//     let newsItem = `
//                 <div class="col-sm-4 col-md-4   hover shadow-none card  border border-warning" >
//                         <div class="card-body p-2 ">
//                         <h5 class="card-title"><img src="${news[i].image}" alt="..." class=" fit" style="width: 130px;"></h5>
//                         <a href="${news[i].url}" target="_blank" class="btn bg-warning" > <p class="card-text">${news[i].name}</p>
//                         </a>
//                         </div>
//                 </div>
//                     `;

//     let newsContainer = document.querySelector("#newsContainer");
//     newsContainer.insertAdjacentHTML("beforeend", newsItem);


// };

//for blog yazıları in main page
for(let i = post.length-11; i < post.length; i++) {
   
                    let blogItem = `
                    <li class="list-group-item">
                        <img src="${post[i].image}" class="img-thumbnail" alt="${post[i].name}" style="width: 7%;">
                        <a href="${post[i].url}" target="_blank">${post[i].name}</a>
                         <span class="font-weight-bold badge badge-warning">${post[i].tags[0]}</span>
                         <span class="font-weight-bold badge badge-info"> ${post[i].tags[1]}</span>
                         <span class="font-weight-bold badge badge-success"> ${post[i].tags[2]}</span>
                    </li>
                                    `;

                    let blogContainer = document.querySelector('#blog-post');
                    blogContainer.insertAdjacentHTML("beforeend", blogItem);
};

//for internet siteleri in main page
for(let i = links.length-6; i < links.length; i++) {
                    let siteItem = `

                    <div class="col-sm-2 col-md-2">
                     <a href="${links[i].url}"><img src="${links[i].image}" title="${links[i].url}" alt="${links[i].name}" class="fit hover shadow-none " style="width: 150px; height: 100px;"></a></div>

                                    `;


                    let siteContainer = document.querySelector('#links');
                    siteContainer.insertAdjacentHTML("beforeend", siteItem);
};

//for faydalı araçlar in main page featured-tool
for(let i = tools.length-6; i < tools.length; i++) {
    
        let featuredToolItem = `
                        <div class="card"  >
                        <div class="card-body display-6">
                        <span><img src="${tools[i].image}" alt="" style="width: 50px;"></span> <a href="${tools[i].url}" target="_blank">${tools[i].name}</a>
                        </div>
                        </div>
                            `;

            let featuredToolsContainer = document.querySelector("#featuredTools");
            featuredToolsContainer.insertAdjacentHTML("beforeend", featuredToolItem);

};

// main page - bootcamps carousel
for (let i = 0; i < bootcamps.length; i++) {
                let bootcampItem = `

                    <div class="carousel-item">
                        <img src="${bootcamps[i].image}" class="d-block w-100" alt="${bootcamps[i].name}">
                    </div>  `;


                    let carousel = document.querySelector(".bootcamplist");
                    carousel.insertAdjacentHTML("beforeend", bootcampItem);

};







};
