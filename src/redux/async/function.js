const URL = "http://visormapa.gear.host/services/DatosMapas/";
export const fetchGetDatos = async () => {
    try {
        let response = await fetch(`http://visormapa.gear.host/services/DatosMapas/GetDatosMovil`);
        let data = await response.json();
        return data;
    } catch (ex) {
       alert(ex);
    }
}