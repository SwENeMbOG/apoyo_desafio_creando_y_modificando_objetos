function Paciente(nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    Object.defineProperty(this, 'nombre', {
        get: function () {
            return _nombre;
        },
        set: function (value) {
            _nombre = value;
        }
    });

    Object.defineProperty(this, 'edad', {
        get: function () {
            return _edad;
        },
        set: function (value) {
            _edad = value;
        }
    });

    Object.defineProperty(this, 'rut', {
        get: function () {
            return _rut;
        },
        set: function (value) {
            _rut = value;
        }
    });

    Object.defineProperty(this, 'diagnostico', {
        get: function () {
            return _diagnostico;
        },
        set: function (value) {
            _diagnostico = value;
        }
    });
}
