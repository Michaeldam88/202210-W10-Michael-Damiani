import { ButtonSelectAll } from '../buttons/buttonSelectAll';

export function Info({ totalSelected, selectAll }: { totalSelected: number, selectAll: () => void }) {
    return (
        <section className="controls">
            <p className="info">{totalSelected} gentlemen pointing at you</p>
            <ButtonSelectAll selectAllGent={selectAll}></ButtonSelectAll>
        </section>
    );
}
