import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ProductService} from "../../core/services/product.service";
import values from "lodash/values";
import {Router} from "@angular/router";

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {


  myForm: FormGroup;
  name: FormControl;
  category: FormControl;

  constructor( private router: Router, private productService: ProductService
              ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(params) {
    values(this.myForm.controls).forEach(c => c.markAsTouched());
    if (!this.myForm.valid) return;


    this.productService.create(params)
        .subscribe(() => {
          //this.toastService.success('Product Created!');
          //this.created.emit({});
          this.router.navigate(['/product/list']);
        }, e => this.handleError(e))
    ;

  }

  private initForm() {
    this.name = new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
    ]));
    this.category = new FormControl('', Validators.compose([
      Validators.required
    ]));

    this.myForm = new FormGroup({
      name: this.name,
      category: this.category,

    });
  }

  private handleError(error) {
    switch (error.status) {
      case 400:
        if (error.json()['code'] === 'email_already_taken') {
         // toastService.error('This email is already taken.');
        }
    }
  }

}
