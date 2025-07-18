/**We are creating the function  that works like Promise.all but with objects (instead of arrays). It takes argument. 
The provided code will be added to your solution, and does not need to be submitted: Promise.all = undefined   */

async function all(arg) {
    let result = {};
    for (let entries of Object.entries(arg)) {
        result[entries[0]] = await entries[1];
    }
    return result;
  }
