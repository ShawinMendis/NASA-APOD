import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ImageData } from "../interfaces/imagedata";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageserviceService {
  apiKey = environment.nasaApiKey;
  url = environment.nasaApiUrl;

  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<ImageData> {
    return this.http.get<ImageData>(`${this.url}api_key=${this.apiKey}`);
  }

  getPicturebyDate(_date: any): Observable<ImageData> {
    return this.http.get<ImageData>(
      `${this.url}api_key=${this.apiKey}&date=${_date}`
    );
  }
}
