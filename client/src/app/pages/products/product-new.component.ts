import {Component, EventEmitter, Output} from "@angular/core";
import {ProductService} from "../../core/services/product.service";
import {HttpErrorHandler} from "../../core/services/http-error-handler";
import {styles} from "./product-new.component.styles";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import values from "lodash/values";
//import {ToastService} from "../../core/toast/toast.service";

@Component({
  selector: 'product-new',
  templateUrl: 'product-new.component.html'
})

export class ProductNewComponent {


  myForm: FormGroup;
  name: FormControl;
  category: FormControl;


  styles: any = styles;

  @Output() created = new EventEmitter();


  constructor(private productService: ProductService,
              private errorHandler: HttpErrorHandler
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
        }, e => this.errorHandler.handle(e))
    ;

  }


  private initForm() {
    this.name = new FormControl('', Validators.compose([
      Validators.required
    ]));
    this.category = new FormControl('', Validators.compose([
      Validators.required
    ]));
    this.myForm = new FormGroup({
      name: this.name,
      category: this.category
    });
  }



}
