export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  unitTitle: string
  color: string
}
export type CustomErrorType = {
  error: { status: string; data: any }
}
