import { AppPage } from './app.po';
import { browser } from 'protractor';
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

describe('pagina de consultores', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Muestra consultores', () => {
    page.navigateTo('/consultores');
    expect(page.getConsultantsCard).not.toBeNull();
  });
});

describe('pagina detalle de consultor con ID=1', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Visualiza consultor 1', () => {
    page.navigateTo('/consultor/1');
    expect(page.getConsultantsCard).not.toBeNull();
  });

  it('Muestra el formulario de añadir comentario en el click del botón', () => {
    page.navigateTo('/consultor/1');
    const button = page.getNewCommentButton();
    button.click().then(() => {
      expect(page.getNewCommentForm).not.toBeNull();
    });

  });

});
