
import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo(page?: string) {
    if (!page) { page = '/'; }
    return browser.get(page);
  }

  getLogo() {
    return element(by.css('img.homeLogo'));
  }

  getConsultantsCard() {
    return element(by.css('mat-card.consultant'));
  }
  getNewCommentButton() {
    return element(by.id('addCommentButton'));
  }

  getNewCommentForm() {
    browser.debugger();
    console.log(element(by.id('addComment')));
    return element(by.id('addComment'));
  }
}
