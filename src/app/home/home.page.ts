import { Component,ChangeDetectorRef } from '@angular/core';
import {
  SpeechRecognition,
  SpeechRecognitionListeningOptions,
} from '@awesome-cordova-plugins/speech-recognition/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public matches :any=[];
  constructor(private changeDetectorRef: ChangeDetectorRef,private speechRecognition: SpeechRecognition) {}

  startSpeechListening() {
    const options: SpeechRecognitionListeningOptions = {
    };
    // Start the recognition process
    this.speechRecognition.startListening(options).subscribe({
      next:(matches: Array<string>) => {
        console.log(matches)
        this.matches = matches;
        this.changeDetectorRef.detectChanges();
      },
      error:(onerror) => {
        console.log('error:', onerror)
      },
      complete: () => {
        console.log('complete');

       }
  });
  }

  stopSpeechListening() {
    // Stop the recognition process (iOS only)
    this.speechRecognition.stopListening();
  }
}
