# Angular套件：ngx-markdown

- [官網](https://jfcere.github.io/ngx-markdown/get-started)
- [npm官網：ngx-markdown](https://www.npmjs.com/package/ngx-markdown)

## 一、安裝及設定

### 安裝及設定

1. 安裝套件

```json
npm install ngx-markdown marked --save
npm install @types/marked --save-dev
```

2. angular.json:

```json
"projects": {
    "tm-note": {
        "architect": {
           "build": {
                "scripts": [
                    "node_modules/marked/marked.min.js",
                ]
            }
        }
    }
}
```

### 在Module型專案註冊套件

**注意除了MarkdownModule，如果是要用src引用md檔案還需要HttpClientModule,HttpClient, SecurityContext**

app.module.ts:

```typescript
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { SecurityContext } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
```

### 在standalone專案中註冊套件

參考：[npm官網：ngx-markdown](https://www.npmjs.com/package/ngx-markdown)

app.config.ts:

```typescript
import { ApplicationConfig, SecurityContext } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        provideMarkdown({
            loader: HttpClient,
            sanitize: SecurityContext.NONE,
        })
    ]
};
```

## 二、使用markdown元件

### 載入同一專案內md檔

參考：[How to dynamically render a markdown file in Angular?](https://stackoverflow.com/questions/56435358/how-to-dynamically-render-a-markdown-file-in-angular)

ts檔:

```typescript
import { MarkdownModule, MarkdownComponent, provideMarkdown } from 'ngx-markdown';
@Component({
    selector: 'app-note-detail',
    standalone: true,
    imports: [MarkdownModule, MarkdownComponent],
    providers: [provideMarkdown()],
    templateUrl: './note-detail.component.html',
    styleUrl: './note-detail.component.scss'
})
export class NoteDetailComponent {}

```

html檔案:

```html
<markdown (load)="onLoad($event)" [src]="'assets/notes/2023030601-ngxmarkdown.md'">
</markdown>
```

## 三、語法高亮(Syntax highlight)

1. 安裝

```json
npm install prismjs --save
```

2. angular.json:

```json
"projects": {
    "tm-note": {
        "architect": {
           "build": {
                "styles": [
                    "styles.css",
                    "node_modules/prismjs/themes/prism-okaidia.css",
                    "node_modules/prism-themes/themes/prism-a11y-dark.css"
                ],
                "scripts": [
                    "node_modules/prismjs/prism.js",
                    "node_modules/prismjs/components/prism-css.min.js",
                    "node_modules/prismjs/components/prism-javascript.min.js",
                    "node_modules/prismjs/components/prism-typescript.min.js"
                ]
            }
        }
    }
}
```
