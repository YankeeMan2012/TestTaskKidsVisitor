import { KidsPage } from './app.po';

describe('kids App', () => {
  let page: KidsPage;

  beforeEach(() => {
    page = new KidsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
