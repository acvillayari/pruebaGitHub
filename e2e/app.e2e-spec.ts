import { RrhhPage } from './app.po';

describe('rrhh App', () => {
  let page: RrhhPage;

  beforeEach(() => {
    page = new RrhhPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
