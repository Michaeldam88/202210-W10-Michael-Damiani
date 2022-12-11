export function ButtonDelete() {
    const deleteGentleman = () => {
        console.log('deleted');
    };
    return (
        <i
            className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            onClick={deleteGentleman}
        ></i>
    );
}
