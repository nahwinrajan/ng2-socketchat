import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { ChatComponent }  from './components/chat/chat.component';

import { ChatService }    from './services/chat.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent, ChatComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ChatService ]
})
export class AppModule { }
