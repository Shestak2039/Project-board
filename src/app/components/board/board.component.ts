import { Component, OnInit, Input } from "@angular/core";

import CardList from '../../models/CardList';
import Card from '../../models/Card';

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  @Input() public searchCriterion;
  cards: CardList[] = [
    {
      id: '1',
      name: 'Backlog',
      isDoneSection: false,
      cards: [
        {
          id: '1',
          name: 'Title1',
          description: 'Do title1',
          dueDate: new Date('September 30 2019 12:30'),
          assignee: {
            id: '1',
            firstName: 'Uladzislau',
            lastName: 'Shastakou',
          }
        },
        {
          id: '2',
          name: 'Title2',
          description: 'Do title2',
          dueDate: new Date('September 26 2019 12:30'),
          assignee: {
            id: '2',
            firstName: 'Ulad',
            lastName: 'Shastakou',
          }
        },
        {
          id: '3',
          name: 'Title3',
          description: 'Do title3',
          dueDate: new Date('January 31 2000 12:30'),
          assignee: {
            id: '1',
            firstName: 'Ulad',
            lastName: 'Shastakou',
          }
        }
      ],
    },
    {
      id: '2',
      name: 'In progress',
      isDoneSection: false,
      cards: [
        {
          id: '4',
          name: 'Title4',
          description: 'Do title4',
          dueDate: new Date('September 26 2019 12:30'),
          assignee: {
            id: '3',
            firstName: 'Vlad',
            lastName: 'Shastakou',
          }
        },
        {
          id: '5',
          name: 'Title5',
          description: 'Do title5',
          dueDate: new Date('January 31 2000 12:30'),
          assignee: {
            id: '4',
            firstName: 'Vlad',
            lastName: 'Shestakov',
          }
        },
        {
          id: '6',
          name: 'Title6',
          description: 'Do title6',
          dueDate: new Date('September 30 2019 12:30'),
          assignee: {
            id: '4',
            firstName: 'Vlad',
            lastName: 'Shestakov',
          }
        }
      ],
    },
    {
      id: '3',
      name: 'Done',
      isDoneSection: true,
      cards: [
        {
          id: '7',
          name: 'Title7',
          description: 'Do title7',
          dueDate: new Date('September 30 2019 12:30'),
          assignee: {
            id: '4',
            firstName: 'Vlad',
            lastName: 'Shestakov',
          }
        },
        {
          id: '8',
          name: 'Title5',
          description: 'Do title5',
          dueDate: new Date('January 31 2000 12:30'),
          assignee: {
            id: '4',
            firstName: 'Vlad',
            lastName: 'Shestakov',
          }
        },
        {
          id: '9',
          name: 'Title9',
          description: 'Do title9',
          dueDate: new Date('September 26 2019 12:30'),
          assignee: {
            id: '4',
            firstName: 'Vlad',
            lastName: 'Shestakov',
          }
        }
      ],
    },
  ];

  public onRemoveCardList(card: Card) {
    const index = this.cards.findIndex((item) => item.id === card.id);
    this.cards.splice(index, 1);
  }

  constructor() { }

  ngOnInit() { }
}
