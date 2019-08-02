import { SalidaPage } from "./salidaVehiculo.po";

describe('Estacionamiento salida de vehiculo', () => {
    let salida: SalidaPage;
    

    beforeEach(async () => {
        salida = new SalidaPage();
        await salida.navigateTo();
    });


    it('deberia dar salida Vehiculo', async () => {
        debugger;
        
        await salida.clickBtnActualizar();
        await salida.getTblRegistros();
        await salida.clickBtnSalida();
        await salida.esperarQueToastAparezca();

        // Act
        const toast = await salida.getTextFromToast();

        // Assert
        expect(toast).toBeTruthy();
    });

});