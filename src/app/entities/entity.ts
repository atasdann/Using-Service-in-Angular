export interface Category{
  id:number;
  name:string
}
export interface Product{
  id:number;
  categoryId:number;
  name:string;
  price:number
}
export interface ProductRate{
  id:number;
  productId:number;
  rate:number
}


/***************************/
export interface Post{
  id:number;
  userId:number;
  title:string;
  body:string
}
export interface GeoLoc{
  lat:string;
  lng:string
}
export interface Address{
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo:GeoLoc
}
export interface Company{
  name:string;
  catchPhrase:string;
  bs:string
}
export interface User{
  id:number;
  name:string;
  userName:string;
  email:string;
  address:Address; //Address nesnesini oluşturdum. Çünkü adress içinde nesneler var.
  phone:string;
  website:string;
  company:Company //Company nesnesini oluşturdum. Çünkü Company içinde nesneler var.
}
export interface PostComment{
  id:number;
  postId:number;
  name:string;
  email:string;
  body:string
}
/******************************/

// https://jsonplaceholder.typicode.com/ apisinden gelecek verileri kullanacağımdan buradaki gelecek verilerin entity'lerini oluşturmalıyım.
/*
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
 */
