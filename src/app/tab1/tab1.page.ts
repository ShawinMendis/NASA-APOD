import { Component, OnInit } from "@angular/core";
import { ImageserviceService } from "../services/imageservice.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  title: string;
  url: string;
  copyrights: string;
  explanation: string;
  dateRetrived: string;

  moreInformation = false;
  showButtonLabel = "Show details";
  hideButtonLabel = "Hide Details";

  constructor(private imageService: ImageserviceService) {}
  ngOnInit() {
    this.imageService.getImageOfTheDay().subscribe(data => {
      this.title = data.title;
      this.dateRetrived = data.date;
      this.copyrights = data.copyright;
      this.url = data.url;
      this.explanation = data.explanation;
    });
  }

  showDetails() {
    this.moreInformation = !this.moreInformation;
  }
}
