export default {
  errorHandler: {
    default: {
      title: 'An error occurred',
      message: 'Contact our support in case the error persists.'
    },
    nutritionistNotFound: {
      title: 'Nutritionist not found',
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
      message: 'Fill in the fields and try again'
    }
  },
  buttons: {
    signIn: 'Create account',
    subscribe: 'Subscribe',
    continue: 'Next'
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
    email: "your{'@'}email.com"
  },
  formValidation: {
    required: 'This field is required',
    email: 'Inform a valid e-mail'
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
  }
}
