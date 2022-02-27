import { Department } from "./Department";

export interface Officer {
    id: number,
    name: string,
    age: number,
    department: Department,
    departmentId: number
}