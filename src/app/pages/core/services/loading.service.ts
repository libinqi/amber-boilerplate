import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
    private isLoading: boolean = false;
    private message: string = '';

    constructor() {
    }

    start(message: string) {
        this.message = message || '正在提交您的请求，请稍后...';
        this.isLoading = true;
    }

    end() {
        this.message = '';
        this.isLoading = false;
    }
}