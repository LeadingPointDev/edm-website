import React, { useState, useEffect } from 'react';

const Dropdown = ({ onUseCaseChange, onStepClick, stepsByUseCase }) => {
    const [useCase, setUseCase] = useState(null);
    const [currentStep, setCurrentStep] = useState(null);

    const options = [
        'Select a Use Case',
        'Advisor Onboarding',
        'Investor Onboarding',
        'Annuity Opening',
        'Executing a Trade',
    ];

    const descriptions = {
        'Advisor Onboarding':
            'Below are the primary steps and data model flow for onboarding an individual advisor.',
        'Investor Onboarding':
            'Below are the primary steps and data model flow for onboarding investors as part of a merger & acquisitions event.',
        'Annuity Opening':
            'Below are the primary steps and data model flow for product distribution, in regards to limiting Granite Firm to only sell annuities.',
        'Executing a Trade':
            'Below are the primary steps and data model flow for a single order trade entry.',
    };

    // const stepsByUseCase = {
    //     'Advisor Onboarding': [
    //         'Profile Submission',
    //         'Due Diligence',
    //         'Compliance Review',
    //         'Disclosure of Outside Business Activities',
    //         'Marketing Materials',
    //         'Collect Signed Contract',
    //         'Offer Letter',
    //         'Contract Offer Completed',
    //         'Registered with LPL',
    //         'LPL Email and Technology Access Granted',
    //     ],
    //     'Investor Onboarding': [
    //         'LPL Receives Account Analysis Info',
    //         'De-conversion Files Received',
    //         'Comparison of Model Spreadsheet Begins 3b. Collect & Fill Gaps',
    //         'Advisors Create & Fill Data Requirements',
    //         'De-conversion Files Evaluated',
    //         'Non-Financial Conversion',
    //         'Accounts Enriched (Non-Financial Data)',
    //         'Accounts Enriched (Financial Data)',
    //         'Repapering Starts',
    //     ],
    //     'Annuity Opening': [
    //         'Selection of Brokerage or SAM Account',
    //         'Select Sponsor in Annuity Order Entry',
    //         'Choose Purchase',
    //         'Open Account'
    //     ],
    //     'Executing a Trade': [
    //         'Locate Account to Trade',
    //         'Review Current State of Account',
    //         'Review Account Objectives, Cash, Assets, Holdings',
    //         'Security Search',
    //         'Pull Real-time Quotes',
    //         'View Open Orders',
    //         'Review Account Balance & Share Quantity Info',
    //         'Enter Order Information',
    //         'Review Ticket Charge Utility',
    //         'Enter Available Acceptance & Discretion Info',
    //         'Review Order'
    //     ]
    // };

    const handleUseCaseChange = (event) => {
        const selectedUseCase = event.target.value;
        setUseCase(selectedUseCase);
        setCurrentStep(null); // Reset currentStep when useCase changes
        // Call the callback function in Edm.js to update useCase
        onUseCaseChange(selectedUseCase);
    };

    const handleStepClick = (step) => {
        setCurrentStep(step);
        onStepClick(useCase, step);
    };

    useEffect(() => {
        setCurrentStep(null); // Reset the current step when the use case changes
    }, [useCase]);

    return (
        <div className="dropdown-container">
            <select id="useCase" value={useCase} onChange={handleUseCaseChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {useCase ? (
                <div>
                    <p>{descriptions[useCase]}</p>
                    {stepsByUseCase[useCase] && (
                        <div className="onboarding-step-container">
                            {stepsByUseCase[useCase].map((step, index) => (
                                <div key={index}>
                                    <button
                                        className={`onboarding-step ${currentStep === step ? 'onboarding-step-selected' : ''}`}
                                        onClick={() => handleStepClick(step)}
                                    >
                                        {`${index + 1}. ${step}`}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <p>Select a use case scenario to view the associated data model and path.</p>
            )}
        </div>
    );
};

export default Dropdown;
