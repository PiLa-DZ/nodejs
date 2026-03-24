// *** Canceling an Immediate ***

const immediateId = setImmediate(() => {
  console.log('This will not be displayed');
});

clearImmediate(immediateId);
console.log('Immediate has been cancelled');
