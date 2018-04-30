let urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get("id");
console.log("show me " + id);

fetch("http://www.ailishkearns.com/wpt/wp-json/wp/v2/concerts/" + id + "?_embed")
    .then(e => e.json())
    .then(showPosts);


function showPosts(aPost) {
    console.log(aPost._embedded);

    document.querySelector("#singleConcerts h1").textContent = aPost.title.rendered

    document.querySelector(".description").innerHTML = aPost.content.rendered;

    document.querySelector(".price span").textContent = aPost.acf.price;

    document.querySelector(".genre").textContent = aPost.acf.genre;

    document.querySelector(".location").textContent = aPost.acf.location;

    document.querySelector(".time").textContent = aPost.acf.time;

    document.querySelector(".weekday").textContent = aPost.acf.week_day;

 
    
      var day = aPost.content.date;(0,2);
    var month = aPost.content.date;(2,4);
    var year = aPost.content.date;(6,8);
    
    document.querySelector(".date").innerHTML = day + "." + month +"." + year;
    

  document.querySelector(".image_subpage").setAttribute("src", aPost._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);

}
