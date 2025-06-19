/** Create a function named explore, which creates a page displaying the list of places provided in the data file below.

    Sort the places from north to south, so that the northern-most place is first.
    Display a fullscreen-size <section> for each place. Use the pics hosted in the ./where-do-we-go_images folder below. Set the background attribute with the corresponding image URL. The URL has to be formatted like so: ./where-do-we-go_images/name-of-the-place.jpg.
    Display a location indicator as an <a> tag in the middle of the screen. It should:
        have the class location
        display the name and coordinates of the current place, as text strings separated by \n
        set the text color as color
        update the name, coordinates and color on scroll, at the point when the next image reaches the middle of the screen height
        make the href attribute open a new tab redirecting to a Google Maps URL with the coordinates of the place currently displayed
    Display a compass as a div tag, indicating the latitude direction which:
        has the class direction
        displays N for North if the user is scrolling up
        displays S for South if he's scrolling down

Files

You only need to create & submit the JS file where-do-we-go.js; we're providing you the following files to download and test test locally:

    the HTML file where-do-we-go.html to open in the browser, which includes:
        the JS script which will enable you to run your code

    the data file where-do-we-go.data.js from which you can import places

    feel free to use the CSS file where-do-we-go.data.css as it is or you can also modify it.

    you can get the images to be used in this compressed folder or you can get them in the where-do-we-go_images folder from the public URL. Example: `https://public.01-edu.org/subjects/where-do-we-go/where-do-we-go_images/arlit.jpg

*/
/** Instructions
You're going to create some curry functions, to apply to the object's entries.
> Create defaultCurry, which curries two objects. It mergers the objects together. If the key exists in both objects, the value from the second object override the value from the first object.
    defaultCurry({
    http: 403,
    connection: 'close',
    contentType: 'multipart/form-data',
    })({
    http: 200,
    connection: 'open',
    requestMethod: 'GET'
    })
    // output
    {
        http: 200,
        connection: 'open',
        contentType: 'multipart/form-data',
        requestMethod: 'GET'
    }
> Create mapCurry, which replicates function .map (but for an object). The first entry is the function, and the second entry is the object.
    mapCurry(([k, v]) => [`${k}_force`, v])(personnel)
    // output
    {
    lukeSkywalker_force: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
    sabineWren_force:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
    zebOrellios_force:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
    ezraBridger_force:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
    calebDume_force:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
    }
> Create reduceCurry, which replicates the .reduce method (but from an object). The first entry is the function, and the second is the object and initial value).
    reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0)
    // output
    6
> Create filterCurry which replicates the .filter method (but for an object). The first entry is the function, and the second is an object.
    filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
    str: 'string',
    nbr: 1,
    arr: [1, 2],
    })
    // output
    { str: 'string', arr: [1, 2] }
Using each curry function create the following functions with a parameter personnel:
    > reduceScore: that will return the total value of the scores of the people who use the force. (this function can have one additional parameter).
    > filterForce: that will return the force users with shootingScores equal to or higher than 80.
    > mapAverage: that will return a new object with the property averageScore, that is the average of the scores for each person.
Code provided
The provided code will be added to your solution, and does not need to be submitted.
const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}
*/

function defaultCurry(obj1) {
    return function (obj2) {
        return Object.fromEntries(Object.entries(obj1).concat(Object.entries(obj2)))
    }
}

function mapCurry(func) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).map(func))
    }
}

function reduceCurry(func) {
    return function (obj, init) {
        return Object.entries(obj).reduce(func, init)
    }
}

function filterCurry(func) {
    return function (obj) {
        return Object.fromEntries(Object.entries(obj).filter(func))
    }
}

function reduceScore(personnel, init = 0) {
    return reduceCurry((acc, [, values]) =>
        values.isForceUser ? acc + values.pilotingScore + values.shootingScore : acc)(personnel, init)
}

function filterForce(personnel) {
    return filterCurry(([, values]) => values.isForceUser && values.shootingScore >= 80)(personnel)
}

function mapAverage(personnel) {
    return mapCurry(([name, values]) => {
        values.averageScore = (values.pilotingScore + values.shootingScore) / 2
        return [name, values]
    })(personnel)
}
