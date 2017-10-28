import { AppYoutubePage } from './app.po';

describe('app-youtube App', () => {
  let page: AppYoutubePage;

  beforeEach(() => {
    page = new AppYoutubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
