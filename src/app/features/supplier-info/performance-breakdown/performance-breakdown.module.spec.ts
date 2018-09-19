import { PerformanceBreakdownModule } from './performance-breakdown.module';

describe('PerformanceBreakdownModule', () => {
  let performanceBreakdownModule: PerformanceBreakdownModule;

  beforeEach(() => {
    performanceBreakdownModule = new PerformanceBreakdownModule();
  });

  it('should create an instance', () => {
    expect(performanceBreakdownModule).toBeTruthy();
  });
});
