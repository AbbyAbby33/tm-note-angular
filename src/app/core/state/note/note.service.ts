import { Injectable } from '@angular/core';
import { NoteList } from '@core/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  readonly _angularNoteList: NoteList[] = [
    {
      subTitle: '基礎',
      list: [
        {
          id: '20240406001', title: 'Angular專案配置', category: 'principle',
          fileName: '2023111701-angular-project-setting', createTime: '2023/11/17', updateTime: '2024/04/07'
        },
        // { id: '35325', title: 'Route', category: 'principle' },
        // { id: '35325', title: 'Guard', category: 'principle' },
        // { id: '35325', title: 'Standalone Project', category: 'principle' }
      ]
    },
    {
      subTitle: '狀態管理：Ngxs',
      list: [
        {
          id: '35325', title: 'Ngxs簡介', category: 'principle',
          fileName: '2023030601-ngxmarkdown', createTime: '2023/11/17', updateTime: '2024/04/07'
        },
      ]
    },
    {
      subTitle: '套件',
      list: [
        {
          id: '20240406002', title: 'Angular套件：ngx-markdown', category: 'principle',
          fileName: '2023030601-ngxmarkdown', createTime: '2023/03/06', updateTime: '2024/04/07'
        },
      ]
    }
  ];

  readonly _nodejsNoteList: NoteList[] = [];
  readonly _csharpNoteList: NoteList[] = [];

  constructor() { }

  // 如果以後有做後端，這裡就是打api
  getNoteList(key: string) {
    let list: NoteList[] = [];
    switch (key) {
      case 'angular':
        list = this._angularNoteList;
        break;
      case 'nodejs':
        list = this._nodejsNoteList;
        break;
      case 'csharp':
        list = this._csharpNoteList;
        break;
    }
    return list;
  }
}
