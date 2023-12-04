import Subscription from '@models/Subscription'

import SubscriptionTypes from '@enums/SubscriptionTypes'

class SubscriptionFactory {
  static createProfessionalSubscription = () => {
    return new Subscription(
      SubscriptionTypes.PROFESSIONAL,
      'subscriptions.professional.name',
      'subscriptions.professional.description',
      'R$ 74,90'
    )
  }

  static createStudentSubscription = () => {
    return new Subscription(
      SubscriptionTypes.STUDENT,
      'subscriptions.student.name',
      'subscriptions.student.description',
      'R$ 24,90'
    )
  }
}

export default SubscriptionFactory
