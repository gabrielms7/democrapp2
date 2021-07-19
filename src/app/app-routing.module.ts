import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BallotCreateComponent } from './components/ballot/ballot-create/ballot-create.component';
import { BallotDetailComponent } from './components/ballot/ballot-detail/ballot-detail.component';
import { BallotListComponent } from './components/ballot/ballot-list/ballot-list.component';
import { CandidateCreateComponent } from './components/candidate/candidate-create/candidate-create.component';
import { CandidateDetailComponent } from './components/candidate/candidate-detail/candidate-detail.component';
import { CandidateListComponent } from './components/candidate/candidate-list/candidate-list.component';
import { ElectionCreateComponent } from './components/election/election-create/election-create.component';
import { ElectionDetailComponent } from './components/election/election-detail/election-detail.component';
import { ElectionListComponent } from './components/election/election-list/election-list.component';
import { RegisteredUserComponent } from './components/welcome/registered-user/registered-user.component';
import { UnregisteredUserComponent } from './components/welcome/unregistered-user/unregistered-user.component';

const routes: Routes = [
  { path: '', component: UnregisteredUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'welcome', component: RegisteredUserComponent, canActivate: [AuthGuard] },
  { path: 'ballot-create', component: BallotCreateComponent, canActivate: [AuthGuard] },
  { path: 'ballot-detail/:id', component: BallotDetailComponent, canActivate: [AuthGuard] },
  { path: 'ballot-list', component: BallotListComponent, canActivate: [AuthGuard] },
  { path: 'candidate-create', component: CandidateCreateComponent, canActivate: [AuthGuard] },
  { path: 'candidate-detail/:id', component: CandidateDetailComponent, canActivate: [AuthGuard] },
  { path: 'candidate-list', component: CandidateListComponent, canActivate: [AuthGuard] },
  { path: 'election-create', component: ElectionCreateComponent, canActivate: [AuthGuard] },
  { path: 'election-detail/:id', component: ElectionDetailComponent, canActivate: [AuthGuard] },
  { path: 'election-list', component: ElectionListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard] // 'AuthGuard' se provee en este módulo porque solo se utiliza aquí.
})
export class AppRoutingModule { }
