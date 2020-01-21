const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Walter',
        //     age: 30
        // });
        reject('Something went wrong');
    }, 2500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error);
});

console.log('after');