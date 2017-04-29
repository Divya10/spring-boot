import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Product} from "../../core/domains";
import {objToSearchParams} from "../../core/services/helpers";
import {JsonHttp} from "../../core/services";

const url = 'http://localhost:8080/api/products';

@Injectable()
export class ProductListService {

  constructor(private http: JsonHttp) {
  }

  list(userId: string, params: {maxId: number|null, count: number}): Observable<Product[]> {
    return this.http.get(url, {search: objToSearchParams(params)})
      .map(res => res.json())
      ;
  }

}
