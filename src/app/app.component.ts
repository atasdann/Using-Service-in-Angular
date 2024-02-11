import { Category, Product, ProductRate } from './entities/entity';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductViewDto } from './entities/dtos';
import "./extensions/strings";
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'secondProject';
  searchText:string="";
  categories:Category[]=[ //Kategori
    {
      id:1,
      name:"Arçelik"
    },
    {
      id:2,
      name:"Beko"
    },
    {
      id:3,
      name:"Bosch"
    }
  ]
  products:Product[]=[ //Ürün
    {
      id: 1,
      categoryId:1,
      name:"Buzdolabı",
      price:15000
    },
    {
      id: 2,
      categoryId:2,
      name:"Buzdolabı",
      price:13000
    },
    {
      id: 3,
      categoryId:1,
      name:"Buzdolabı",
      price:17000
    },
    {
      id: 4,
      categoryId:3,
      name:"Çamaşır Makinesi",
      price:20000
    },
    {
      id: 5,
      categoryId:2,
      name:"Televizyon",
      price:11000
    },
    {
      id: 6,
      categoryId: 1,
      name: "Buzdolabı",
      price: 16000
    },
    {
      id: 7,
      categoryId: 2,
      name: "Buzdolabı",
      price: 14000
    },
    {
      id: 8,
      categoryId: 1,
      name: "Buzdolabı",
      price: 18000
    },
    {
      id: 9,
      categoryId: 3,
      name: "Çamaşır Makinesi",
      price: 21000
    },
    {
      id: 10,
      categoryId: 2,
      name: "Televizyon",
      price: 12000
    },
    {
      id: 11,
      categoryId: 1,
      name: "Buzdolabı",
      price: 17000
    },
    {
      id: 12,
      categoryId: 2,
      name: "Televizyon",
      price: 15000
    },
    {
      id: 13,
      categoryId: 3,
      name: "Çamaşır Makinesi",
      price: 22000
    },
    {
      id: 14,
      categoryId: 1,
      name: "Buzdolabı",
      price: 16500
    },
    {
      id: 15,
      categoryId: 2,
      name: "Bulaşık Makinesi",
      price: 18000
    },
    {
      id: 16,
      categoryId: 3,
      name: "Ütü",
      price: 25000
    },
  ]

  ProductRates:ProductRate[]=[ //Oylama
    {
      id:1,
      productId:1,
      rate:4
    },
    {
      id:1,
      productId:1,
      rate:3
    },
    { id: 3, productId: 2, rate: 5 },
    { id: 4, productId: 3, rate: 4 },
    { id: 5, productId: 3, rate: 3 },
    { id: 6, productId: 4, rate: 4 },
    { id: 7, productId: 4, rate: 5 },
    { id: 8, productId: 5, rate: 2 },
    { id: 9, productId: 5, rate: 4 },
    { id: 10, productId: 6, rate: 3 },
    { id: 11, productId: 7, rate: 5 },
    { id: 12, productId: 8, rate: 4 },
    { id: 13, productId: 9, rate: 3 },
    { id: 14, productId: 10, rate: 2 },
    { id: 15, productId: 11, rate: 4 },
    { id: 16, productId: 12, rate: 5 },
    { id: 17, productId: 13, rate: 3 },
    { id: 18, productId: 14, rate: 4 },
    { id: 19, productId: 15, rate: 5 },
    { id: 20, productId: 16, rate: 4 }
  ]

  getProductWithRateList():ProductViewDto[]{
    let productViewList:ProductViewDto[]=this.products.map(product=>{
      let productRates=this.ProductRates.filter(rate=>rate.productId==product.id);
      return {
        id:product.id,
        name:product.name,
        categoryId:product.categoryId,
        price:product.price, //id, name, categoryId, price ürünün birebir aynı parametrelerini kopyaladık.
        categoryName:this.categories.find(category=>category.id==product.categoryId)?.name, // categoryName'i göstermek için x numaralı ürünün yer aldığı kategoriyi çektik name'ini yazdık.
        rate:productRates.map(productRate=>productRate.rate).reduce((num1,num2)=> num1+num2,0) / productRates.length, //değilse=>0
        rateCount:productRates.length
      };
    })
    productViewList=productViewList.filter(view=>
      this.searchText=="" ||
      (
        view.categoryId.toString()==this.searchText ||
        view.id.toString()==this.searchText||
        view.name?.toSearchText().includes(this.searchText.toSearchText())||
        view.categoryName?.toSearchText().includes(this.searchText.toSearchText())||
        view.price.toString().toSearchText().includes(this.searchText.toSearchText())||
        view.rate?.toString().toSearchText().includes(this.searchText.toSearchText())||
        view.rateCount?.toString()==this.searchText
      )
    )
    console.log(productViewList)
  return productViewList;
  }
}
