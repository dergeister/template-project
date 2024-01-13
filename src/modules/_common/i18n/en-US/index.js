export default {
  errorHandler: {
    unhandled: {
      title: 'An error occurred',
      message: 'Contact our support in case the error persists.'
    },
    noConnection: {
      title: 'No internet connection',
      message: 'Check your connection and try again.'
    },
    fetchUserByEmailError: {
      title: 'User not found',
      message: 'The provided e-mail is not in our system, please inform a different e-mail.'
    },
    invalidLocale: {
      title: 'Invalid language',
      message: 'The system does not support the provided language.'
    },
    invalidTheme: {
      title: 'Invalid theme',
      message: 'The system does not support the provided theme.'
    },
    subscriptionError: {
      title: 'Subscription Failed',
      message: 'Fill in the fields and try again.'
    }
  },
  buttons: {
    signIn: 'Create account',
    subscribe: 'Subscribe',
    continue: 'Next',
    makePayment: 'Complete payment'
  },
  homeHeader: {
    title: 'Plans',
    description: 'Choose the best plan for you'
  },
  subscriptions: {
    professional: {
      name: 'Professional',
      description: 'Perfect for who is looking for success in their clinic and carrer.'
    },
    student: {
      name: 'Student',
      description: 'Get ready for your future job starting from graduation and get a head start.'
    }
  },
  homeEmailModal: {
    header: 'Provide your E-mail'
  },
  user: {
    email: 'E-mail'
  },
  placeholder: {
    email: "your{'@'}email.com",
    creditCard: {
      number: '0000 0000 0000 0000',
      name: 'Name printed on the credit card',
      cvv: '000',
      expirationDate: '00/00'
    }
  },
  formValidation: {
    required: 'This field is required',
    email: 'Inform a valid e-mail',
    creditCard: {
      number: 'Inform a valid credit card number',
      cvv: 'Inform the CVV',
      expirationDate: 'Inform the expiration Date'
    }
  },
  plans: {
    monthly: {
      name: 'Monthly Plan'
    },
    quarterly: {
      name: 'Quarterly Plan'
    },
    semester: {
      name: 'Semester Plan'
    },
    yearly: {
      name: 'Yearly Plan'
    }
  },
  creditCard: {
    title: 'Credit Card',
    number: 'Credit card number',
    name: 'Name',
    cvv: 'CVV',
    expirationDate: 'Expiration date'
  },
  thankyou: {
    title: 'Thanks for subscribing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus magni ea, repellendus quas in corrupti recusandae non nam quaerat.'
  }
}
