import { AppPage } from './app.po';

describe('pagina de inicio', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getLogo).not.toBeNull()
  });
});
