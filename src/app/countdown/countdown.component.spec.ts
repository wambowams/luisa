/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CountdownComponent } from './countdown.component';

describe('Component: Countdown', () => {
  it('should create an instance', () => {
    let component = new CountdownComponent();
    expect(component).toBeTruthy();
  });
});
