# JavaScript-Nullish-Coalescence

Nullish coalescence is a new feature in JavaScript that allows you to safely assign default values to variables. It is a concise and effective way to handle null and undefined values in your code.

The nullish coalescence operator is written as "??". It works by evaluating the expression on the left side of the operator and returning it if it is not null or undefined. If the expression is null or undefined, the operator returns the expression on the right side of the operator.

Here is an example of nullish coalescence in JavaScript:

```
let x = null;
let y = undefined;

console.log(x ?? 'default'); // Outputs "default"
console.log(y ?? 'default'); // Outputs "default"
```

In this example, we declare two variables: "x" and "y". Both variables are assigned null or undefined values. We then use the nullish coalescence operator to assign default values to the variables. If the variables are null or undefined, the operator returns the default value; otherwise, it returns the original value.

Nullish coalescence is a useful tool for handling null and undefined values in your code. It allows you to specify default values without having to use the "||" operator, which can sometimes give unexpected results.

Here is an example of how the "||" operator can behave differently from the nullish coalescence operator:

```
console.log(false || 'default'); // Outputs "default"
console.log(null || 'default'); // Outputs "default"
console.log(undefined || 'default'); // Outputs "default"

console.log(false ?? 'default'); // Outputs "false"
console.log(null ?? 'default'); // Outputs "default"
console.log(undefined ?? 'default'); // Outputs "default"
```

In this example, we use the "||" operator and the nullish coalescence operator to assign default values to the variables "false", "null", and "undefined". As you can see, the "||" operator treats "false" as a truthy value and assigns the default value, while the nullish coalescence operator correctly returns the original value.

I hope this documentation has given you a good understanding of nullish coalescence in JavaScript. **Happy Coding**!


