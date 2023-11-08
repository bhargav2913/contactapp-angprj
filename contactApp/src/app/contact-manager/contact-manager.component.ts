import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { MyContact } from '../models/myContact';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = false;
  public contacts:MyContact[] = [];
  public errorMessage:string | null = null;

  constructor(private cantService:ContactService) { }

  ngOnInit(): void {
    this.loading = true;
    this.cantService.getAllContacts().subscribe((data:MyContact[])=>{
      this.contacts = data;
      this.loading = false;
    },(error)=>{
      this.errorMessage = error;
      this.loading = false;
    })

  }
}
