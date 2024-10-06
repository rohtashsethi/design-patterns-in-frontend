function UserProfile(name) {
  this.name = name;
}

UserProfile.prototype.showProfile = function () {
  console.log(`User: ${this.name}`);
};

// Decorator to add a role
function addRole(user, role) {
  user.role = role;
  const originalShowProfile = user.showProfile;

  user.showProfile = function () {
    originalShowProfile.call(this);
    console.log(`Role: ${this.role}`);
  };
}

const user = new UserProfile('Alice');
addRole(user, 'Admin');
user.showProfile();  // User: Alice, Role: Admin
