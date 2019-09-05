### Javascript Crash Course

- Variables & Data Type
- Arrays
- Objects Literais
- Methods for Strings, arrays, objects, etc
- Loops - for, while, for..of, forEach, map
- Considitonals(if, ternary & switch)
- Function (normal & Arrow)
- OOP (prototypes & classes)
- DOM Selection
- DOM manipulation
- Events
- Basic Form Validation

### Console Methods

- console.log()
- console.warn()
- console.error()

### let e const

### Data Types

- String
- Numbers
- Booleans
- null (objects)
- undefined

### String Methods

- length
- toUpperCase()
- toLowerCase()
- substring()
- split()

### Arrays methods

- push()
- pop()
- unshift()
- shift()
- slice()
- toString()
- isArray()
- splice()
- indexOf()

### Objects

- JSON - JSON.stringify()

### Loops

- for

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- while

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

- forEach

```javascript
todos.forEach(function(todo) {
  console.log(todo.text);
});
```

- map

```javascript
const todoText = todos.map(function(todo) {
  return todo.text;
});
```

- filter

```javascript
const todoId = todos.filter(function(todo) {
  return todo.isCompleted == true;
});

console.log(todoId);
```

- filter, map

```javascript
const todoId = todos
  .filter(function(todo) {
    return todo.isCompleted == true;
  })
  .map(function(todo) {
    return todo.text;
  });

console.log(todoId);
```

## Conditionals

- if
- if else
- switch

## Function

- constructor
- Instancia
- Prototype
- class

## DOM
