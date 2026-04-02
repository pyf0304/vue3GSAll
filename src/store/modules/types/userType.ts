export type UserType = keyof typeof UserTypeMap;
export const UserTypeMap = {
  middle_School: 'middle_School',
  university: 'university',
  company: 'company',
  unknown: 'unknown',
} as const;
export function getUserTypeByStr(strUserType: string): UserType {
  switch (strUserType) {
    case 'middle_School':
      return UserTypeMap.middle_School;
    case 'university':
      return UserTypeMap.university;
    case 'company':
      return UserTypeMap.company;
    case 'unknown':
      return UserTypeMap.unknown;
    default:
      return UserTypeMap.unknown;
  }
}
export const userTypeList = [
  {
    userType: UserTypeMap.middle_School,
    label: '中学',
    icon: 'MS',
    title: '中学',
  },
  {
    userType: UserTypeMap.university,
    label: '大学',
    icon: 'UNI',
    title: '大学',
  },
] as const;
