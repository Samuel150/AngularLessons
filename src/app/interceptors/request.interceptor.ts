import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable ,of, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(
        // private toastr: ToastrService,
        private _router: Router,
    ) {}


    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(httpRequest).pipe(
            tap(evt=>{

                console.log('evt',evt,httpRequest)




                if (evt instanceof HttpResponse) {
                  switch (evt.status) {
                    case 200:
                      if (httpRequest.method === 'PUT') {
                          console.log('PUT request 200')
                      }
                      break;

                    case 201:
                      if(httpRequest.method !== 'GET'){
                        console.log('PUT request')
                      }
                      break;

                    case 204:
                      break;

                    default:
                      break;
                  } 
                }
            }),
            catchError((err:HttpErrorResponse)=>{

              switch (err.status) {
                case 400:
                  let error = err.error;
                   
                  if (error['apierror']) {
                    error = error['apierror'];
                    if (error['error_description']) {

                    } else if (error['subErrors']) {
                      let messages = '';
                      for (let i = 0; i < error['subErrors'].length; i++) {
                        messages += '<p>'
                        messages += error['subErrors'][i]['message'];
                        messages += '</p>'
                      }
                    
                    } else {

                    }
                  } else {
                      console.log('as')

                    }
                  break;
                case 401:
                  
                  this._router.navigate(['login'])
                  break;
                case 403:
               
                  break;
                case 404:
                    console.log('error dishes',err.error ) 
                
                  break;
                // --> 500
                case 500:
               
                  break;
                default:
                  if (err.error) {
                    
                  }
                  break;
              }
              if (err.statusText === 'Unknown Error') {
                
              }
              return throwError(err);
            })
        )as Observable<HttpEvent<any>>;
    }
}