import { Dayjs } from 'dayjs'

export interface IProgram {
    id: string
    title: string
    description: string
    createdAt: Dayjs
    updatedAt: Dayjs
}
