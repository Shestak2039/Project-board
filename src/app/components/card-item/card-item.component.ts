import { Component, OnInit, Input } from "@angular/core";

import Card from "../../models/Card";
import User from "../../models/User";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.scss"]
})
export class CardItemComponent implements OnInit {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;

  @Input() cardItem: string;

  constructor() {}

  ngOnInit() {}
}
