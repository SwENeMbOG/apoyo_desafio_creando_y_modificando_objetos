function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    // Getters
    this.getNombre = function() {
        return _nombre;
    };

    this.getEdad = function() {
        return _edad;
    };

    this.getRut = function() {
        return _rut;
    };

    this.getDiagnostico = function() {
        return _diagnostico;
    };

    // Setters
    this.setNombre = function(nombre) {
        _nombre = nombre;
    };

    this.setEdad = function(edad) {
        _edad = edad;
    };

    this.setRut = function(rut) {
        _rut = rut;
    };

    this.setDiagnostico = function(diagnostico) {
        _diagnostico = diagnostico;
    };
}
