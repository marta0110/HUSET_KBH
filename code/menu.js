window.addEventListener('load',()=>{
  let menuOpen = false;
  let menu = document.querySelector(".menu");
  


fetch("http://www.ailishkearns.com/wpt/wp-json/wp/v2/categories?per_page=100")
    .then(e=>e.json())
    .then(buildMenu)

  /*function buildMenu(data){
    let parentElement = document.querySelector(".menu ul");
    data.forEach(item => {
      console.log(item);
        if(item.parent===12){
          let li = document.createElement("li");
          let a = document.createElement("a");
          a.textContent = item.name;
          a.href="index.html?category=" + item.id;

          li.appendChild(a);
          parentElement.appendChild(li);
        }

    })
  }*/
    
    


  function buildMenu(data){
    let parentElement = document.querySelector(".menu_select");
    data.forEach(item => {
      console.log(item);
        if(item.parent===12){
          let option = document.createElement("option");
            option.textContent=item.name
          /*let a = document.createElement("a");
          a.textContent = item.name;
          a.href="index.html?category=" + item.id;

          li.appendChild(a);*/
          parentElement.appendChild(option);
        }

    })
  }
    
      function buildMenu(data_venue){
    let parentElement = document.querySelector(".menu_select_venue");
    data_venue.forEach(item_venue => {
      console.log(item_venue);
        if(item_venue.parent===24){
          let option_venue = document.createElement("option");
            option_venue.textContent=item_venue.name
          /*let a = document.createElement("a");
          a.textContent = item.name;
          a.href="index.html?category=" + item.id;

          li.appendChild(a);*/
          parentElement.appendChild(option_venue);
        }

    })
  }
    
  });  


