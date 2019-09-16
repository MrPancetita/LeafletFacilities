import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown'






import { AppComponent } from './app.component';
import { DoughnutchartdemoComponent } from './components/shared/doughnutchartdemo/doughnutchartdemo.component';
import { DropdownDemoComponent } from './components/shared/dropdown-demo/dropdown-demo.component';
import { MapComponent } from './components/shared/map/map.component';

@NgModule({
    declarations: [
        AppComponent,
        DoughnutchartdemoComponent,
        DropdownDemoComponent,
        MapComponent
        ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule, 
        ChartModule, 
        TooltipModule,
        DropdownModule
        ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
