import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private readonly http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.API_URL + "/users");
  }

  getUsername(username: string): Observable<User> {
    return this.http.get<User>(environment.API_URL + "/users/" + username);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(environment.API_URL + "/users/", user);
  }

  updateUser(id: string | number, updatedUser: User): Observable<User> {
    return this.http.put<User>(environment.API_URL + "/users/" + id, updatedUser);
  }
}
