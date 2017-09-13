import { TextSummaryPipe } from './text-summary.pipe';

describe('TextSummaryPipe', () => {
  let sut: TextSummaryPipe;

  beforeEach(() => {
    sut = new TextSummaryPipe();
  });

  it('should return an empty string if input is null', () => {
    expect(sut.transform(null)).toBe('');
  });

  it('should return null if input is undefined', () => {
    expect(sut.transform(undefined)).toBe('');
  });

  it('should return empty string if input is an empty string', () => {
    expect(sut.transform('')).toBe('');
  });

  it('should return the same string if the length of input is less than the limit', () => {
    expect(sut.transform('12345', 5)).toBe('12345');
  });

  it('should summarize the input if it is longer than the limit', () => {
    expect(sut.transform('12345678', 5)).toBe('12345...');
  });

  it('should assume 10 as the limit if not given', () => {
    expect(sut.transform('12345678901')).toBe('1234567890...');
  });
});
