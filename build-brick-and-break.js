/**build a 3-column brick tower, maintain it and finally break it.

    Create a function build which will create and display the amount of bricks passed as argument:
        each brick has to be created as a div and added to the page at a regular interval of 100ms.
        each brick will receive a unique id property, like the following:

    <div id="brick-1"></div>

        each brick in the middle column has to be set with the custom data attribute foundation, receiving the value true.

    Each one of the two emojis in the top-right corner fires a function on click:
        🔨: triggers the function repair. Write the body of that function. It receives any number of ids. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
        🧨: triggers the destroy function. Write the body of that function. It removes the current last brick in the tower.

Files

You only need to create & submit the JS file build-brick-and-break.js, We're providing you the following file to download and test locally:

    the HTML file build-brick-and-break.html can be opened in the browser, which includes:
        the JS script running some code, and which will enable you to run your code.
 */

        function build(bricksNumber) {
            let body = document.getElementsByTagName("body")[0];
            let bricks = 1;
            let interval = setInterval(() => {
                let brick = document.createElement("div");
                brick.setAttribute("id", "brick-" + bricks);
                bricks % 3 === 2 ? (brick.dataset.foundation = true) : null;
                body.appendChild(brick);
                bricks++;
                if (bricks > bricksNumber) {
                    clearInterval(interval);
                }
            }, 100);
        }
        
        function repair(...ids) { 
            ids.forEach((id) => {
                let brick = document.getElementById(id);
                brick.getAttribute("foundation")//checks the value of the "foundation" attribute of the brick
                    ? (brick.dataset.repaired = "in progress")// ? - If the value of the "foundation" attribute is truthy 
                    : (brick.dataset.repaired = true);// : -  if the value of the "foundation" attribute is falsy
        //dataset property is used to access and modify the data-* attributes of an HTML element.            
            });
        }
        
        function destroy() {
            let bricks = document.getElementsByTagName("div");
            bricks[bricks.length - 1].remove();
        }
        
        export { build, repair, destroy };
