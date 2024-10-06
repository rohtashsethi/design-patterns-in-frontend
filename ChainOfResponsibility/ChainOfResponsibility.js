function validateNotEmpty(field, next) {
  if (field.value === '') {
    console.log(`${field.name} is empty.`);
    return;
  }
  next();
}

function validateIsNumber(field, next) {
  if (isNaN(field.value)) {
    console.log(`${field.name} is not a number.`);
    return;
  }
  next();
}

function processField(field) {
  validateNotEmpty(field, () => validateIsNumber(field, () => {
    console.log(`${field.name} is valid.`);
  }));
}

const field = { name: 'Age', value: '25' };
processField(field);  // Age is valid
