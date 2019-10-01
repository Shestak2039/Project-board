import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import Card from "../../models/Card";
import User from "../../models/User";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.scss"]
})
export class CardItemComponent implements OnInit {
  @Input() public cardItem: Card;
  @Input() public isDone: boolean;
  @Output() public removeCardItem = new EventEmitter<Card>();

  public expand = false;

  public onExpand(): void {
    this.expand ? this.expand = false : this.expand = true;
  }

  public onRemoveCardItem(): void {
    this.removeCardItem.emit(this.cardItem);
  }

  constructor() { }

  ngOnInit() { }
}
