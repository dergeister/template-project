export default {
  errorHandler: {
    unhandled: {
      title: 'Ops! Ocorreu um erro',
      message: 'Entre em contato com o suporte caso o erro persista.'
    },
    noConnection: {
      title: 'Sem internet',
      message: 'Verifique sua conexão e tente novamente.'
    },
    fetchUserByEmailError: {
      title: 'Usuário não encontrado',
      message: 'O e-mail informado não consta em nosso sistema, por favor informe um novo e-mail.'
    },
    invalidLocale: {
      title: 'Idioma inválido',
      message: 'O sistema não suporta o idioma informado.'
    },
    invalidTheme: {
      title: 'Tema inválido',
      message: 'O sistema não suporta o tema informado.'
    },
    subscriptionError: {
      title: 'Falha realizar assinatura',
      message: 'Preencha os dados e tente novamente'
    }
  },
  buttons: {
    signIn: 'Criar conta',
    subscribe: 'Assinar',
    continue: 'Avançar',
    makePayment: 'Realizar pagamento'
  },
  homeHeader: {
    title: 'Planos',
    description: 'Escolha o melhor plano para você'
  },
  subscriptions: {
    professional: {
      name: 'Profissional',
      description: 'Perfeito para quem busca sucesso no consultório e carreira.'
    },
    student: {
      name: 'Estudante',
      description: 'Prepare-se para o mercado de trabalho desde a graduação e saia na frente.'
    }
  },
  homeEmailModal: {
    header: 'Informe seu E-mail'
  },
  user: {
    email: 'E-mail'
  },
  placeholder: {
    email: "seu{'@'}email.com",
    creditCard: {
      number: '0000 0000 0000 0000',
      name: 'Nome impresso no cartão',
      cvv: '000',
      expirationDate: '00/00'
    }
  },
  formValidation: {
    required: 'Este campo é obrigatório',
    email: 'Informe um e-mail válido',
    creditCard: {
      number: 'Informe um número de cartão válido',
      cvv: 'Informe o CVV do cartão',
      expirationDate: 'Informe a data de expiração'
    }
  },
  plans: {
    monthly: {
      name: 'Plano Mensal'
    },
    quarterly: {
      name: 'Plano Trimestral'
    },
    semester: {
      name: 'Plano Semestral'
    },
    yearly: {
      name: 'Plano Anual'
    }
  },
  creditCard: {
    title: 'Cartão de Crédito',
    number: 'Número do cartão',
    name: 'Nome',
    cvv: 'CVV',
    expirationDate: 'Data de expiração'
  },
  thankyou: {
    title: 'Obrigado por assinar',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil illum accusantium dignissimos ad, eligendi minima dolor totam sit perspiciatis.'
  }
}
