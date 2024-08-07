// Crear pacientes
const paciente1 = new Paciente("Juan Perez", 30, "12345678-9", "Hipertensión");
const paciente2 = new Paciente("Ana Gomez", 25, "98765432-1", "Diabetes");
const paciente3 = new Paciente("Luis Ramirez", 40, "12398765-4", "Asma");

// Crear consultorio
const consultorio = new Consultorio("Consultorio Cartagena");

// Agregar pacientes al consultorio
consultorio.agregarPaciente(paciente1);
consultorio.agregarPaciente(paciente2);
consultorio.agregarPaciente(paciente3);

// Mostrar todos los pacientes
console.log("Todos los pacientes:");
consultorio.mostrarPacientes();

// Buscar un paciente por nombre
console.log("Buscar paciente por nombre:");
consultorio.buscarPacientePorNombre("Ana Gomez");
consultorio.buscarPacientePorNombre("Carlos Lopez");  // Este paciente no existe
