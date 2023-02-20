import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterModelDto } from '../dtos/character-model-dto';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  apiUrl = "http://localhost:8080/api/characters";

  constructor(private http : HttpClient) { }

  resumeAllCharacters(): Promise<any> {
    return this.http.get(this.apiUrl)
    .toPromise();
  }
  
  createCharacter(dto : CharacterModelDto): Promise<any> {
    return this.http.post(this.apiUrl,dto)
    .toPromise();
  }

  readCharacterById(id: number): Promise<any> {
    return this.http.get(this.apiUrl+'/'+id)
    .toPromise();
  }

  updateCharacter(dto : CharacterModelDto): Promise<any> {
    return this.http.put(this.apiUrl+'/',dto)
    .toPromise();
  }

  deleteCharacterById(id: number): Promise<any> {
    return this.http.delete(this.apiUrl+'/'+id)
    .toPromise();
  }

  findByName(name: string): Promise<any> {
    return this.http.get(this.apiUrl+'?name='+name)
    .toPromise();
  }

  findCharactersByAge(age: string): Promise<any> {
    return this.http.get(this.apiUrl+'?age='+age)
    .toPromise();
  }

  findCharactersByWeight(weight: string): Promise<any> {
    return this.http.get(this.apiUrl+'?weight='+weight)
    .toPromise();
  }

  findCharactersByMovieId(idMovie: string): Promise<any> {
    return this.http.get(this.apiUrl+'?idMovie='+idMovie)
    .toPromise();
  }
}
