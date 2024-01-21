import Plan from '@models/Plan'

import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'

import i18n from '@i18n'

class PlanFactory {
  /**
   * Creates a Plan based on the given PlanIdentifierEnum
   * @param {PlanIdentifierEnum} type The plan to be created
   * @returns {Plan} The read only Plan object
   */
  static createPlan = (type) => {
    const { t } = i18n.global

    let plan

    switch (type) {
      default:
      case PlanIdentifierEnum.MONTHLY:
        plan = new Plan(PlanIdentifierEnum.MONTHLY, t('plans.monthly.name'), 7490, 1)
        break
      case PlanIdentifierEnum.QUARTERLY:
        plan = new Plan(PlanIdentifierEnum.QUARTERLY, t('plans.quarterly.name'), 22470, 3)
        break
      case PlanIdentifierEnum.SEMESTER:
        plan = new Plan(PlanIdentifierEnum.SEMESTER, t('plans.semester.name'), 44940, 6)
        break
      case PlanIdentifierEnum.YEARLY:
        plan = new Plan(PlanIdentifierEnum.YEARLY, t('plans.yearly.name'), 89880, 12)
        break
      case PlanIdentifierEnum.STUDENT_MONTHLY:
        plan = new Plan(PlanIdentifierEnum.STUDENT_MONTHLY, t('plans.monthly.name'), 2490, 1)
        break
      case PlanIdentifierEnum.STUDENT_YEARLY:
        plan = new Plan(PlanIdentifierEnum.STUDENT_YEARLY, t('plans.yearly.name'), 29880, 12)
        break
    }

    return Object.freeze(plan)
  }
}

export default PlanFactory
