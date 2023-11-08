import { MyGroup } from './../models/myGroup';
import { MyContact } from './../models/myContact';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:4000'

  constructor(private http:HttpClient) { }

  //Get All
  public getAllContacts() :Observable<MyContact[]>{
    let dataUrl:string = `${this.baseUrl}/contacts`;
    return this.http.get<MyContact[]>(dataUrl).pipe(catchError(this.handleError))
  }
//Get Single Contact

public getContacts(contactId:string):Observable<MyContact[]>{
  let dataUrl:string = `${this.baseUrl}/contacts/${contactId}`;
  return this.http.get<MyContact[]>(dataUrl).pipe(catchError(this.handleError))
}

//Create Contact
public crerateContact(contact:MyContact[]):Observable<MyContact[]>{
  let dataUrl:string = `${this.baseUrl}/contacts`;
  return this.http.post<MyContact[]>(dataUrl,contact).pipe(catchError(this.handleError))
}

//Update Contact
public updateContact(contact:MyContact[], contactId:string):Observable<MyContact[]>{
  let dataUrl:string = `${this.baseUrl}/contacts/${contactId}`;
  return this.http.put<MyContact[]>(dataUrl,contact).pipe(catchError(this.handleError))
}

//Delete Contact
public deleteContact(contactId:string):Observable<MyContact[]>{
  let dataUrl:string = `${this.baseUrl}/contacts/${contactId}`;
  return this.http.delete<MyContact[]>(dataUrl).pipe(catchError(this.handleError))
}

//get All Groups
public getAllGroups() :Observable<MyGroup>{
  let dataUrl:string = `${this.baseUrl}/groups`;
  return this.http.get<MyGroup>(dataUrl).pipe(catchError(this.handleError))
}

//get Single Groups
public getGroups(contact:MyContact):Observable<MyGroup>{
  let dataUrl:string = `${this.baseUrl}/groups/${contact.groupId}`;
  return this.http.get<MyGroup>(dataUrl).pipe(catchError(this.handleError))
}

//Error
public handleError(error:HttpErrorResponse){
  let errorMessage:string = ''
  if(error.error instanceof ErrorEvent){

    errorMessage = `Error :${error.error.message}`
  }else{
    errorMessage = `Status :${error.status}\n Message: ${error.message}`;
  }
  return throwError(errorMessage)
}
}
