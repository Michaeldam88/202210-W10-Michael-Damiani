export function ButtonSelect({ gentlemanName }: { gentlemanName: string }) {
    const selectGentleman = () => {
        const button = document.querySelector(
            `#${gentlemanName} .icon--select`
        );
        console.log(gentlemanName);
        button?.classList.add('.flex');
    };
    return (
        <i
            className="icon icon--select gentleman__icon fas fa-check"
            onClick={selectGentleman}
        ></i>
    );
}
