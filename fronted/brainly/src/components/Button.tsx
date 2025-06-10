interface ButtonProps{
    variant:"primary"|"secondary";
    text:"string";
    size:"sm"|"md"|"lg";
    startIcon?:any;
    endIcon?:any;
    onClick:()=>void;
}

export const Button=(props:ButtonProps)=>{
    return <button>hoc</button>

}