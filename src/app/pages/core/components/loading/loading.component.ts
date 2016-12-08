import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'loading',
    styles: [require('./loading.css')],
    template: `
    <div class="loading-modal">
        <div class="loading" *ngIf="loading.isLoading">
            <img src="/assets/images/loading.gif" alt=""/><span>{{loading.message}}</span>
        </div>
    </div>`
})

export class Loading {
    constructor(private loading: LoadingService) {
    }
}
