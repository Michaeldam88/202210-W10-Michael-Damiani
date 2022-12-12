import { LegacyRef, useRef } from 'react';

export function ButtonSelect() {
    const ref = useRef<HTMLElement>(null);
    const selectGentleman = () => {
        if(ref && ref.current)ref.current.style.display = 'flex';
    };

    return (
        <i
            ref={ref}
            className="icon gentleman__icon fas fa-check"
            onClick={selectGentleman}
        ></i>
    );
}
