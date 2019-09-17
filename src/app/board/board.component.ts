import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  cards: string[] = ["Backlog", "In progress", "Done"];

  constructor() {}

  ngOnInit() {}
}
