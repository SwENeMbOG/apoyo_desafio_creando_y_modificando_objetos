function Consultorio(nombre) {
    this.nombre = nombre;
    this.pacientes = [];
}

Consultorio.prototype.agregarPaciente = function(paciente) {
    this.pacientes.push(paciente);
};

Consultorio.prototype.mostrarPacientes = function() {
    this.pacientes.forEach(paciente => {
        console.log(`Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, RUT: ${paciente.getRut()}, Diagnóstico: ${paciente.getDiagnostico()}`);
    });
};

Consultorio.prototype.buscarPacientePorNombre = function(nombre) {
    const paciente = this.pacientes.find(paciente => paciente.getNombre() === nombre);
    if (paciente) {
        console.log(`Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, RUT: ${paciente.getRut()}, Diagnóstico: ${paciente.getDiagnostico()}`);
    } else {
        console.log(`Paciente con nombre ${nombre} no encontrado.`);
    }
};
