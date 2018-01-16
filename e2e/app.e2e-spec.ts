import { NgFirstPage } from './app.po';

describe('ng-first App', () => {
  let page: NgFirstPage;

  beforeEach(() => {
    page = new NgFirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
