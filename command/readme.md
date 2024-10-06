# Command Pattern
The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object containing all the information about the request. This allows the user to parameterize different requests, queue them, log them, and support operations such as undo and redo.

In this pattern:
- Command: Encapsulates an action (request) and its parameters into a single object.
- Invoker: Triggers the execution of commands.
- Receiver: The object on which the command performs actions.
- Client: Creates the command and sets the receiver.
- Undo/Redo Mechanism: The ability to undo or redo commands using a command history stack.

## Why Use the Command Pattern?
- Decouples the invoker from the action (receiver), allowing flexibility in executing or undoing operations.
- Supports undo/redo by keeping track of executed commands.
- Simplifies complex systems where actions may need to be queued or scheduled.
- Allows logging or replaying commands.

## Real-Life Example: Paint Application
Consider a simple Paint Application where users can draw shapes (like lines, circles), change colors, and undo/redo actions. Each user action (like drawing a line or changing a color) can be represented as a command, making it easy to execute, undo, or redo them.

### Scenario
- A user draws a line on the canvas.
- Then, the user changes the color of the line.
- The user decides to undo the color change but keep the line drawn.
- The user draws a circle and later undoes both actions (circle and line drawing).

### Key Components in the Paint Application
- Command: Each drawing action (like drawing shapes, changing color) is encapsulated as a command.
- Invoker: The application that triggers the commands (e.g., user input like clicking a button or drawing).
- Receiver: The canvas where the commands (drawing, color changes) are executed.
- Undo/Redo Stack: A stack to store the command history, allowing users to undo or redo actions.
