export function ButtonSelectAll() {
    const selectAll = () => {
        console.log('deleted');
    };
    return (
        <button className="button button--select" onClick={selectAll}>
            Select all
        </button>
    );
}
