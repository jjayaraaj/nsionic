import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
    id: 1,
    title: 'Mango Safeda',
    image: 'https://www.naturessoulshop.com/media_image/product/Mango.jpg',
    price: 280
  },
  {
    id: 2,
    title: 'Watermelon',
    image: 'https://www.naturessoulshop.com/media_image/product/water%20melon.jpg',
    price: 70
  },
  {
    id: 3,
    title: 'Natures Soul Avocado (Indian)',
    image: 'https://www.naturessoulshop.com/media_image/product/indian%20avocado.jpg',
    price: 170
  },
  {
    id: 4,
    title: 'Conscious Foods Apple Cider Vinegar (500 ml)',
    image: 'https://www.naturessoulshop.com/media_image/product/ACV%20front.jpg',
    price: 798
  },
]

  constructor() { }

  getAllProducts() {
    return [...this.products];
  }

  getProduct(productId) {
    return this.products.find(product => {
      return product.id == productId;
    });
  }

}
