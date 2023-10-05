// // // const fs = require("fs");

// // // let results = [];
// // // async () => {
// // //   for (let i = 0; i < 9; i++) {
// // //     let url = "https://admin.handymama.co/products/service?page=" + (i + 1);
// // //     const res = await (await fetch(url)).json();
// // //     if (!res.results) console.log(0, res, url);
// // //     console.log(res.results || []);
// // //     results = [...results, ...(res.results || [])];
// // //   }
// // //   console.log(results.length);
// // //   fs.writeFileSync(
// // //     "C:/Users/ab/Desktop/test.json",
// // //     JSON.stringify(results, null, 2)
// // //   );
// // // };

// // // let list = JSON.parse(fs.readFileSync("C:/Users/ab/Desktop/test.json"));

// // // console.log(list.length);
// // // let res = [];
// // // list.forEach((element) => {
// // //   let {
// // //     name,
// // //     slug: id,
// // //     unit_price: price,
// // //     image: imageSrc,
// // //     image_url: imageUrl,
// // //   } = element;
// // //   imageSrc = imageSrc || imageUrl;
// // //   console.log({ name, id, price, imageSrc });
// // //   res.push({ name, id, price, imageSrc, options: [] });
// // // });
// // // fs.writeFileSync(
// // //   "C:/Users/ab/Desktop/services.json",
// // //   JSON.stringify(res, null, 2)
// // // );

// // // Download the helper library from https://www.twilio.com/docs/node/install
// // // Find your Account SID and Auth Token at twilio.com/console
// // // and set the environment variables. See http://twil.io/secure

// // const axios = require("axios");

// // const apiKey = "F9X2er7bA3hv5rqjQiP7603JEMQ70mwwnLdJwEwK";
// // const msg = "Test";
// // const toNumbers = "8801827829617";
// // const schedule = "2023-09-25 00:27:07";

// // const url = `https://api.sms.net.bd/sendsms?api_key=${apiKey}&msg=${msg}&to=${toNumbers}&schedule=${schedule}`;

// // axios
// //   .get(url)
// //   .then((response) => {
// //     console.log(response.data);
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });

// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: "engineerhut.net",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "zubaerahmed@engineerhut.net",
//     pass: "uihjbnygv",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"EngineerHut" <zubaerahmed@engineerhut.net>', // sender address
//     to: "zubaerahmed100@gmail.com", // list of receivers
//     subject: `Test ✔`, // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   //
//   // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
//   //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
//   //       <https://github.com/forwardemail/preview-email>
//   //
// }

// main().catch(console.error);

// import services from "./frontend/src/Data/services.js";
// const categories = new Set();
// services.forEach((service) => {
//   categories.add(...service.category);
// });
// console.log(categories);

import districts from "./frontend/src/Data/districts_bd.js";
(async () => {
  const dists = districts;
  console.log(dists);
})();
