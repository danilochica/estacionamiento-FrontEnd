import { ProtractorExpectedConditions, ExpectedConditions, ElementFinder, $, browser, element, by } from 'protractor';

export class RegistarPage {

    navigateTo(urlNuevoRegistro = 'parqueadero'): Promise<any> {
        return browser.get(`${browser.baseUrl}${urlNuevoRegistro}`) as Promise<any>;
    }

    until: ProtractorExpectedConditions;
    constructor() {
        this.until = ExpectedConditions;
    }

    getTipoDeVehiculoSelect(): ElementFinder {
        return $('#tipoVehiculo');
    }

    getPlacaInput(): ElementFinder {
        return $('#placa');
    }

    getCilindrajeInput(): ElementFinder {
        return $('#cilindraje');
    }

    getRegistarButton(): ElementFinder {
        return $('#ingresar');
    }

    getMensajeToast(): ElementFinder {
        return element(by.className('toast-message'));
    }

    async setTipoToTipoVehiculoSelect(tipo: string): Promise<void> {
        await browser.sleep(500);
        element( by.css( '#tipoVehiculo option[value="' + tipo + '"]' ) ).click();
     }
 
     async setPlacaToPlate(placa: String): Promise<void> {
         return await this.getPlacaInput().sendKeys(placa);
     }
 
     async setCilindrajeToCilindraje(cilindraje: number): Promise<void> {
         return await this.getCilindrajeInput().sendKeys(cilindraje);
     }
 
     async clickTipoVehiculo(): Promise<void> {
         await this.getTipoDeVehiculoSelect().click();
     }
 
      async clickBtnIngresar(): Promise<void> {
         await this.getRegistarButton().click();
     }
 
     async getTextFromToast(): Promise<string> {
         return await this.getMensajeToast().getText();
     }
 
     async esperarQueBotonGuardarAparezca(): Promise<void> {
         return await this.esperarElementoAparezca(this.getRegistarButton());
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

