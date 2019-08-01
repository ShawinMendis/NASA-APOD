import { Component } from "@angular/core";
import { ImageserviceService } from "../services/imageservice.service";
import { NgForm } from "@angular/forms";
import { ImageData } from "../interfaces/imagedata";
import { ModalController } from "@ionic/angular";
import { ModalComponent } from "../components/modal/modal.component";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  searchdata: ImageData;
  constructor(
    private imageService: ImageserviceService,
    private modalController: ModalController
  ) {}

  onSubmit(form: NgForm) {
    const searchdate = form.value.searchDate;
    const splitDate = searchdate.split("T")[0];

    this.imageService.getPicturebyDate(splitDate).subscribe(data => {
      this.searchdata = data;
      console.log(this.searchdata);
      this.presentModal();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        searchmedata: this.searchdata
      }
    });
    return await modal.present();
  }
}
