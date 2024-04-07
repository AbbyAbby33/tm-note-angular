# Angular專案配置

## 客製化元件的selector前贅字 (custom component selector prefix)

angular.json:

```json
"projects": {
    "project-dress": {
        "prefix": "cpc",
    }
}
```

參考：[Change prefix of component in angular application](https://blogkashif.medium.com/change-prefix-of-component-in-angular-application-34c8d8a86dbf)

## 短路徑 (import short path)

tsconfig.json:

```json
"compilerOptions": {
    "baseUrl": "./",
    "paths": {
        "@pages/*": [
            "src/app/pages/*"
        ],
        "@core/*": [
            "src/app/core/*"
        ],
        "@shared/*": [
            "src/app/shared/*"
        ],
        "moment": [
            "node_modules/moment/min/moment.min.js"
        ]
    }
},
```

**注意：要設置baseUrl，不然會報錯誤：**

Error: src/app/app.component.ts:4:33 - error TS2307: Cannot find module '@layout/header/header.component' or its corresponding type declarations.

參考：[How to short path to file in Angular?](https://stackoverflow.com/questions/59661754/how-to-short-path-to-file-in-angular)
