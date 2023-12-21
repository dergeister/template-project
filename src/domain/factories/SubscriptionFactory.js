import Subscription from '@models/Subscription'

import SubscriptionTypeEnum from '@/domain/enums/SubscriptionTypeEnum'

class SubscriptionFactory {
  /**
   * Creates a Subscription based on the given SubscriptionTypeEnum
   * @param {SubscriptionTypeEnum} type The subscription to be created
   * @returns {Subscription} The Subscription object
   */
  static createSubscription = (type) => {
    let subscription

    switch (type) {
      default:
      case SubscriptionTypeEnum.PROFESSIONAL:
        subscription = new Subscription(
          SubscriptionTypeEnum.PROFESSIONAL,
          'subscriptions.professional.name',
          'subscriptions.professional.description',
          'R$ 74,90'
        )
        break
      case SubscriptionTypeEnum.STUDENT:
        subscription = new Subscription(
          SubscriptionTypeEnum.STUDENT,
          'subscriptions.student.name',
          'subscriptions.student.description',
          'R$ 24,90'
        )
        break
    }

    return subscription
  }
}

export default SubscriptionFactory
