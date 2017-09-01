import { ChangeDetectionPage } from './app.po';

describe('change-detection App', () => {
  let page: ChangeDetectionPage;

  beforeEach(() => {
    page = new ChangeDetectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
