function UIElementFactory(type, label) {
  if (type === 'button') {
    return `<button>${label}</button>`;
  } else if (type === 'text') {
    return `<input type="text" placeholder="${label}" />`;
  } else if (type === 'checkbox') {
    return `<input type="checkbox" /> ${label}`;
  }
  return null;
}

const button = UIElementFactory('button', 'Submit');
console.log(button); // <button>Submit</button>
