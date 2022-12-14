import { useRef } from 'react';

export function ButtonDelete({
    removeElement,
}: {
    removeElement: (id: string) => void;
}) {
    const ref = useRef<HTMLElement>(null);

    const deleteGentleman = () => {
        if (ref && ref.current && ref.current.parentElement)
            removeElement(ref.current.parentElement.id);
    };
    return (
        <i
            ref={ref}
            className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            onClick={deleteGentleman}
        ></i>
    );
}
