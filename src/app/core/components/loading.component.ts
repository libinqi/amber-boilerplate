import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
    selector: 'am-loading',
    styles: [require('./loading.css')],
    template: `
    <div class="loading-modal" *ngIf="loading.isLoading">
        <div class="loading">
            <img src="/assets/images/loading.gif" alt=""/><span>{{loading.message}}</span>
        </div>
    </div>`
})

export class LoadingComponent {
    constructor(private loading: LoadingService) {
    }
}
