function Consultorio(nombre) {
    let _nombre = nombre;
    let _pacientes = [];

    Object.defineProperty(this, 'nombre', {
        get: function() {
            return _nombre;
        },
        set: function(value) {
            _nombre = value;
        }
    });

    Object.defineProperty(this, 'pacientes', {
        get: function() {
            return _pacientes;
        },
        set: function(value) {
            _pacientes = value;
        }
    });
}

Consultorio.prototype.agregarPaciente = function(paciente) {
    this.pacientes.push(paciente);
};

Consultorio.prototype.mostrarPacientes = function() {
    this.pacientes.forEach(paciente => {
        console.log(`Nombre: ${paciente.nombre}, Edad: ${paciente.edad}, RUT: ${paciente.rut}, Diagnóstico: ${paciente.diagnostico}`);
    });
};

Consultorio.prototype.buscarPacientePorNombre = function(nombre) {
    const paciente = this.pacientes.find(paciente => paciente.nombre === nombre);
    if (paciente) {
        console.log(`Nombre: ${paciente.nombre}, Edad: ${paciente.edad}, RUT: ${paciente.rut}, Diagnóstico: ${paciente.diagnostico}`);
    } else {
        console.log(`Paciente con nombre ${nombre} no encontrado.`);
    }
};
