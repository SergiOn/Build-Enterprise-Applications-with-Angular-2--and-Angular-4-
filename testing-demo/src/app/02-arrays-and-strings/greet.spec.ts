import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    expect(greet('Serhii')).toBe('Welcome Serhii');
    expect(greet('Serhii')).toContain('Serhii');
  });
});
