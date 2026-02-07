
export const PrevBtn = ({onClick}) =>{
    return(
        <span onClick={onClick}>
            <MdArrowBackIos size={24}/>
        </span>
    )
}   


export const NextBtn = ({ onClick }) => {
  return (
    <span
         onClick={onClick}   >
         <MdArrowForwardIos size={24} />
    </span>
  );
};