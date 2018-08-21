import { Injectable } from '@angular/core';
import { Dictionary } from './dictionary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private dictionary: Dictionary[] = [
    {word: 'Pencil', translation: ['Карандаш'], lang: 'eng'},
    {word: 'Pen', translation: ['Ручка'], lang: 'eng'},
    {word: 'Book', translation: ['Книга'], lang: 'eng'},
    {word: 'Notebook', translation: ['Записная книжка'], lang: 'eng'},
    {word: 'Eraser', translation: ['Ластик', 'Стирательная резинка'], lang: 'eng'},
  ];
  constructor(private http: HttpClient) {}
  getData(): Observable<Dictionary[]> {
    // let data = this.dictionary;


    // return of(this.dictionary);
    return this.http.get<Dictionary[]>('/api/dictionaries');
  }
  addEntry(word: string, translation: string, lang: string): Observable<any> {
    // this.dictionary.push(new Dictionary(word, [translation], lang));
    const ent = { word: word, translation: translation, lang: lang };
    return this.http.post('/api/dictionaries', ent);
  }

}

