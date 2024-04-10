const products = [
    {
        title: "Nike",
        price: 300,
        type: "shoes"
    },
    {
        title: "Puma",
        price: 400,
        type: "shoes"
    }, 
    {
        title: "BMW",
        price: 7000,
        type: "car"
    },
    {
        title: "Chanel",
        price: 1200,
        type: "perfume"
    }
];



for(let i = 0; i < products.length; i++){
 if(products[i].type === "shoes"){
     console.log(products[i].title)
 }    
 }

 let eat = [];

 for ( let i = 0; i < products.length; i++) {
    
    if(products[i].price < 1000) {
eat.push(products[i].title)

    }
        
 }
 console.log(eat)
