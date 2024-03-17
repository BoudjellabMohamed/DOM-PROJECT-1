// let bords=document.getElementsByClassName("bord");

// for (const l of bords) {

//     l.onclick = function()
//     {
//         for (const h of bords) {
//             h.style.borderColor='black'
//         }
//         l.style.borderColor = "red";
//     }

//     }

let cards = document.getElementsByClassName("card");
let total = document.getElementById("total");
let total_items = document.getElementById("total_items");


for (const card of cards) {
    
    card.children[3].onclick= function(e){
        const qte = e.target.parentElement.children[6]
        
        qte.textContent=parseInt(qte.textContent)+1;
        total_items.textContent=parseInt(total.textContent)+1;
        
    }
    card.children[4].onclick= function(e){
        const qte = e.target.parentElement.children[6]
        
        qte.textContent=parseInt(qte.textContent)-1;
    } 
    card.children[5].onclick= function(e){
        console.log(e.target.style.backgroundColor)
        e.target.style.backgroundColor= e.target.style.backgroundColor == 'green'? '': 'green'
    } 
}
let count = 0;
for (let l of cards) {
  l.onclick = function () {

    if (l.style.borderColor == "green") {
      l.style.borderColor = "black";
      count--;
      console.log(count);
    } else {
      l.style.borderColor = "green";
      count++;
      console.log(count);
    }
  };
}
console.log(count);

