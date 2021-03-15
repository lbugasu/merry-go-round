import { TestBed } from '@angular/core/testing';
import { ProductSubService } from './product-sub.service';

describe('ProductSubService', () => {
  let service: ProductSubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
