import { ButtonSelectAll } from "../buttons/buttonSelectAll";

export function Info({ totalSelected }: { totalSelected :number}) {
    return (
        <section className="controls">
            <p className="info">{totalSelected} gentlemen pointing at you</p>
            <ButtonSelectAll></ButtonSelectAll>
        </section>
    );
}
