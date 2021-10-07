export type InputPropsType ={
        value?: string
}
export const Input = (props: InputPropsType) => {
    return (
        <>
            <input value={props.value}/>
            <button>SEND</button>
        </>
    )
}