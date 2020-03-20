import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { debounce } from "./debouncer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {

  title = "Makimura";

}
