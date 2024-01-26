import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/enviromment';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/interfaces/user/AuthResponse';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { AuthRequest } from 'src/app/models/interfaces/user/AuthRequest';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private cookie: CookieService) { }

  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse> {
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`,
      requestDatas
    )
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }


  //verifica se o usuário possui um tokken ou cookie
  isLoggedIn(): boolean {

    const JWT_TOKEN = this.cookie.get('USER_INFO');

    return JWT_TOKEN ? true : false
  }












}
