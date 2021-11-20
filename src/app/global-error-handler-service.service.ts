import { Injectable, ErrorHandler } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalErrorHandlerServiceService extends ErrorHandler {
  constructor() {
    super();
  }

  handleError(error) {
    console.error('An error occurred:', error.message);
    console.error(error.error);
   
    alert(error.error);
 }
}
