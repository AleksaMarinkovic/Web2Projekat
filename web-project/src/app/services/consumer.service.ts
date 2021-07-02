import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleError } from 'src/assets/errorHandler';
import { DataTableConsumerItem } from '../components/data-tables/data-table-consumer/data-table-consumer-datasource';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  url = "https://localhost:44358/api/Consumers";
  constructor(private httpClient: HttpClient) { }

  getAllConsumers(){
    return this.httpClient.get<DataTableConsumerItem[]>(this.url).pipe(
      catchError(handleError)
    );;
  }

  postConsumer(consumer: any){
    return this.httpClient.post<DataTableConsumerItem>(this.url, consumer).pipe(
      catchError(handleError)
    );   
  }

  getConsumer(consumerId: number){
    return this.httpClient.get<DataTableConsumerItem>(this.url + "/" + consumerId).pipe(
      catchError(handleError)
    );;
  }
  putConsumer(consumer: any, consumerId: number){
    return this.httpClient.put<DataTableConsumerItem>(this.url + "/" + consumerId, consumer).pipe(
      catchError(handleError)
    );;
  }
  deleteConsumer(consumerId: number){
   return this.httpClient.delete(this.url + "/" + consumerId).pipe(
    catchError(handleError)
  );;    
  }
  
}
