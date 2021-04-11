"use strict";

module.exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2,
    ),
  };

  console.log("============================");
  console.log("response");
  console.log(response);
  console.log("============================");

  return response;
};
