export function ButtonSelect({
    isSelected,
    markSelected,
}: {
    isSelected: boolean;
    markSelected: () => void;
}) {
    return (
        <i
            className={`${
                isSelected ? 'icon--selected' : ''
            } icon gentleman__icon fas fa-check`}
            onClick={markSelected}
        ></i>
    );
}
