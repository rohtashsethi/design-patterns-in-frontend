function User() {
  this.observers = [];
}

User.prototype = {
  subscribe: function (observer) {
    this.observers.push(observer);
  },
  unsubscribe: function (observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  },
  notify: function (action) {
    this.observers.forEach(observer => observer(action));
  }
};

const user = new User();

// Observers
function uiObserver(action) {
  if (action === 'login') console.log('UI: User logged in');
}

function loggerObserver(action) {
  console.log(`Logger: User performed ${action}`);
}

user.subscribe(uiObserver);
user.subscribe(loggerObserver);

user.notify('login');  // UI: User logged in, Logger: User performed login
