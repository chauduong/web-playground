import { UiPage } from './app.po';

describe('ui App', () => {
  let page: UiPage;

  beforeEach(() => {
    page = new UiPage();
  });

  it('should display message saying App Title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('App Title');
  });
});
