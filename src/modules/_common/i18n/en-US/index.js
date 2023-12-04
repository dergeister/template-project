export default {
  errorHandler: {
    default: {
      title: 'An error occurred',
      message: 'Something is not quite right'
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
    }
  },
  buttons: {
    signIn: 'Create account',
    subscribe: 'Subscribe'
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
  }
}
