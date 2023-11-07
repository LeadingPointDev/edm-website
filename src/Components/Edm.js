import Mapper from "./Mapper";

function Edm() {
    return (
        <div>
            <h2>Data Foundation: Enterprise Data Model Level 1 (Subject Area Model)</h2>
            <h3>What is an Enterprise Data Model? (EDM)</h3>
            <p>An Enterprise Data Model (EDM) is a structured and organized view of all the data that we use,
                showing how the pieces of information are connected and related – a comprehensive and integrated
                view of our data assets and their relationships. The EDM provides a master guide, making sure
                everyone in the organisation speaks the same data language and uses information in a consistent way.​</p>
            <p>A consistent, well defined and understood set of Enterprise Data Models (EDMs)
                is critical to the strategic data objectives and realizing the 'Treat Me Like a Business’ TMLB
                and Hyper-Personalisation objectives out of the major Granite investment.</p>
            <ul>
                <li>Below depicts the target EDM at Level-1 (Subject Area Model), click
                    on the subject area to see further details.
                </li>
            </ul>
            <Mapper></Mapper>
        </div>
    );
}

export default Edm;