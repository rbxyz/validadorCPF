function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); //remove letras
    
    // verifica 11 dig
    if (cpf.length !== 11) {
      return false;
    }
    
    //nao deixa ficar numeros iguais tipo 1111111111111111
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
    
  
    let soma = 0;
      /*validaaoo do primeiro digito verificador*/
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador = resto === 10 || resto === 11 ? 0 : resto;
    if (digitoVerificador !== parseInt(cpf.charAt(9))) {
      return false;
    }
    
    // validaaoo do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    digitoVerificador = resto === 10 || resto === 11 ? 0 : resto;
    if (digitoVerificador !== parseInt(cpf.charAt(10))) {
      return false;
    }
    
    return true;
  }
  
  // test
  const cpf = '123.456.789-00';
  if (validarCPF(cpf)) {
    console.log('CPF válido.');
  } else {
    console.log('CPF inválido.');
  }
  