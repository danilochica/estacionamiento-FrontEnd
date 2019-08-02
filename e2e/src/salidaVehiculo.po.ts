import { browser, ProtractorExpectedConditions, ExpectedConditions,$, ElementFinder, element, by } from 'protractor';

export class SalidaPage {

    navigateTo(urlSalidaVehiculo = 'registrarSalida'): Promise<any> {
        return browser.get(`${browser.baseUrl}${urlSalidaVehiculo}`) as Promise<any>;
    }

    until: ProtractorExpectedConditions;
    constructor() {
        this.until = ExpectedConditions;
    }

    getBtnSalida(): ElementFinder {
        return $('#botonSalida');
    }

    getTblRegistros(): ElementFinder{
        return $('#registros');
    }

    getBtnActualizar(): ElementFinder {
        return $('#botonActualizar');
    }

    getMensajeToast(): ElementFinder {
        return element(by.className('toast-message'));
    }

    async clickBtnSalida(): Promise<void> {
        await this.getBtnSalida().click();
    }

    async clickBtnActualizar(): Promise<void> {
        await this.getBtnActualizar().click();
    }

    async getTextFromToast(): Promise<string> {
        return await this.getMensajeToast().getText();
    }

    async esperarQueToastAparezca(): Promise<void> {
        return await this.esperarElementoAparezca(this.getMensajeToast());
    }

    async esperarElementoAparezca(element: ElementFinder): Promise<void> {
        const id = await element.getId();
        return await browser.wait(
            this.until.presenceOf(element),
            5000,
            `El elemento ${id} esta tardando mucho en aparecer en el DOM`
        );
    }



}

