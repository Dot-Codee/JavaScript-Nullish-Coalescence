function printUser(name) {
    console.log('Username:', name?.trim() || 'Anonymous');
}

printUser('  '); // ''

function printUserUpdated(name) {
    console.log('Username:', name?.trim() ?? 'Anonymous');
}

printUserUpdated('  ');
