
type Props = {
    fontSize: string,
    text: string,
}

export const Title = ({ fontSize, text }: Props)=> {

    return(
        <h1 className={`tracking-tighter ${fontSize}`}>{text}</h1>
    )

}