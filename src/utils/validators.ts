import { isValidCPF } from '../contexts/Formatters';

export function validateInput(
  value: string,
  type: string,
  setErrorMessage: (msg: string) => void,
  addBotMessage: (msg: string) => void
): boolean {
  switch (type) {
    case 'cpf':
      if (!isValidCPF(value)) {
        const msg = 'CPF incorreto, por favor, informe o correto.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }
      break;

    case 'birthDate':
      if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        const msg = 'Data inválida. Use o formato DD/MM/AAAA.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }

      const [dayStr, monthStr, yearStr] = value.split('/');
      const day = parseInt(dayStr, 10);
      const month = parseInt(monthStr, 10) - 1;
      const year = parseInt(yearStr, 10);

      const dateObj = new Date(year, month, day);

      if (
        dateObj.getFullYear() !== year ||
        dateObj.getMonth() !== month ||
        dateObj.getDate() !== day
      ) {
        const msg = 'Essa data não existe! Por favor, informe uma data válida.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }

      if (dateObj > new Date()) {
        const msg = 'Data inválida. A data não pode ser no futuro.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }
      break;

    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        const msg = 'Email inválido. Por favor, insira um email válido.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }
      break;

    case 'phone':
      if (value.replace(/\D/g, '').length < 10) {
        const msg = 'Telefone inválido. Insira DDD + número.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }
      break;

    case 'cep':
      if (value.replace(/\D/g, '').length !== 8) {
        const msg = 'CEP inválido. Deve conter 8 dígitos.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }
      break;

    case 'houseNumber':
      if (!value.trim() || isNaN(Number(value))) {
        const msg = 'Número da casa inválido. Informe um número válido.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }
      break;

    default:
      if (!value.trim()) {
        const msg = 'Campo obrigatório.';
        setErrorMessage(msg);
        addBotMessage(msg);
        return false;
      }
  }

  setErrorMessage('');
  return true;
}
