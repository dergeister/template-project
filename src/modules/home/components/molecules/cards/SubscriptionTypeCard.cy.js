import SubscriptionTypeCard from './SubscriptionTypeCard.vue'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'

describe('Subscrtiption Type Card Button', () => {
  beforeEach(function () {
    cy.fixture('subscription-type-cards').then((c) => {
      this.cards = c
    })
  })

  it('Renders properly the professional card', function () {
    cy.mount(SubscriptionTypeCard, {
      props: { data: this.cards.professional }
    })

    cy.get(`[data-cy="subscription-card-${SubscriptionTypeEnum.PROFESSIONAL}"]`).should(
      'have.class',
      `subscription-card--${SubscriptionTypeEnum.PROFESSIONAL}`
    )

    cy.get(`[data-cy="subscription-card-name-${SubscriptionTypeEnum.PROFESSIONAL}"]`).should(
      'have.text',
      this.cards.professional.name
    )

    cy.get(`[data-cy="subscription-card-description-${SubscriptionTypeEnum.PROFESSIONAL}"]`).should(
      'have.text',
      this.cards.professional.description
    )
  })

  it('Renders properly the student card', function () {
    cy.mount(SubscriptionTypeCard, {
      props: { data: this.cards.student }
    })

    cy.get(`[data-cy="subscription-card-${SubscriptionTypeEnum.STUDENT}"]`).should(
      'have.class',
      `subscription-card--${SubscriptionTypeEnum.STUDENT}`
    )

    cy.get(`[data-cy="subscription-card-name-${SubscriptionTypeEnum.STUDENT}"]`).should(
      'have.text',
      this.cards.student.name
    )

    cy.get(`[data-cy="subscription-card-description-${SubscriptionTypeEnum.STUDENT}"]`).should(
      'have.text',
      this.cards.student.description
    )
  })
})
