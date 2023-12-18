import React, { useState, useEffect } from 'react'

const Dropdown = ({ onUseCaseChange, onStepClick, stepsByUseCase }) => {
    const [useCase, setUseCase] = useState(null)
    const [currentStep, setCurrentStep] = useState(null)

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

    const handleUseCaseChange = (event) => {
        const selectedUseCase = event.target.value
        setUseCase(selectedUseCase)
        setCurrentStep(null)
        onUseCaseChange(selectedUseCase)
    };

    const handleStepClick = (step) => {
        setCurrentStep(step)
        onStepClick(useCase, step)
    };

    useEffect(() => {
        setCurrentStep(null)
    }, [useCase])

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
    )
}

export default Dropdown;
