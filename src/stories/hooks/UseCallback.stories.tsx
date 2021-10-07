import React, {useCallback, useMemo, useState} from 'react';


export default {
    title: 'UseCallback',
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')

    const [counter, setCounter] = useState(1)
    const [books, setBooks] = useState(['Learn React', 'Vanilla JS', 'Angular', 'CSS', 'HTML'])

    const newBooks = useMemo(() => {
            return books.filter(b => b.toLowerCase().indexOf('a') > -1)
        },
        [books])


    /*const addBook = () => {
        console.log('new book is added')
        console.log(books)
        const newBooks = [...books, 'Vue' + new Date().getTime()]
        return setBooks(newBooks)
    }*/

    // мемоизируем функцию и пишем зависимость от books
   /* const memoizedAddBook_2Variant = useMemo(() => {
            return () => {
                console.log('new book is added')
                console.log(books)
                const newBooks = [...books, 'Vue' + new Date().getTime()]
                return setBooks(newBooks)
            }
        }, [books]*/
   /* )*/

    // вариант синтаксический еще один.
    // useMemo принимает колбэк, который возвращает объект,
    // а если это фукция(которая тоже как бы обьект на минуточку),
    // то возвращает вызов функции.

  /*  const memoizedAddBook = useMemo(() => {
            return addBook
        }, [books]
    )*/

    const memoizedUseCallbackAddBook = useCallback(() => {
            console.log('new book is added')
            const newBooks = [...books, 'Vue' + new Date().getTime()]
            console.log(newBooks)
            return setBooks(newBooks)
        }
        , [books])
    return <>
        <p>жми кнопку и увидишь в консоли, что перерисовка только у фильтрованных юзеров, остальные сохраняются</p>
        <button onClick={() => setCounter(counter + 1)}> + counter</button>
        {counter}

        <Books books={books} addBook={memoizedUseCallbackAddBook}/>
    </>
}

const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('BookSecret is rendering')
    return <div>
        {props.books.map((b, i) => <div key={i}>{b}</div>)}
        <button onClick={props.addBook}>add book</button>
    </div>
}
//create cash of Users object. if the object is the same, don't render the tree again
//using shallow copy is enough
//
const Books = React.memo(BooksSecret)


