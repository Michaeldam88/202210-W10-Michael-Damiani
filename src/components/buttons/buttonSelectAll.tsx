export function ButtonSelectAll({ selectAllGent }: { selectAllGent: () => void }) {
    
    return (
        <button className="button button--select" onClick={selectAllGent}>
            Select all
        </button>
    );
}
