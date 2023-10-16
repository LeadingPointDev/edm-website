import Mapper from "./Mapper";

function Edm() {
    return (
        <div>
            <h2>Data Foundation: Enterprise Data Model Level 1 (Subject Area Model)</h2>
            <h3>What is an Enterprise Data Model? (EDM)</h3>
            <ul>
                <li>An EDM is a simplified and standardized visual representation of an organization's
                    critical data objects and attributes, their relationships, and rules governing their
                    structure and behavior.
                </li>
                <li>The primary use of an EDM is to promote consistency, understanding, and integration
                    of data across the enterprise.
                </li>
            </ul>
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