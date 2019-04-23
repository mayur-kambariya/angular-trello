import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    todoLists = [
        {
            id: 'todoList',
            name: 'To Do',
            cardList: [
                'Learn New thing',
                'SQL Database Issue',
                'Create payment invoice',
            ]
        },
        {
            id: 'progressList',
            name: 'Progress',
            cardList: [
                'Todo App for testing purpose',
                'Angular 7 new feature'
            ]
        },
        {
            id: 'doneList',
            name: 'Done',
            cardList: [
                'Client communication',
                'Project configuration for Python',
                'Angular material design',
                'Bootstrap and flutter different'
            ]
        }
    ]

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
}
