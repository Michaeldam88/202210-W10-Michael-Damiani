import { GentlemanType } from '../../types/gentlemanType';
import { ButtonDelete } from '../buttons/buttonDelete';
import { ButtonSelect } from '../buttons/buttonSelect';

export function Gentleman({ gentlemanInfo }: { gentlemanInfo: GentlemanType }) {
        
    return (
        <li className="gentleman" id={gentlemanInfo.name}>
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
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
            <ButtonSelect gentlemanName={gentlemanInfo.name}></ButtonSelect>
            <ButtonDelete></ButtonDelete>
        </li>
    );
}
