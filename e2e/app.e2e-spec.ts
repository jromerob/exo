import { ExoPage } from './app.po';

describe('exo App', () => {
  let page: ExoPage;

  beforeEach(() => {
    page = new ExoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
