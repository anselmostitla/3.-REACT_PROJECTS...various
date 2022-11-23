export const Posts = ()=>{
    return <button onClick={fetch("https://jsonplaceholder.typicode.com/")
    }>
        Traer datos
    </button>
}