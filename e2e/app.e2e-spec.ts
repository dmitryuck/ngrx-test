import { ApplloPage } from './app.po';

describe('appllo App', () => {
  let page: ApplloPage;

  beforeEach(() => {
    page = new ApplloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
