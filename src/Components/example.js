export default `
classDiagram
direction TD
class Party {
  Party ID
  Active Flag
  Onboarding Status
  Core Party Data
}
class Prospect {
  Prospect ID
  Advisor ID
  CRM ID
  Registration Status
  Core Prospect Data
}
class Sponsor {
  Sponsor ID
  Registration Status
  Core Sponsor Data
}
class PracticeFirm{
  Practice ID
  Registration Status
  Core Practice Data
}
class Advisor {
  Advisor ID
  Party ID
  Practice ID
  Registration Status
  Core Advisor Data
}
class AdvisorRole{
  Advisor Role ID
  Party ID
  Practice ID
  Advisor Role Type
  Registation Status
  Core Advisor Role Data
}
class ClientInvestor["Client/Investor"]{
  Investor ID
  Party ID
  Household ID
  Onboarding Status
  Core Investor Data
}
class ContractDetails{
  Contract ID
  Compliance Status
  Core Contract Detail Data
  Fees
  Commissions
  Split Revenue
}
class Contract {
  Contract ID
  Advisor ID
  Compliance Status
  Core Contract Data
}
class Account {
  Account ID
  Investor ID
  Advisor ID
  Compliance Status
  Core Account Data
}
class Position {
  Position ID
  Account ID
  Instrument/Product ID
  Core Position Data
}
class LegalEntity{
  Legal Entity ID
  Broker Dealer ID
  Compliance Status
  Core Legal Entity Data
}
class Service {
  Service ID
  Instrument/Product ID
  Registration Status
  Core Service Data
}
class InstrumentProduct{
  Instrument/Product ID
  Instrument/Product Type
  Registration Status
  Core Instrument/Product Data
  Core Pricing Data
}
class Transaction {
  Transaction ID
  Account ID
  Instrument/Product ID
  Core Transaction Data
}

Party -- Advisor
Party -- AdvisorRole
Advisor -- AdvisorRole
PracticeFirm -- Advisor
Party -- ClientInvestor
ClientInvestor -- Account
Party -- PracticeFirm
Party -- Sponsor
Contract -- Advisor
Contract -- Account
Contract -- ContractDetails
Contract -- LegalEntity
Contract -- Service
Contract -- InstrumentProduct
Contract -- PracticeFirm
Contract -- Sponsor
Account -- Transaction
Transaction -- Position
Transaction -- InstrumentProduct
Service -- InstrumentProduct

  
    `;
