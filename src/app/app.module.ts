import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers/reducers';
import { reducer } from './reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
