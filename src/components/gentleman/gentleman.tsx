import { useEffect, useState } from 'react';
import { gentlemen } from '../../models/gentleman';
import { GentlemanType } from '../../types/gentlemanType';
import { ButtonDelete } from '../buttons/buttonDelete';
import { ButtonSelect } from '../buttons/buttonSelect';

export function Gentleman({
    gentlemanInfo,
    deleteGentleman,
    manageNumOFSelected,
}: {
    gentlemanInfo: GentlemanType;
    deleteGentleman: (id: string) => void;
    manageNumOFSelected: () => void;
}) {
    const [isSelected, setElement] = useState(gentlemanInfo.selected);
    const selectGentleman = () => {
        if (isSelected) return;
        gentlemen.forEach((element) => {
            if (element.id === gentlemanInfo.id) {
                element.selected = true;
            }
        });

        setElement(true);
        manageNumOFSelected();
    };

    const changeClassName = () => {
        if (gentlemanInfo.selected) {
            console.log('change');
            setElement(true);
        }
    };

    useEffect(changeClassName, [gentlemanInfo.selected]);

    return (
        <li className="gentleman" id={`id_${gentlemanInfo.id}`}>
            <div className="gentleman__avatar-container">
                <img
                    className={`${
                        isSelected ? 'avatar--selected' : ''
                    } gentleman__avatar`}
                    src={`assets/${gentlemanInfo.picture}`}
                    alt="The Fary pointing at you"
                />
                <span className="gentleman__initial">
                    {gentlemanInfo.name[0]}
                </span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{gentlemanInfo.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {gentlemanInfo.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>
                        {gentlemanInfo.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>
                        {gentlemanInfo.twitter}
                    </li>
                </ul>
            </div>
            <ButtonSelect
                isSelected={gentlemanInfo.selected}
                markSelected={selectGentleman}
            ></ButtonSelect>
            <ButtonDelete removeElement={deleteGentleman}></ButtonDelete>
        </li>
    );
}
