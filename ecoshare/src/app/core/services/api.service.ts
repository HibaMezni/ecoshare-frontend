import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    });
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<any>(`${this.apiUrl}${endpoint}`, {
      headers: this.getHeaders()
    }).pipe(map(response => response.data ?? response));
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<any>(`${this.apiUrl}${endpoint}`, data, {
      headers: this.getHeaders()
    }).pipe(map(response => response.data ?? response));
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<any>(`${this.apiUrl}${endpoint}`, data, {
      headers: this.getHeaders()
    }).pipe(map(response => response.data ?? response));
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<any>(`${this.apiUrl}${endpoint}`, {
      headers: this.getHeaders()
    }).pipe(map(response => response.data ?? response));
  }

  patch<T>(endpoint: string, data: any): Observable<T> {
    return this.http.patch<any>(`${this.apiUrl}${endpoint}`, data, {
      headers: this.getHeaders()
    }).pipe(map(response => response.data ?? response));
  }
}