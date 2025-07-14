  export const steps = [
    { key: 'name', label: 'Qual o seu nome completo?', type: 'text' },
    { key: 'cpf', label: 'Informe seu CPF:', type: 'cpf' },
    { key: 'birthDate', label: 'Qual sua data de nascimento?', type: 'date' },
    { key: 'email', label: 'Qual seu e-mail?', type: 'email' },
    { key: 'phone', label: 'Qual seu número de celular com DDD?', type: 'phone' },
    { key: 'cep', label: 'Qual seu CEP?', type: 'cep' },
    { key: 'houseNumber', label: 'Qual o número da sua casa?', type: 'text' },
    { key: 'documentPhoto', label: 'Agora, envie uma foto do seu documento (simulado):', type: 'file', image: require('../../assets/document.jpg')},
    { key: 'selfie', label: 'Agora, envie uma selfie com o documento (simulado):', type: 'file', image: require('../../assets/selfie.jpg') },
    { key: 'review', label: 'Confira seus dados abaixo antes de finalizar.', type: 'review' },
  ];
