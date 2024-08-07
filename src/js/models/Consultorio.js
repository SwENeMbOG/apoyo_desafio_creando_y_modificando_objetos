function Consultorio(nombre) {
    let _nombre = nombre;
    let _pacientes = [];

    this.getNombre = function () {
        return _nombre;
    };

    this.setNombre = function (value) {
        _nombre = value;
    };

    this.getPacientes = function () {
        return _pacientes;
    };

    this.setPacientes = function (value) {
        _pacientes = value;
    };
}

Consultorio.prototype.agregarPaciente = function (paciente) {
    this.getPacientes().push(paciente);
};

Consultorio.prototype.mostrarPacientes = function () {
    this.getPacientes().forEach(paciente => {
        console.log(`Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, RUT: ${paciente.getRut()}, Diagnóstico: ${paciente.getDiagnostico()}`);
    });
};

Consultorio.prototype.buscarPacientePorNombre = function (nombre) {
    const paciente = this.getPacientes().find(paciente => paciente.getNombre() === nombre);
    if (paciente) {
        console.log(`Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, RUT: ${paciente.getRut()}, Diagnóstico: ${paciente.getDiagnostico()}`);
    } else {
        console.log(`Paciente con nombre ${nombre} no encontrado.`);
    }
};
