export interface ProductViewDto{
  id:number; //productId'dir
  categoryId:number;
  name:string;
  price:number; //id,categoryId, name ve price içeriğinde olmak zorunda.
  categoryName?:string;
  rate?:number;
  rateCount?:number; //categoryName, rate, rateCount null olabilit o sebeple ? koyduk.
}
