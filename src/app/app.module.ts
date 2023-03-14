import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },TextToSpeechAdvanced,SpeechRecognition],
  bootstrap: [AppComponent],
})
export class AppModule {}
