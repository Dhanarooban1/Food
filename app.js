const URL = `https://www.themealdb.com/api/json/v1/1/random.php`

let imgBox = document.getElementById('imgBox');
let instructions = document.getElementById('instruction');
let poPup= document.getElementById("popup");
let alink = document.getElementById("alink");
let youtubeLink = document.getElementById("youtubeLink");


function RandomFood(){
  let popup = document.getElementById("popup");
  popup.innerHTML=""

  axios.get(URL)
  .then(response => {
    // console.log(response.data.meals);
    let meal = response.data.meals[0];
    let imageUrl = meal.strMealThumb; 
    let name = meal.strMeal;
    let article = meal.strSource;
    let youtube = meal.strYoutube;  
    let data = response.data.meals[0];
    let div = document.createElement("div");   div.className='ingredients-div';
    imgBox.innerHTML = `<img src="${imageUrl}" alt="Meal Image">`;
    name.innerHTML = name
    alink.href = article
    youtubeLink.href = youtube;
  // POP
    for(let i=1;i<=20;i++){
      let p=document.createElement("p");
      let item=`strIngredient${i}`
      if(data[item]){
        p.innerText= "●" + data[item]
        div.append(p)
      }
    }
    popup.append(div);
  })
  .catch(error => console.error(error.message));
}


RandomFood()

document.getElementById('refreshButton').addEventListener('click', function() {
  RandomFood()
});
 


  document.getElementById('myInputField').addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
    let inputValue = this.value;
    const all = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(inputValue)}`;
    axios.get(all)
    .then(response => {
      displayNew(response.data.meals);
     })
     .catch(error => console.error(error.message));
   }
  });                                                                                  


  const displayNew = (meals) => {
    console.log(meals);
    var elements = meals.map((meal, index) => {
     return ( `<div id="data${index}">
      <img style="height:300px" src=${meal.strMealThumb} alt="Meal image" />
       <p> ${meal.strMeal}</p>
         </div>`
     ) 
    });
    document.getElementById("container").innerHTML = elements.join(" ");
   };