# Domain

Hardware Shop Complaint Management

## Entities

- Customer
- Complaint
- Ticket
- Conversation

## Value Objects

- Category
- Priority
- Status

## Relationships

Customer (1) -> (*) Complaint

Complaint (1) -> (1) Ticket

Ticket (1) -> (*) Conversation

## Business Rules

- Every complaint belongs to one customer.
- Every ticket is generated from one complaint.
- Ticket ID must be unique.
- AI must gather enough information before ticket creation.
- Every ticket has one status, category, and priority.

## Domain Diagram

                  Customer
                     │
                     │ creates
                     ▼
                Complaint
                     │
         analyzed by AI
                     │
                     ▼
          Structured Complaint
                     │
                     ▼
                  Ticket
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
    Category      Priority      Status
                     │
                     ▼
              Conversation


