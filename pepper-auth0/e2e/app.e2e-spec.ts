import { PepperAuth0Page } from './app.po';

describe('pepper-auth0 App', () => {
  let page: PepperAuth0Page;

  beforeEach(() => {
    page = new PepperAuth0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
