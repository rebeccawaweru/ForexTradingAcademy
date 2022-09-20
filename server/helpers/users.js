const users = [];

const addUser = ({ id, name, course }) => {
  name = name;
  course = course;

  const existingUser = users.find((user) => user.course === course && user.name === name);

  if(!name || !course) return { error: 'Username and course are required.' };
  // if(existingUser) return { error: 'Username is taken.' };

  const user = { id, name, course };

  users.push(user);

  return { user };
}

const privateUser = ({id,userId})=>{
  id = id;
  userId = userId;
  if(!id || !userId) return { error: 'id missing.' };
  const user = {id, userId}
  user.push(user);
  return{user};
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInCourse = (course) => users.filter((user) => user.course === course);

module.exports = { addUser, removeUser, getUser, getUsersInCourse,privateUser };