export type TransactionType = "income" | "expense" | "transfer"

export type TransactionStatus = "pending" | "cleared" | "failed"

export interface Transaction {
  id: string
  amount: number
  type: TransactionType
  date: string
  description?: string
  accountId: string
  category?: string
  status: TransactionStatus
  relatedAccountId?: string // for transfers
  createdAt: string
  updatedAt?: string
}
