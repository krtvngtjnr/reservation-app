import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../Products'
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getProductsById(params.get('productId'));
      const productObservable = this.productService.getProductsById(params.get('productId'));
      productObservable.subscribe(
        (data) => { this.product = data },
        (err) => {}
      )
    });
  }

}
