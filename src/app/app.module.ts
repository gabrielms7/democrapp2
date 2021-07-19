// Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ElectionCreateComponent } from './components/election/election-create/election-create.component';
import { ElectionDetailComponent } from './components/election/election-detail/election-detail.component';
import { ElectionListComponent } from './components/election/election-list/election-list.component';
import { BallotCreateComponent } from './components/ballot/ballot-create/ballot-create.component';
import { BallotDetailComponent } from './components/ballot/ballot-detail/ballot-detail.component';
import { BallotListComponent } from './components/ballot/ballot-list/ballot-list.component';
import { CandidateCreateComponent } from './components/candidate/candidate-create/candidate-create.component';
import { CandidateDetailComponent } from './components/candidate/candidate-detail/candidate-detail.component';
import { CandidateListComponent } from './components/candidate/candidate-list/candidate-list.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { RegisteredUserComponent } from './components/welcome/registered-user/registered-user.component';
import { UnregisteredUserComponent } from './components/welcome/unregistered-user/unregistered-user.component';
import { BallotCreateDialogComponent } from './components/dialogs/ballot-create-dialog.component';
import { ElectionCreateDialogComponent } from './components/dialogs/election-create-dialog.component';
import { CandidateCreateDialogComponent } from './components/dialogs/candidate-create-dialog.component';

// Servicios
import { AuthService } from './services/auth.service';
import { BallotService } from './services/ballot.service';
import { CandidateService } from './services/candidate.service';
import { ElectionService } from './services/election.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ElectionCreateComponent,
    ElectionDetailComponent,
    ElectionListComponent,
    BallotCreateComponent,
    BallotDetailComponent,
    BallotListComponent,
    CandidateCreateComponent,
    CandidateDetailComponent,
    CandidateListComponent,
    HeaderComponent,
    SidenavListComponent,
    RegisteredUserComponent,
    UnregisteredUserComponent,
    BallotCreateDialogComponent,
    ElectionCreateDialogComponent,
    CandidateCreateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    BallotService,
    CandidateService,
    ElectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
