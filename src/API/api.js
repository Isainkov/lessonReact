// export class Api {
//     static getUsers() {
//       return fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "PUT",
//         body: JSON.stringify(
  export const users = {
          teams: [
            {
              name: "Frontend Team",
              percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
              members: [
                {
                  name: "FE_Team_User1",
                  vacations: [
                    {
                      startDate: "20.12.2020",
                      endDate: "22.12.2020",
                      type: "Paid",
                    },
                    {
                      startDate: "20.11.2020",
                      endDate: "22.11.2020",
                      type: "Paid",
                    },
                  ],
                },
                {
                  name: "FE_Team_User1",
                  vacations: [
                    {
                      startDate: "20.02.2020",
                      endDate: "22.02.2020",
                      type: "UnPaid",
                    },
                    {
                      startDate: "10.03.2020",
                      endDate: "16.03.2020",
                      type: "UnPaid",
                    },
                  ],
                },
              ],
            },
            {
              name: "Backend Team",
              percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
              members: [
                {
                  name: "FE_Team_User1",
                  vacations: [
                    {
                      startDate: "15.02.2020",
                      endDate: "22.02.2020",
                      type: "UnPaid",
                    },
                    {
                      startDate: "20.03.2020",
                      endDate: "22.03.2020",
                      type: "UnPaid",
                    },
                  ],
                },
                {
                  name: "FE_Team_User1",
                  vacations: [
                    {
                      startDate: "20.02.2020",
                      endDate: "22.02.2020",
                      type: "UnPaid",
                    },
                    {
                      startDate: "02.04.2020",
                      endDate: "12.04.2020",
                      type: "UnPaid",
                    },
                  ],
                },
              ],
            },
            {
              name: "Designers",
              percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
              members: [
                {
                  name: "FE_Team_User1",
                  vacations: [
                    {
                      startDate: "10.02.2020",
                      endDate: "15.02.2020",
                      type: "UnPaid",
                    },
                    {
                      startDate: "20.03.2020",
                      endDate: "22.03.2020",
                      type: "UnPaid",
                    },
                  ],
                },
                {
                  name: "FE_Team_User1",
                  vacations: [
                    {
                      startDate: "01.02.2020",
                      endDate: "06.02.2020",
                      type: "UnPaid",
                    },
                    {
                      startDate: "20.03.2020",
                      endDate: "22.03.2020",
                      type: "UnPaid",
                    },
                  ],
                },
              ],
            },
          ],
        };
        // ),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     }).then((response) => response.json());
  //   }
  // }

// const getUsers = () => {
//   const users = {
//     teams: [
//       {
//         name: 'Frontend Team',
//         percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
//         members: [
//           {
//             name: 'FE_Team_User1',
//             vacations: [
//               { startDate: '20.12.2020', endDate: '22.12.2020', type: 'Paid' },
//               { startDate: '20.11.2020', endDate: '22.11.2020', type: 'Paid' },
//             ],
//           },
//           {
//             name: 'FE_Team_User2',
//             vacations: [
//               {
//                 startDate: '20.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'Backend Team',
//         percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
//         members: [
//           {
//             name: 'BE_Team_User1',
//             vacations: [
//               {
//                 startDate: '15.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//           {
//             name: 'BE_Team_User2',
//             vacations: [
//               {
//                 startDate: '20.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'Designer Team',
//         percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
//         members: [
//           {
//             name: 'DE_Team_User1',
//             vacations: [
//               {
//                 startDate: '15.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//           {
//             name: 'DE_Team_User2',
//             vacations: [
//               {
//                 startDate: '20.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'Manager Team',
//         percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
//         members: [
//           {
//             name: 'ME_Team_User1',
//             vacations: [
//               {
//                 startDate: '15.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//           {
//             name: 'ME_Team_User2',
//             vacations: [
//               {
//                 startDate: '20.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'Project Team',
//         percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
//         members: [
//           {
//             name: 'PE_Team_User1',
//             vacations: [
//               {
//                 startDate: '15.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//           {
//             name: 'PE_Team_User2',
//             vacations: [
//               {
//                 startDate: '20.02.2020',
//                 endDate: '22.02.2020',
//                 type: 'UnPaid',
//               },
//               {
//                 startDate: '20.03.2020',
//                 endDate: '22.03.2020',
//                 type: 'UnPaid',
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   };

//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify(users),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   }).then((response) => response.json());

//   return users;
// };

// export default getUsers;