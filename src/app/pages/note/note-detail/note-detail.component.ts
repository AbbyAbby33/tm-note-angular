import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownModule, MarkdownComponent, provideMarkdown } from 'ngx-markdown';

@Component({
    selector: 'app-note-detail',
    standalone: true,
    imports: [MarkdownModule, MarkdownComponent, RouterLink],
    providers: [provideMarkdown()],
    templateUrl: './note-detail.component.html',
    styleUrl: './note-detail.component.scss'
})
export class NoteDetailComponent {
    noteTitle = 'Angular專案配置';

    onLoad(e: any) {
    }
}
