// Write your solution in this file!
customerName = 'bob';
const leastFavoriteCustomer = 'kevin';
function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = bestCustomer;
}

// describe('setBestCustomer()', function() {
//   it('setBestCustomer', function() {
//     expect(window.bestCustomer).to.equal(undefined);

//     setBestCustomer();

//     expect(window.bestCustomer).to.equal('not bob');
//   });
// });

// describe('overwriteBestCustomer()', function() {
//   it('overwrites the best customer', function() {
//     overwriteBestCustomer('maybe bob');

//     expect(window.bestCustomer).to.equal('maybe bob');
//   });
// });

// describe('changeLeastFavoriteCustomer()', function() {
//   it('unsuccessfully tries to reassign the least favorite customer', function() {
//     expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//   });
// });
// });
