import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatIconModule, MatInputModule, MatIconRegistry} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component'
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: "**",
    redirectTo:'main',

  },
  {
    path: "main",
    component:MainComponent,
  }
];
@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      ListComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,

      //Angular Material Modules
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,

      //Angular Flex
      FlexLayoutModule,

      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent,

   ]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/round-search-24px.svg'));

  }
}
