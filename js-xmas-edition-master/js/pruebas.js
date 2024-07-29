function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre('Fabricio') === '',
    'validar nombre fallo con un nombre valido'
  )
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'No tiene una ciudad elegida',
        'validar ciudad no valido una ciudad asignada',
    );
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Validar ciudad no funciono con un nombre valido'
    )
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Descripcion no puede estar vacio",
        "La funcion validar regalo no valido que el campo no este vacio"
    );
    console.assert(
        validarDescripcionRegalo('Regalo') === "",
        "La funcion validar regalo no funciono con una descripcion correcta"
    );
    console.assert(
        validarDescripcionRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Su descripcion es muy larga',
            "La funcion validar descripcion no valido que la entrada sea muy larga"
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();