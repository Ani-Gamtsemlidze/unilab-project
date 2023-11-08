// export default function FilterUsers(
//   usersObject,
//   activeChecked,
//   inactiveChecked,
//   femaleChecked,
//   maleChecked,
//   searchField
// ) {
//   const usersByStatus = usersObject.filter((item) => {
//     if (item.status === "active" && activeChecked) {
//       return item;
//     }
//     if (item.status === "inactive" && inactiveChecked) {
//       return item;
//     }
//   });

//   const userByGender = usersByStatus.filter((item) => {
//     if (item.gender === "Female" && femaleChecked) {
//       return item;
//     }
//     if (item.gender === "Male" && maleChecked) {
//       return item;
//     }
//   });

//   const usersByString = userByGender.filter((item) => {
//     if (
//       item.full_name.toLowerCase().includes(searchField) ||
//       item.mail.toLowerCase().includes(searchField)
//     ) {
//       return true;
//     }
//     return false;
//   });

//   return usersByString;
// }
