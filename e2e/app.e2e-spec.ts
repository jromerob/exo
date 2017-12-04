import { AppPage } from './app.po';

describe('pagina de inicio', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Muestra el logo de home', () => {
    page.navigateTo();
    expect(page.getLogo).not.toBeNull();
  });
});
