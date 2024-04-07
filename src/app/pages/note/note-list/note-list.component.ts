import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-note-list',
    standalone: true,
    imports: [RouterLink],
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
                { id: '20240406001', title: 'Angular專案配置', category: 'principle' },
                { id: '20240406001', title: 'Route', category: 'principle' },
                { id: '20240406002', title: 'Guard', category: 'principle' },
                { id: '20240406003', title: 'Standalone Project', category: 'principle' }
            ]
        },
        {
            subTitle: '狀態管理：Ngxs',
            list: [
                { id: '20240406004', title: 'Ngxs簡介', category: 'principle' },]
        }
    ];
}
