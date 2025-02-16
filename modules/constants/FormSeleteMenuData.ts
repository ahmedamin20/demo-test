export enum UserTypesEnum {
    Individual = 1,
    Student = 2,
    Company = 3
}

export const handleUserType = (userType: number)=>{
    const USER_TPYE_OBJECT = {
    isStudent: userType === UserTypesEnum.Student,
    isCompany: userType === UserTypesEnum.Company,
    isIndividual: userType === UserTypesEnum.Individual,
  }
  return USER_TPYE_OBJECT
  }



export const userTypesArray = [
    { id: UserTypesEnum.Individual, name: 'individual' },
    { id: UserTypesEnum.Student, name: 'student' },
    { id: UserTypesEnum.Company, name: 'company' }
];

export enum TProjectType {
    prototyping = 1,
    "3D-Printing" = 2,
    "3D-Design" = 3,
    finishing = 4
}
