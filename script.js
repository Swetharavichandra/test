async function fetched() {
  let url = "https://626a57fa53916a0fbdf997ba.mockapi.io/e-commerce";

  let res = await fetch(url);
  let data = await res.json();
console.log(data);



let data1="";
data.map((value)=>{
  console.log(value[1]);
    data1+=`
    <div class="card">
    <img class="image2" src="${value.image}" alt="Card image cap">
    <h5 id="cardtitle">${value.title}</h5>
      <p class="card-text">${value.description}</p>
      <p class="price"><b>$ ${value.price}</b></p>
      <p class="rating"><b>Rating:${value.rating.rate}</b></p>
     </div>
   
 
    `
})
console.log(data1);
document.getElementById("cards").innerHTML=data1;
}
fetched();









  