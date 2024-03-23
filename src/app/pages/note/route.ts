import { Route } from "@angular/router";
import { NoteDetailComponent } from "@pages/note/note-detail/note-detail.component";
import { NoteListComponent } from "@pages/note/note-list/note-list.component";

export const NOTE_ROUTES: Route[] = [
    { path: '', component: NoteListComponent },
    { path: 'detail', component: NoteDetailComponent },
    { path: 'list', component: NoteListComponent },
];