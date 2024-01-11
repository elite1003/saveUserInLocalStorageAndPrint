const unorderdList = document.createElement("ul");
unorderdList.className = "users";
const style = document.querySelector("style");
const body = document.querySelector("body");
body.insertBefore(unorderdList, style);

const localStorageKey = "User Details";
const userDetails = JSON.parse(localStorage.getItem(localStorageKey)) || [];
for (let i = 0; i < userDetails.length; i++) {
  const { username, email, phone } = userDetails[i];
  const list = document.createElement("li");
  list.className = "user";
  const listText = document.createTextNode(`${username} ${email} ${phone}`);
  list.appendChild(listText);
  unorderdList.appendChild(list);
}
function handleFormSubmit(e) {
  console.log("handleFormSubmit");
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;

  const userDetail = {
    username: username,
    email: email,
    phone: phone,
  };

  userDetails.push(userDetail);
  localStorage.setItem(localStorageKey, JSON.stringify(userDetails));

  const list = document.createElement("li");
  list.className = "user";
  const listText = document.createTextNode(`${username} ${email} ${phone}`);
  list.appendChild(listText);
  unorderdList.appendChild(list);
}

module.exports = handleFormSubmit;
