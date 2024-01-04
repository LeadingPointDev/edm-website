import React, { useState, useEffect } from 'react'
import Mapper from "./Mapper"
import Dropdown from "./Dropdown"

function Edm() {
    const [useCase, setUseCase] = useState(null)
    const [currentStep, setCurrentStep] = useState(null)
    const [stepsByUseCase, setStepsByUseCase] = useState(null)

    const handleUseCaseChange = (selectedUseCase) => {
        setUseCase(selectedUseCase)
        setCurrentStep(null)
    };

    const handleStepClick = (selectedUseCase, step) => {
        setCurrentStep(step)
    };

    useEffect(() => {
        setCurrentStep(null);
        setStepsByUseCase({
            'Advisor Onboarding': [
                'Profile Submission',
                'Due Diligence',
                'Compliance Review',
                'Disclosure of Outside Business Activities',
                'Marketing Materials',
                'Collect Signed Contract',
                'Offer Letter',
                'Contract Offer Completed',
                'Registered with LPL',
                'LPL Email and Technology Access Granted',
            ],
            'Investor Onboarding': [
                'LPL Receives Account Analysis Info',
                'De-conversion Files Received',
                'Comparison of Model Spreadsheet Begins -> Collect & Fill Gaps',
                'Advisors Create & Fill Data Requirements',
                'De-conversion Files Evaluated',
                'Non-Financial Conversion',
                'Accounts Enriched (Non-Financial Data)',
                'Accounts Enriched (Financial Data)',
                'Repapering Starts',
            ],
            'Annuity Opening': [
                'Selection of Brokerage or SAM Account',
                'Select Sponsor in Annuity Order Entry',
                'Choose Purchase',
                'Open Account'
            ],
            'Executing a Trade': [
                'Locate Account to Trade',
                'Review Current State of Account',
                'Review Account Objectives, Cash, Assets, Holdings',
                'Security Search',
                'Pull Real-time Quotes',
                'View Open Orders',
                'Review Account Balance & Share Quantity Info',
                'Enter Order Information',
                'Review Ticket Charge Utility',
                'Enter Available Acceptance & Discretion Info',
                'Review Order'
            ]
        })
    }, [useCase])

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
            <Dropdown onUseCaseChange={handleUseCaseChange} onStepClick={handleStepClick} stepsByUseCase={stepsByUseCase}></Dropdown>
            <Mapper selectedUseCase={useCase} selectedStep={currentStep} stepsByUseCase={stepsByUseCase}></Mapper>
        </div >
    )
}

export default Edm;