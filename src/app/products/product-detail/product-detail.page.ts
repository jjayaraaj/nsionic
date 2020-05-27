import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product: Product;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap
    .subscribe((paramMap: ParamMap)=> {
      console.log(paramMap);
      if(!paramMap.has('productId')) {
        //redirect
        
      }
      const productId = paramMap.get('productId');
      this.product =  this.productService.getProduct(productId);

      

    })
  }

  onClick() {
    this.alertCtrl.create({
      header: "Testing",
      message: "This is alert testing",
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Okay',
        handler: () => { 
          console.log('okay')
        }
      }
    ]
    }).then( alertEl => {
      alertEl.present();
    })
  }

}
