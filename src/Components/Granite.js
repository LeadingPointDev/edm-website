import granite from "../granite.png"

function Granite() {
    return (
        <div>
            <h2>Data Foundation: Project Granite</h2>
            <p>The proposed approach for project Granite is to leverage the components already built as
                part of the Data Foundations transformation project. While this comes with some combined
                dependency delivery risk, these are outweighed by benefit that include of avoiding the
                complexity of the legacy architecture and positioning Prudential flows on the future state
                architecture.</p>
            <ul>
                <li>Planning details, work breakdowns and progress updates can be found in the project
                    Confluence site,
                    <a href="https://lplfinancial.atlassian.net/wiki/spaces/GRANITE/overview"
                        style={{ padding: 0, border: 0 }}> click here.
                    </a>
                </li>
            </ul>
            <img src={granite} alt="diagram for project granite" />
        </div>
    );
}

export default Granite;