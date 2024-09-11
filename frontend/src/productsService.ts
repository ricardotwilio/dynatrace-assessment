const getProducts = async (page = 1) => {
  const response = await fetch("/api/products?page=" + page, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const items = await response.json();

  return items;
}

// const getItems = (): Promise<{
//   name: string;
//   quantity: number;
//   price: number;
//   id: number;
// }[] | never> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.9) {
//         reject();
//       } else {
//         resolve([
//           {
//             name: "TV Samsung 4K",
//             price: 400,
//             quantity: 3,
//             id: 1,
//           },
//           {
//             name: "Apple Iphone 7",
//             price: 240,
//             quantity: 1,
//             id: 2,
//           },
//           {
//             name: "Cetocec Microwave",
//             price: 510,
//             quantity: 4,
//             id: 3,
//           },
//           {
//             name: "Garmin Fenix 5",
//             price: 397,
//             quantity: 2,
//             id: 4,
//           },
//           {
//             name: "Nintendo Switch",
//             price: 380,
//             quantity: 0,
//             id: 5,
//           },
//         ]);
//       }
//     }, 500);
//   });
// };

export { getProducts };
