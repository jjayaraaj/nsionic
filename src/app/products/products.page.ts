import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Product[];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
   
  };

  topProductSlide = {
    slidesPerView: 3,
    speed: 400
  }

  slideImages = [
    { name: "https://www.naturessoulshop.com//images/banner/2_1.jpg" },
    { name: "https://www.naturessoulshop.com//images/banner/1.jpg" },
    { name: "https://www.naturessoulshop.com//images/banner/2.jpg" }]

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {

    this.products = this.productService.getAllProducts();

  }

}
