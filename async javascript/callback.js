/* console.log(`1.görev`);
console.log(`2.görev`);
console.log(`3.görev`);
console.log(`4.görev`); */

/* 
Returns; 1.görev   
         2.görev
         3.görev
         4.görev */

/* const func1 = ()=>{

    console.log(`Func1 tamamlandı.`);
}
const func2 = ()=>{

    console.log(`Func2 tamamlandı.`);
}
const func3 = ()=>{

    console.log(`Func3 tamamlandı.`);
}

func2()
func1()
func3() */

/* 
Func2 tamamlandı
Func1 tamamlandı
Func3 tamamlandı
*/

const func1 = ()=>{
    func2()
    console.log(`Func1 tamamlandı.`);

    
}
const func2 = ()=>{

    console.log(`Func2 tamamlandı.`);

    func3()
}
const func3 = ()=>{

    console.log(`Func3 tamamlandı.`);
}
//func1()

/* 
Func2 tamamlandı.
Func3 tamamlandı.
Func1 tamamlandı. */


//*************---------------------*******************--------------------**********************---------
//single thread***--- js senkron

/* let x=5;
console.log(`1.gelen veri;`+x);

setTimeout(() => {
    x=x+5
    console.log(`2.gelen veri;`+x);
}, 5000);

x=x+5;
console.log(`3.gelen veri;`+x); */

/* 1.gelen veri;5
3.gelen veri;10
2.gelen veri;15 */

const books= [
    {name: `book1`, author: `yazar1`},
    {name: `book2`, author: `yazar2`},
    {name: `book3`, author: `yazar3`}

]

const listBooks = ()=>{
    books.map(a =>{
        console.log(a.name);

    })


}
listBooks();
/* book1
book2
book3 */

const addBook = (newBook)=>{
    books.push(newBook);


}
addBook({name: `book4`, author: `yazar4`});
/* 
book1
book2
book3
döner sanki yukardaki fonksiyon bir işe yaramamış gibi 
ama yukardaki listBooks u addBook dan sonra yazarsak her şey istediğimiz gibi olur.*/
