import Plan from '@models/Plan'
import PlanIdentifierEnum from '@enums/PlanIdentifierEnum'
import SubscriptionTypeEnum from '@enums/SubscriptionTypeEnum'
import i18n from '@i18n'

const { t } = i18n.global

const monthlyPlan = Object.freeze(
  new Plan(PlanIdentifierEnum.MONTHLY, t('plans.monthly.name'), 7490, 1)
)

const quarterlyPlan = Object.freeze(
  new Plan(PlanIdentifierEnum.QUARTERLY, t('plans.quarterly.name'), 22470, 3)
)

const semesterPlan = Object.freeze(
  new Plan(PlanIdentifierEnum.SEMESTER, t('plans.semester.name'), 44940, 6)
)

const yearlyPlan = Object.freeze(
  new Plan(PlanIdentifierEnum.YEARLY, t('plans.yearly.name'), 89880, 12)
)

const studentMonthlyPlan = Object.freeze(
  new Plan(PlanIdentifierEnum.STUDENT_MONTHLY, t('plans.monthly.name'), 2490, 1)
)

const studentYearlyPlan = Object.freeze(
  new Plan(PlanIdentifierEnum.STUDENT_YEARLY, t('plans.yearly.name'), 29880, 12)
)

const professionalPlans = [monthlyPlan, quarterlyPlan, semesterPlan, yearlyPlan]

const studentPlans = [studentMonthlyPlan, studentYearlyPlan]

const plansPerSubscriptionType = {
  [SubscriptionTypeEnum.PROFESSIONAL]: professionalPlans,
  [SubscriptionTypeEnum.STUDENT]: studentPlans
}

export {
  monthlyPlan,
  quarterlyPlan,
  semesterPlan,
  yearlyPlan,
  studentMonthlyPlan,
  studentYearlyPlan,
  professionalPlans,
  studentPlans,
  plansPerSubscriptionType
}
