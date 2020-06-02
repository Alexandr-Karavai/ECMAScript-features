const emulate = (id, ms) => new Promise(resolve => {
    setTimeout(() => resolve(id), ms);
});

const promises = [
    emulate(1, 550),
    emulate(2, 1000),
    emulate(3, 2500)
];

async function old() {
    for (const promise of await Promise.all(promises)) {
        console.log(`Old: ${promise}`);
    }
}

async function modern() {
    for await (const promise of promises) {
        console.log(`New: ${promise}`);
    }
}

//old();

modern();