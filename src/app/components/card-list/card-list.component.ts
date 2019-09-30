import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import CardList from "../../models/CardList";
import Card from "../../models/Card";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})
export class CardListComponent implements OnInit {
  @Input() card: CardList;
  @Input() searchCriterion: string;
  @Output() public removeCardList = new EventEmitter<CardList>();

  public onRemoveCardList() {
    this.removeCardList.emit(this.card);
  }

  public onRemoveCardItem(card: Card) {
    const index = this.card.cards.findIndex((item) => item.id === card.id);
    if (index !== -1) {
      this.card.cards.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() { }
}
