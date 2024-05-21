import { Component } from '@angular/core';
import { OpenAIServiceService } from '../open-ai-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-app-main',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './web-app-main.component.html',
  styleUrl: './web-app-main.component.scss'
})
export class WebAppMainComponent {
  response = '';

  constructor(private langchainService: OpenAIServiceService){}

  getResponse() {
    this.langchainService.generateResponse().subscribe(
      (res) => {
        this.response = res;
        console.log(this.response)
      },
      (err) => {
        console.error('Error fetching response:', err);
        this.response = 'Error generating response';
      }
    );
  }


}
