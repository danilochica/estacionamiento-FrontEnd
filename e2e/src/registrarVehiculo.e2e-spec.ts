import { RegistarPage } from "./registrarVehiculo.po";

describe('Estacionamiento Crear Registro Vehiculo', () => {
    let registrar: RegistarPage;
    const PLACA = 'KEQ99D';
    const TIPOCARRO  = 'Carro';
    const TIPOMOTO  =  'Moto';
    const CILINDRAJE = 150;
    const SE_AGREGO_CON_EXITO_MOTO = 'El vehiculo con placa KEQ99D ingresó al parqueadero';
    

    beforeEach(async () => {
        registrar = new RegistarPage();
        await registrar.navigateTo();
    });


    it('deberia crear Registro Vehiculo MOTO', async () => {
        // Arrange
        await registrar.setPlacaToPlate(PLACA);
        await registrar.clickTipoVehiculo();
        await registrar.setTipoToTipoVehiculoSelect(TIPOMOTO);
        await registrar.setCilindrajeToCilindraje(CILINDRAJE);
        await registrar.esperarQueBotonGuardarAparezca();
        await registrar.clickBtnIngresar();
        await registrar.esperarQueToastAparezca();

        // Act
        const toast = await registrar.getTextFromToast();

        // Assert
        expect(toast).toEqual(SE_AGREGO_CON_EXITO_MOTO);
    });

});
