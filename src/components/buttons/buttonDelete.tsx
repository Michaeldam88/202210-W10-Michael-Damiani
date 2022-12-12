export function ButtonDelete({
    removeElement,
}: {
    removeElement: (id: string) => void;
}) {

    const check = () =>{
        console.log(removeElement("id_1"));
    }
    return (
        <i className="icon gentleman__icon gentleman__icon--delete fas fa-times" onClick={check}></i>
    );
}
