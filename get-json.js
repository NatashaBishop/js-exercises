// Create a function named getJSON with two parameters:
// path: a URL called by your function.
// params: optional query parameters that will be appended to the path.
// getJSON must construct a valid url with the path and stringified params, and use fetch to fulfil the request.
// If the response is not OK, getJSON must throw an error using the response status text.
// The response body must then be read and parsed from JSON.
// The parsed object contains one of those 2 properties:
// "data": the actual data to return.
// "error": the error message to throw.
// Notions
// Promise.js
// Using fetch
// URL search params
// JSON
//useful: https://youtu.be/BOQ9mmUd3dI
/*The syntax of the ternary operator(compact way to do if-else statement) is as follows:
condition ? expression1 : expression2
condition is a boolean expression that evaluates to either true or false.
If the condition is true, expression1 is executed,
otherwise, expression2 is executed*/
//URLSearchParams object is a built-in JavaScript API for working with URL query parameters
//The ? character is used to separate the base URL path from the query string parameters
async function getJSON(path, params) {
  //create a URL string from a given path and parameters if any
  const url = params ? `${path}?${new URLSearchParams(params).toString()}` : path
  return fetch(url).then((response) => {
      if (!response.ok) {
          throw new Error(response.statusText);
      }
      return response.json().then((data) => {
          if (data.error) throw new Error(data.error);
          return data.data;
      });
  })
}
