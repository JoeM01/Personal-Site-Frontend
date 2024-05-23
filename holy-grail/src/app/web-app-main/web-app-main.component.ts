import { Component, OnInit } from '@angular/core';
import { OpenAIServiceService } from '../open-ai-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BackBtnComponent } from '../back-btn/back-btn.component';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { WebAppModalComponent } from '../web-app-modal/web-app-modal.component';

@Component({
  selector: 'app-web-app-main',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, BackBtnComponent, WebAppModalComponent],
  templateUrl: './web-app-main.component.html',
  styleUrl: './web-app-main.component.scss'
})
export class WebAppMainComponent implements OnInit{
  userInput = '';
  response = '';
  isLoading: boolean = false;
  showModal: boolean = false;

  chatForm: FormGroup;

  constructor(private fb: FormBuilder, private langchainService: OpenAIServiceService){
    this.chatForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  sendMessage(){
    if(this.chatForm.valid) {
      const message = this.chatForm.get('message')?.value;
      this.isLoading = true;
      this.langchainService.sendMessage(message).subscribe(aiResponse => {
        this.userInput=''
        this.isLoading = false;
        this.displayTypewriterEffect(aiResponse.response); // Call the method to display the typewriter effect
        console.log(this.response)
        this.chatForm.reset();
      });
    }
  }

  displayTypewriterEffect(text: string): void {
    this.response = ''; // Reset the response message
    const letters = text.split('');
    const source = interval(50).pipe(take(letters.length)); // Emit every 50ms

    source.subscribe(index => {
      this.response += letters[index];
    });
  }
}
