import { ApplicationConfig, SecurityContext, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { BookState } from '@core/state/book/book.state';
import { environment } from 'src/environments/environment';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideHttpClient(withFetch()),
        provideMarkdown({
            loader: HttpClient,
            sanitize: SecurityContext.NONE,
        }),
        importProvidersFrom(
          NgxsModule.forRoot([BookState], {
            developmentMode: !environment.production,
          })
        ),
    ]
};
