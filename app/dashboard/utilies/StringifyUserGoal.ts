import { UserGoalInterface } from "@/app/userprofile/interfaces/Goals";

export function stringifyUserGoal(userGoal: UserGoalInterface): string {
    return JSON.stringify(userGoal);
}

export function isUserGoalArray(input: any): input is UserGoalInterface[] {
    return Array.isArray(input) && input.every(item => 'userName' in item && 'date' in item);
}
