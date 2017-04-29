import {Component, OnInit, Input} from "@angular/core";
import {ProductListService} from "./product-list.service";
import {Product} from "../../core/domains";
import {styles} from "./product-list.component.styles";

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
  providers: [ProductListService],
})
export class ProductListComponent implements OnInit {

  @Input() userId: string;

  styles: any = styles;
  products: Product[] = [];

  constructor(private productListService: ProductListService) {
  }

  ngOnInit(): any {
    this.list();
  }

  private list(maxId: number|null = null): void {
    this.productListService.list(this.userId, {maxId: maxId, count: 5})
      .subscribe(products => {
        this.products = [...this.products, ...products];
      }, e => this.handleError(e))
    ;
  }

  private handleError(error) {
    console.log(error);
    switch (error.status) {
      case 400:
        if (error.json()['code'] === 'email_already_taken') {
          //this.toastService.error('This email is already taken.');
        }
    }
  }


}
