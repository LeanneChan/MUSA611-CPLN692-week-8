/* =====================
Lab 1: Leaflet Draw

Task 1: Try to draw something on the map

Try to use one or two of the drawing tools. They should allow you to draw
without needing any additional configuration. These shapes will not be added to
the map. We'll fix that in the next task.

Task 2: Add rectangles to map

Add the rectangle layers to the map when they are drawn. Hint: you can use the
addLayer function that we have used in the past.

Task 3: Limit to one rectangle

For our application, we only want one rectangle to be displayed on the map at
any given time. When a user draws a new rectangle, the old rectangle should be
removed from the map. To remove a previously drawn rectangle, we will need to
store some information about it in a global variable. Use the variable
myRectangle, which is already defined in this document, to store the new Leaflet
layer before adding it to the map.

You will also need to remove the previous layer from the map.

If you get the error: "Cannot read property '_leaflet_id' of undefined", it
may be because you are trying to remove a layer that does not yet exist.
Check to see if myRectangle is defined before trying to remove it.

Task 4: Add shape to sidebar

Let's add the shape we've created to the sidebar. In the HTML, there is a
container with ID #shapes. Use jQuery's `append` or `appendTo` function
to add a new div inside the #shapes container. The HTML should look somewhat
like the following:

HINT 1: Templating is probably the best way to build HTML elements. Great news:
javascript (finally) has a fantastic templating system. (If the docs don't
help, bug your professor for an example!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Hint 2: jQuery can help! Once you've built some HTML, jQuery can parse it. At
that point, you should be able to modify it and use it like any other element
jQuery has selected.
https://api.jquery.com/jquery.parsehtml/

Hint 3: We've never seen this "data-leaflet-id" thing. It's just an attribute like
we've used before (think back to checkboxes, which required jQuery's 'attr'
method https://api.jquery.com/attr/). As it turns out, we can stash data on HTML
elements by creating as many attributes as we need!
This is valid HTML: <div my-made-up-attribute='information-stored-in-string'></div>
And it allows us to retrieve "information-stored-in-string" by querying
"my-made-up-attribute"

<div class="shape" data-leaflet-id="[the id]"><h1>Current ID: [the id]</h1></div>

Where [the id] is replaced by the Leaflet ID of the layer.

When a new layer is added, you can use jQuery's empty function to clear
out the #shapes container before appending a new .shape.

Task 5: Store multiple shapes

Instead of showing one shape at a time, let's allow multiple shapes to be drawn.
Instead of storing one Leaflet layer in the myRectangle variable, we should use
an array to store multiple layers. There will also be multiple shapes displayed
in the sidebar.

Change the variable myRectangle to myRectangles and set it to equal an empty
array. Change the rest of your code to push new layers into the array.

Task 6: Connect sidebar and map 

The HTML in the sidebar and the Leaflet layers on the map and in our Javascript
variable can be linked by using the Leaflet ID. Modify the application so that
clicking on a shape in the sidebar will do one of the following:

- Change the color of the corresponding shape on the map
- Delete the corresponding shape on the map (be sure to remove it from the
sidebar and the myRectanges array)
- Anything else you can think of!

OH- must add the clikcability when creating the new shape in map.on!! not outside. 

Task 7 (Stretch Goal): Reverse Task 6

Modify the application so moving your mouse over a rectangle on the map will
highlight (change style in some way) the corresponding element in the sidebar.
Moving your mouse outside of the circle should remove the highlighting.

===================== */

// Global Variables
var myShapes=[];

// Initialize Leaflet Draw
var drawControl = new L.Control.Draw({
  draw: {
    polyline: false,
    polygon: false,
    circle: true,
    marker: false,
    circlemarker: false,
    rectangle: true

  }
});

map.addControl(drawControl);

// Event which is run every time Leaflet draw creates a new layer
map.on('draw:created', function (e) {
    var type = e.layerType; // The type of shape
    myShapes.push(e.layer);; // The Leaflet layer for the shape
    var id = L.stamp(e.layer); // The unique Leaflet ID for the layer
    //console.log(id);
    //console.log(myShapes);
    _.each(myShapes, function(x){map.addLayer(x);});

    // add id to sidebar 
    // call div using #, call class using . 
    $('#shapes').append($.parseHTML(`<div class="shape" data-leaflet-id=${id}><h1>Current ID: ${id}</h1></div>`));

    // add functionality for clicking side bar, part 6
    $('.shape').click(function () {
        var clicked_id = $(this).attr('data-leaflet-id');
        //alert('clicked');
        console.log(clicked_id);
        // remove old shapes 
        _.each(myShapes, function(x){map.removeLayer(x)});
        // filter out to new shapes 
        myShapes = _.filter(myShapes, function(x){return x._leaflet_id != clicked_id})
        // plot new shapes 
        _.each(myShapes, function(x){map.addLayer(x);});

    });

    /* alternative to part 6. Simply adding a click functionality to this div
    $(`div[data-leaflet-id |=${id}]`).click(function(){
    })*/

    // part 7: 
    e.layer.on("mouseover", function(e){
        var hovered = e.target._leaflet_id;
        // div selector
        $(`div[data-leaflet-id |=${hovered}]`).css("background-color", "yellow");
        // |= is a pipe... it is a selector. 
    });
    // have to do a mouseout as well, so that it doesnt stay highlighted
    e.layer.on("mouseout", function(e){
        var hovered = e.target._leaflet_id;
        // div selector
        $(`div[data-leaflet-id |=${hovered}]`).css("background-color", "white");
        // |= is a pipe... it is a selector. 
    });



});


