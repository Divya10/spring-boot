import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Product} from "../domains";
import {objToSearchParams} from "./helpers";
import {PageRequest, Page, ProductParams} from "../dto";
import {JsonHttp} from "./";

const url = 'http://localhost:8080/api/products';
const defaultPageRequest: PageRequest = {page: 1, size: 5};

@Injectable()
export class ProductService {

  constructor(private http: JsonHttp) {
  }

  list(pageRequest: PageRequest = defaultPageRequest): Observable<Page<Product>> {
    return this.http.get(url, {search: objToSearchParams(pageRequest)})
      .map(res => res.json())
      ;
  }

  get(id: string|number): Observable<Product> {
    return this.http.get(`${url}/${id}`)
      .map(res => res.json())
      ;
  }

  create(params: ProductParams): Observable<Response> {
    return this.http.post(url, params);
  }

  delete(productParam: ProductParams): Observable<Response> {
    return this.http.patch(`${url}/me`, productParam);
  }

}
