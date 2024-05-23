import { Component, OnInit } from '@angular/core';
import { OpenAIServiceService } from '../open-ai-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-web-app-main',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './web-app-main.component.html',
  styleUrl: './web-app-main.component.scss'
})
export class WebAppMainComponent{
  userInput = '';
  response = '';

  chatForm: FormGroup;

  constructor(private fb: FormBuilder, private langchainService: OpenAIServiceService){
    this.chatForm = this.fb.group({
      message: ['']
    });
  }

  sendMessage(){
    if(this.chatForm.valid) {
      const message = this.chatForm.get('message')?.value;
      this.langchainService.sendMessage(message, "front-end").subscribe(aiResponse => {
        this.userInput=''
        this.response = aiResponse
        console.log(this.response)
      });
    }
  }
}
