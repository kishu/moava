import { MoavaPage } from './app.po';

describe('moava App', function() {
  let page: MoavaPage;

  beforeEach(() => {
    page = new MoavaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
