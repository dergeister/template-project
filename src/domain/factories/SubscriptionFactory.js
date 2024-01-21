import Subscription from '@models/Subscription'

import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

import i18n from '@i18n'

class SubscriptionFactory {
  /**
   * Creates a Subscription based on the given SubscriptionTypeEnum
   * @param {SubscriptionTypeEnum} type The subscription to be created
   * @returns {Subscription} The read only Subscription object
   */
  static createSubscription = (type) => {
    const { t } = i18n.global

    let subscription

    switch (type) {
      default:
      case SubscriptionTypeEnum.PROFESSIONAL:
        subscription = new Subscription(
          SubscriptionTypeEnum.PROFESSIONAL,
          t('subscriptions.professional.name'),
          t('subscriptions.professional.description')
        )
        break
      case SubscriptionTypeEnum.STUDENT:
        subscription = new Subscription(
          SubscriptionTypeEnum.STUDENT,
          t('subscriptions.student.name'),
          t('subscriptions.student.description')
        )
        break
    }

    return Object.freeze(subscription)
  }
}

export default SubscriptionFactory
