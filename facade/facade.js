const API = {
  getUser: function (id) {
    console.log(`Fetching user with ID: ${id}`);
    return { id, name: 'John Doe' };
  },
  getPosts: function (userId) {
    console.log(`Fetching posts for user ID: ${userId}`);
    return [{ title: 'Post 1' }, { title: 'Post 2' }];
  }
};

const FacadeAPI = {
  getUserData: function (userId) {
    const user = API.getUser(userId);
    const posts = API.getPosts(userId);
    return { user, posts };
  }
};

const userData = FacadeAPI.getUserData(1);
console.log(userData);
