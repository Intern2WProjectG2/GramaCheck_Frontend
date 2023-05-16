import { number } from "yup"

export function nicValidator(nic) {
    if (!nic) return "*Password can't be empty."
    if (nic.length < 10) return '*NIC must be at least 10 characters long.'
    if (nic.length > 12) return '*NIC can be only 12 characters long.'
    return ''
  }

  export function numberValidator(number) {
    if (!number) return "*House or Building Number is required"
    return ''
  }
  
  export function cityValidator(city) {
    const re =/^[a-zA-Z ]*$/
    if (!city) return "*City or Town is required"
    if (!re.test(city)) return '*City or Town should not contain numbers'
    return ''
  }

  export function districtValidator(district) {
    const re =/^[a-zA-Z ]*$/
    if (!district) return "*District is required"
    if (!re.test(district)) return '*District should not contain numbers'
    return ''
  }

  export function provinceValidator(province) {
    const re =/^[a-zA-Z ]*$/
    if (!province) return "*Province is required"
    if (!re.test(province)) return '*Province should not contain numbers'
    return ''
  }

  export function postalCodeValidator(postalCode) {
    if (!postalCode) return "*Postal Code is required"
    if (postalCode.length < 5) return '*PostalCode must be at least 5 characters long.'
    if (postalCode.length > 5) return '*PostalCode can be only 5 characters long.'
    return ''
  }

  export function gramasewaDivValidator(gramasewaDiv) {
    if (!gramasewaDiv) return "*Dramasewa Division Number is required"
    return ''
  }