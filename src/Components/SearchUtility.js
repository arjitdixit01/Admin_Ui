


export function searchInUsers(search,users) {
  let tempSearchHere = search.toLowerCase();
  return users.map((userHere) => {
    if (
      userHere.name.toLowerCase().includes(tempSearchHere) ||
      userHere.email.toLowerCase().includes(tempSearchHere) ||
      userHere.role.toLowerCase().includes(tempSearchHere)
    ) {
      userHere.show = true;
       return userHere;
    }
    userHere.show = false;
    return userHere;
  });
};
// export default searchInUsers
