export class Validation {
  isValidEmail(email: string) {
    return email && email.length > 4;
  }

  isValidDni(dni: string) {
    return dni.length > 6;
  }

  isValidName(name: string, minLength = 3) {
    return name.length >= minLength;
  }
}
