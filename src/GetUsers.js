
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

async function getUser(userName, pass) {
  let user;

  return await getUsers().then((users) => {
    user = users.find(
      (user) =>
        user.username === userName && pass === user.address.geo.lat.slice(-4)
    );
    if (user) {
      console.log("secses");
      return user;
    } else( 
alert('משתמש לא נמצא אנא נסה שוב')
      )
  });
}

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

function gettodo(userid) {
  let user;

  return getTodos().then((users) => {
    user = users.filter((user) => user.userId === userid);
    if (user) {
      localStorage.setItem("todos", JSON.stringify(user));
      return user;
    } else {
      alert("דחילק");
    }
  });
}

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

function getpost(userid) {
  let user;
  return getPosts().then((users) => {
    user = users.filter((user) => user.userId === userid);
    if (user) {
      // console.log(user);
      return user;
    } else {
      alert("דחילק");
    }
  });
}



async function getAlboms() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  return data;
}

function getAlbom(userid) {
  let user;
  return getAlboms().then((users) => {
    user = users.filter((user) => user.userId === userid);
    if (user) {
      // console.log(user);
      return user;
    } else {
      alert("דחילק");
    }
  });
}


async function getPhotos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return data;
}

function getPhoto(userid) {
  let user;
  return getPhotos().then((users) => {
    user = users.filter((user) => user.userId === userid);
    if (user) {
      // console.log(user);
      return user;
    } else {
      alert("דחילק");
    }
  });
}

export {getPhoto}
export {getAlbom}
export { getpost };
export { gettodo };
export default  getUser ;
