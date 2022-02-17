
/* 
const promise1 = new Promise((resolve, reject)=>{
    //resolve(`veriler al`);
    reject();


});
console.log(promise1);


Promise { <rejected> undefined }
node:internal/process/promises:246
          triggerUncaughtException(err, true -----> fromPromise );   
          ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "undefined".] {
  code: 'ERR_UNHANDLED_REJECTION'
} 
*/

/* const promise1 = new Promise((resolve, reject)=>{
    resolve(`veriler alındı`);
    


});
console.log(promise1); // Promise { `veriler alındı` }

promise1.then(value=>{
    console.log(value); // veriler alındı
})

// Resolve ile çözülmüş olanı .then ile yakaldık.
const promise2 = new Promise((resolve, reject)=>{
    //resolve(`veriler al`);
    reject(`Bağlantı HATASI`);


});
console.log(promise2);

promise2.catch(err=>{
    console.log(err);
});
 */
const promise1 = new Promise((resolve, reject) => {
    resolve(`veriler alındı`);
    reject(`Bağlantı HATASI`);


});

promise1
    .then(value => {
        console.log(value);

    }).catch(err => {
        console.log(err);

    });

// resolve sonucu döner.
/* bir kere resolve ile sorun çözüldükten sonra reject döndürmenin bir mantığı yok
dönemezde zaten, promisein statei değişemez ilk yakaladığını döndürür. 
rejecti promise içinde resolveun üstüne yazsaydık bağlantı hatası döndürürdü.

Promise bir işlemin sonucunu temsil eden bir JS nesnesidir.

*/