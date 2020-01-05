var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'toby'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'pam'
}