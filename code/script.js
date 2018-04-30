let page = 1;
let lookingForData = false;

function fetchConcerts() {
    /*lookingForData = true;
    fetch("http://www.ailishkearns.com/wpt/wp-json/wp/v2/concerts?_embed&per_page=3&page=" + page)
    
    
    
    
        .then(e => e.json())
        .then(showConcerts)*/
    
    lookingForData=true;

  let urlParams = new URLSearchParams(window.location.search);

  let catid = urlParams.get("category");
  let endpoint = "http://www.ailishkearns.com/wpt/wp-json/wp/v2/concerts?_embed&per_page=2&page="+page
  if(catid){ // DRY
    endpoint = "http://www.ailishkearns.com/wpt/wp-json/wp/v2/concerts?_embed&per_page=2&page="+page + "&categories="+catid
  }
    fetch(endpoint)
      .then(e => e.json())
      .then(showConcerts);
    
    
}

function showConcerts(data) {
    //console.log(data);
    data.forEach(showSingleConcert);
    lookingForData = false;
}

function showSingleConcert(aConcert) {

    //console.log(aConcert);
    let template = document.querySelector("#concertTemplate").content;

    let clone = template.cloneNode(true);

    clone.querySelector(".readmore").href = "subpage.html?id=" + aConcert.id;
    clone.querySelector(".title").textContent = aConcert.title.rendered;

   
  clone.querySelector(".genre").textContent = aConcert.acf.genre;


 clone.querySelector(".location").textContent = aConcert.acf.location;

 clone.querySelector(".weekday").textContent = aConcert.acf.week_day;


   var day = aConcert.acf.Date.substring(0,2);
    var month = aConcert.acf.Date.substring(2,4);
    var year = aConcert.acf.Date.substring(6,8);
    
    clone.querySelector(".date").textContent = day + "." + month +"." + year;
    

    console.log(aConcert.acf.Date);

    //clone.querySelector("img").setAttribute("src", aConcert._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);

    let concertList = document.querySelector("#concertList");

    if (aConcert._embedded["wp:featuredmedia"]) { //IMG IS THERE
        clone.querySelector("img").setAttribute("src", aConcert._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    } else { //NO IMG
        clone.querySelector("img").remove();
    }


concertList.appendChild(clone);
}


fetchConcerts();

setInterval(function () {


    if (bottomVisible() && lookingForData === false) {
        // console.log("we reached bottom")
        page++;
        fetchConcerts();
    }
}, 500)

function bottomVisible() {
    const scrollY = window.scrollY
    const visible = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight
    const bottomOfPage = visible + scrollY >= pageHeight
    return bottomOfPage || pageHeight < visible
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 2 seconds

}


