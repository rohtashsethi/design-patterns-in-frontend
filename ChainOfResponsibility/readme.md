# Chain of Responsibility Pattern
The Chain of Responsibility Pattern allows you to pass a request along a chain of handlers, where each handler decides whether to process the request or pass it to the next handler.

## Usage
Useful for:
- Event handling
- Middleware systems
- Form validation or request processing

## Real-Life Example
In a form validation system, each field might go through multiple validation steps. If a step fails, the chain stops.
