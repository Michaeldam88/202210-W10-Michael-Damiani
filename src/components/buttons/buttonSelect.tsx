import { useState } from 'react';

export function ButtonSelect({
    isSelected,
    markSelected,
}: {
    isSelected: boolean;
    markSelected: () => void;
}) {
    const [selected, setSelected] = useState(isSelected);

    const selectGentleman = () => {
        markSelected();
        setSelected((selected) => {
            return (selected = true);
        });
    };

    return (
        <i
            className={`${
                selected ? 'icon--selected' : ''
            } icon gentleman__icon fas fa-check`}
            onClick={selectGentleman}
        ></i>
    );
}
