const data = [
    {
        topic: 'Client Insights & Product Personalization​',
        explanation: 'Utilizing advanced analytics on advisor and client data to provide personalized services and tailored investment solutions, improving the client experience.',
    },
    {
        topic: 'Performance Monitoring & Analysis​',
        explanation: 'Enhanced analytics offer insights into investment performance, helping assess strategies, identify trends, and optimize portfolio performance and service delivery through data-driven decisions.',
    },
    {
        topic: 'Client Retention & Growth',
        explanation: 'Analyze client needs to enhance satisfaction, encouraging client retention and potential investment growth, contributing to business expansion.',
    },
    {
        topic: 'Market Research, Trends & Product​',
        explanation: 'Data and analytics for market insights, informed product decisions, and adapting to market changes.',
    },
    {
        topic: 'Operational Efficiency​',
        explanation: 'Data-driven insights optimize processes, resources, and workflows for streamlined operations, increased productivity, and client satisfaction.',
    },
    {
        topic: 'Compliance & Regulation​',
        explanation: 'Data ensures compliance, aids in reporting, audit trails, and meets regulatory standards.',
    },
    {
        topic: 'Fraud Detection & Security​',
        explanation: 'Enhanced data consistency and analytics detect financial anomalies for fraud prevention, bolstering security for the organization and its stakeholders.',
    },
    {
        topic: 'Risk Assessment & Management',
        explanation: 'Accurate, timely data and advanced analytics aid risk evaluation for informed investment decisions and effective portfolio management.',
    },
    {
        topic: 'Business & Strategic Planning​',
        explanation: 'Enhanced data insights on performance, market, and client demographics inform long-term strategies and data-driven decisions.',
    },

];

function Introduction() {
    return (
        <div>
            <h2>Data Foundation: data as a strategic asset</h2>
            <h3>Our <span class="orange">vision is to modernize our data foundation vision</span> via a multi-year journey aimed at enabling scalability,
                elevating our return on technology investment and enabling hyper-personalization​​</h3>
            <p><span class="orange">We have designed a platform that will enable us to be great at data</span>, guided by three key tenets:​</p>
            <ul>
                <li><span class="orange">Scale, performance</span> and resiliency to serve <span class="orange">target-state foundational</span> our growing client base as their businesses expand​</li>
                <li><span class="orange">Flexibility and personalization</span> to represent the range of businesses and activities we support, and to treat our clients as businesses</li>
                <li><span class="orange">Centralized processing and reporting</span> to improve the efficiency and consistency of our data, and retain the trust of our clients​</li>
            </ul>
            <p>As we have moved into execution,<span class="orange"> we are focused on leading with commercial value</span>, and have prioritized three strategic initiatives that represent critical enablers of scale:​</p>
            <ul>
                <li><span class="orange">Enhancing real-time monitoring of intraday trading activity</span>to support scalable solutions for portfolio rebalancing</li>
                <li><span class="orange">Facilitating the standardization and scalability of annuities</span> across our business lines to streamline operational efficiency​</li>
                <li><span class="orange">Creating the fundamental elements for “treat me like a business”</span> from which personalization can be built across our digital platforms</li>
            </ul>

            <p>Lastly, <span class="orange">we are tracking progress</span>, both in terms of execution as well as the business outcomes and experiences enabled by the new foundation</p>

            <h2 class="title">Data Foundations -- designed to support all business activities</h2>
            <table className="table">
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="arrow-cell">
                                <div className="arrow">
                                    <div className="arrow-text">{item.topic}</div>
                                    <div className="arrow-tail"></div>
                                </div>
                            </td>
                            <td className="explanation-cell">{item.explanation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Introduction;