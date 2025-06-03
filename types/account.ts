export type AccountType =
  | "checking"
  | "savings"
  | "credit"
  | "investment"
  | "cash"
  | "loan"

export interface Account {
  id: string
  name: string
  type: AccountType
  balance: number
  currency: string
  institution?: string
  accountNumber?: string
  createdAt: string
  updatedAt?: string
}
