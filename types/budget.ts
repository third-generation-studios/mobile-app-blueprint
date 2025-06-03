export type BudgetPeriod = "monthly" | "weekly" | "yearly" | "custom"

export interface Budget {
  id: string
  name: string
  amount: number
  period: BudgetPeriod
  category?: string
  spent: number
  startDate: string
  endDate?: string
  createdAt: string
  updatedAt?: string
}
