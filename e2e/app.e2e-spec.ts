import { SuperPage } from './app.po';

describe('super App', () => {
  let page: SuperPage;

  beforeEach(() => {
    page = new SuperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
