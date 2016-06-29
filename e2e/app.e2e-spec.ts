import { LuisaPage } from './app.po';

describe('luisa App', function() {
  let page: LuisaPage;

  beforeEach(() => {
    page = new LuisaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
