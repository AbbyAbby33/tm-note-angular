import { Component } from '@angular/core';

@Component({
    selector: 'app-note-list',
    standalone: true,
    imports: [],
    templateUrl: './note-list.component.html',
    styleUrl: './note-list.component.scss'
})
export class NoteListComponent {
    menuList = [
        {
            name: '前端',
            list: ['Angular']
        },
        {
            name: '後端',
            list: ['Node.js', 'C#']
        }
    ];

    bookTitle = 'Angular';

    bookMenuList = [
        {
            subTitle: '基礎',
            list: [
                { title: 'Route', category: 'principle' },
                { title: 'Guard', category: 'principle' },
                { title: 'Standalone Project', category: 'principle' }
            ]
        },
        {
            subTitle: '狀態管理：Ngxs',
            list: [
                { title: 'Ngxs簡介', category: 'principle' },]
        }
    ];
}
