// Receiver: Canvas where shapes will be drawn
function Canvas() {
  this.shapes = [];
}

Canvas.prototype.addShape = function (shape) {
  this.shapes.push(shape);
  this.display();
};

Canvas.prototype.removeShape = function (shape) {
  this.shapes = this.shapes.filter(s => s !== shape);
  this.display();
};

Canvas.prototype.changeColor = function (shape, color) {
  shape.color = color;
  this.display();
};

Canvas.prototype.display = function () {
  console.clear();
  this.shapes.forEach(shape => console.log(`${shape.type} with color ${shape.color}`));
};

// Command Interface
function Command(execute, undo) {
  this.execute = execute;
  this.undo = undo;
}

// Shape classes
function Shape(type, color) {
  this.type = type;
  this.color = color;
}

// Drawing Command: Adds a shape to the canvas
function DrawShapeCommand(canvas, shape) {
  return new Command(
    () => canvas.addShape(shape),
    () => canvas.removeShape(shape)
  );
}

// Color Change Command: Changes the color of a shape
function ChangeColorCommand(canvas, shape, newColor) {
  const previousColor = shape.color;
  return new Command(
    () => canvas.changeColor(shape, newColor),
    () => canvas.changeColor(shape, previousColor)
  );
}

// Command history to store executed commands
const commandHistory = [];

// Function to execute a command and add it to the command history
function executeCommand(command) {
  command.execute();
  commandHistory.push(command);
}

// Function to undo the last command
function undoLastCommand() {
  const command = commandHistory.pop();
  if (command) {
    command.undo();
  }
}

// Example Usage

const canvas = new Canvas();

// User draws a line
const line = new Shape('line', 'black');
const drawLineCommand = DrawShapeCommand(canvas, line);
executeCommand(drawLineCommand);  // Output: line with color black

// User changes the line color to red
const changeColorCommand = ChangeColorCommand(canvas, line, 'red');
executeCommand(changeColorCommand);  // Output: line with color red

// User undoes the color change (back to black)
undoLastCommand();  // Output: line with color black

// User draws a circle
const circle = new Shape('circle', 'blue');
const drawCircleCommand = DrawShapeCommand(canvas, circle);
executeCommand(drawCircleCommand);  // Output: line with color black, circle with color blue

// User undoes the circle drawing
undoLastCommand();  // Output: line with color black

// User undoes the line drawing
undoLastCommand();  // Output: (empty canvas)
