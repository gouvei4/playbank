  export const formatValue = (key: string, value: string) => {
    switch (key) {
      case 'cpf':
        return value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      case 'birthDate':
        return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 10);
      case 'phone':
        return value.replace(/\D/g, '').replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{1,4})$/, '$1-$2');
      case 'cep':
        return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
      default:
        return value;
    }
  };

  export const isValidCPF = (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    // if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (sum % 11);
    if (rev >= 10) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;
    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (sum % 11);
    if (rev >= 10) rev = 0;
    return rev === parseInt(cpf.charAt(10));
  };