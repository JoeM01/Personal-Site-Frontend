import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { OpenAIServiceService } from '../open-ai-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  private isBrowser: boolean;

  chatForm: FormGroup;

  constructor(private fb: FormBuilder, private langchainService: OpenAIServiceService,  @Inject(PLATFORM_ID) private platformId: Object){
    this.chatForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(1)]]
    });
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    if (this.isBrowser) {
      const savedResponse = localStorage.getItem('lastResponse');
      if (savedResponse) {
        this.response = savedResponse;
      }
    }
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
      if (index === letters.length - 1) {
        this.saveResponse(this.response);
      }
    });
  }

  saveResponse(response: string): void {
    if (this.isBrowser) {
      localStorage.setItem('lastResponse', response);
    }
  }
}
