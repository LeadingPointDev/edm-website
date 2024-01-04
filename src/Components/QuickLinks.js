import { Link } from 'react-router-dom';

function QuickLinks() {
    return (
        <div className="quicklinks">
            <h3>Quick Links</h3>

            <Link to="/edm">Data Model</Link>
            <p><a href="http://10.124.225.54:8443">Log in to Waltz</a></p>
            <p>Data Policy & Standards</p>
            <ul>
                <li><a href="http://sharepoint.corp.lpl.com/site/E/EnterpriseDataGovernance/Shared%20Documents/Enterprise%20Data%20Governance%20Policy.pdf"
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Governance Policy</a>
                </li>
                <li><a href="http://sharepoint.corp.lpl.com/site/E/EnterpriseDataGovernance/Shared%20Documents/Enterprise%20Data%20Catalog%20Standard.pdf"
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Catalog Standard</a>
                </li>
                <li><a href="http://sharepoint.corp.lpl.com/site/E/EnterpriseDataGovernance/Shared%20Documents/Enterprise%20Data%20Governance%20Asset%20Designation%20Standard.pdf"
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Governance Asset Designation Standard</a>
                </li>
                <li><a href="http://sharepoint.corp.lpl.com/site/E/EnterpriseDataGovernance/Shared%20Documents/Enterprise%20Data%20Governance%20Classification%20&%20Sensitivity%20Standard.pdf"
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Governance Classification & Sensitivity Standard</a>
                </li>
                <li><a href="http://sharepoint.corp.lpl.com/site/E/EnterpriseDataGovernance/Shared%20Documents/Enterprise%20Data%20Quality%20Standard.pdf"
                    style={{ color: "blue", padding: 0, border: 0 }}>Enterprise Data Quality Standard</a>
                </li>
            </ul>
        </div >
    )
}

export default QuickLinks