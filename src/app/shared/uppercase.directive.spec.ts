import { UppercaseDirective } from './uppercase.directive';
import { ElementRef } from '@angular/core';

describe('UppercaseDirective', () => {
  let el;
  let directive;

  beforeEach(() => {
    el = new ElementRef({ style : {}});
    directive = new UppercaseDirective(el);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should modify style to uppercase', () => {
    expect(el.nativeElement.style.textTransform).toBe('uppercase');
  });
});
