export default interface User{
  userId: string,
  email: string,
  name: string,
  birthDate: string|null,
  phoneNumber: string|null,
  userMainAccount: string
}