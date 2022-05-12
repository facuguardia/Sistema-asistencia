//Este sistema permitira saber la cantidad de presentes y ausentes de la cantidad de alumnos que elijas. A tener en cuenta, si el alumno tiene mas de 18 ausentes quedara reprobado

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];
  
for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i +1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
              Presente: <b>${alumnosTotales[alumno][1]}</b><br>
              Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>
            
    `;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b>REPROBADO POR INASISTENCIAS</b>"
    } else {
        resultado+= "<br><br>"
    }

    document.write(resultado);
}
