import { Component } from '@angular/core';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';
import { Platform } from '@ionic/angular';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private speechRecognition: SpeechRecognition,
    private textToSpeechAdvanced: TextToSpeechAdvanced
  ) {
    this.initializeApp();
  }

  checkSpeechRecognitionPermission() {
    // Check permission
    this.speechRecognition.hasPermission().then((hasPermission: boolean) => {
      console.log('hasPermission',hasPermission);
      if (!hasPermission) {
        // Request permissions
        this.speechRecognition.requestPermission().then(
          () => console.log('Granted'),
          () => console.log('Denied')
        );
      }
      this.getTheListOfSupportedLanguages();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.checkSpeechRecognitionPermission();
        console.log('cordova');

        this.isRecognitionAvailable();
      }
    });
  }
  isRecognitionAvailable() {
    // Check feature available
    this.speechRecognition
      .isRecognitionAvailable()
      .then((available: boolean) => console.log('isRecognitionAvailable',available));
  }
  getTheListOfSupportedLanguages() {
    // Get the list of supported languages
    this.speechRecognition.getSupportedLanguages().then(
      (languages: Array<string>) => console.log('getTheListOfSupportedLanguages',languages),
      (error) => console.log('getTheListOfSupportedLanguages',error)
    );
  }
}
