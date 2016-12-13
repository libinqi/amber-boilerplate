/* tslint:disable:no-unused-variable */

import { inject, TestBed, async } from '@angular/core/testing';
import { SafePipe } from './safe.pipe';

describe('Pipe: Safe', () => {
  it('create an instance', inject([SafePipe], (pipe: SafePipe) => {
    expect(pipe).toBeTruthy();
  }));
});
