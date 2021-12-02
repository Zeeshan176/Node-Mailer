import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './Shared/http.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeofileChildComponent } from './peofile-child/peofile-child.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomDerectiveDirective } from './custom-derective.directive';
import { StructuralDirectivesDirective } from './structural-directives.directive';
import { AdditionPipe } from './pipes/addition.pipe';
import { Material } from './app-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatComponent } from './dummy/cat/cat.component';
import { CowComponent } from './dummy/cow/cow.component';
import { DogComponent } from './dummy/dog/dog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    PeofileChildComponent,
    ProfileComponent,
    CustomDerectiveDirective,
    StructuralDirectivesDirective,
    AdditionPipe,
    CatComponent,
    CowComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Material
  ],entryComponents: [DogComponent, CowComponent, CatComponent],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
