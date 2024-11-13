async function getpizas(){
  const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`);
  const soso = await response.json();
  const data = soso.data;
  const recipes = data.recipes 
 
 const result = recipes.map(function(pizza){
    return`
    <div class="pizzas">
     <h2>${pizza.title}</h2>
    <img src="${pizza.image_url}"/>
   
    </div>
    
    
    
    `
 }).join('');
 document.querySelector(".pizzas .row").innerHTML = result;
 
  console.log(result);
  

};
getpizas();