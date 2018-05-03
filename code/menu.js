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
    
        if(item.parent===12){
          let option = document.createElement("option");
            option.textContent=item.name
            option.value=item.id
          /*let a = document.createElement("a");
          a.textContent = item.name;
          a.href="index.html?category=" + item.id;

          li.appendChild(a);*/
          parentElement.appendChild(option);
        }

    })
    /*
  }
    
      function buildMenu_venue(data_venue){
      */
          
    let parentElement_venue = document.querySelector(".menu_select_venue");
    data.forEach(item_venue => {
   
        if(item_venue.parent===24){
          let option_venue = document.createElement("option");
            option_venue.textContent=item_venue.name
          /*let a = document.createElement("a");
          a.textContent = item.name;
          a.href="index.html?category=" + item.id;

          li.appendChild(a);*/
          parentElement_venue.appendChild(option_venue);
        }

    })
      
     /* let parentElement_data = document.querySelector(".menu_select_date");
    data.forEach(item_data => {
   
        if(item_data.parent===24){
          let option_data = document.createElement("option");
            option_data.textContent=item_data.name
          /*let a = document.createElement("a");
          a.textContent = item.name;
          a.href="index.html?category=" + item.id;

          li.appendChild(a);
          parentElement_data.appendChild(option_data);  */
    
      
  }
    
  });  


