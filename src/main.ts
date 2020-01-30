import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './polyfills';

enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
