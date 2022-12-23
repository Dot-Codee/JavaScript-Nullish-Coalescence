console.log(false || 'default'); // Outputs "default"
console.log(null || 'default'); // Outputs "default"
console.log(undefined || 'default'); // Outputs "default"

console.log(false ?? 'default'); // Outputs "false"
console.log(null ?? 'default'); // Outputs "default"
console.log(undefined ?? 'default'); // Outputs "default"