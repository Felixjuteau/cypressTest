// cypress/e2e/tickets.cy.js
describe('API Tickets CRUD', () => {

  let createdTicketId
  beforeEach(()=>{
    cy.loginAsAdmin()
  })
  it('🟩 Create ticket', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/tickets',
      headers: {
        Authorization: "Bearer ${window.localStorage.getItem('token')}"
      },
      body: {
        description: 'Créé par Cypress',
        title: 'Test Ticket Cypress',
        priority: 'P1'

      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
      createdTicketId = response.body.id
    })
  })

  it('🟦 Read ticket', () => {
    cy.request(`GET http://localhost:8080/api/tickets/${createdTicketId}`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.title).to.eq('Test Ticket Cypress')
      })
  })

  it('🟨 Update ticket', () => {
    cy.request({
      method: 'PUT',
      url: `http://localhost:8080/api/tickets/${createdTicketId}`,
      body: {
        title: 'Ticket mis à jour Cypress',
        status: 'IN_PROGRESS'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.title).to.eq('Ticket mis à jour Cypress')
    })
  })

  it('🟥 Delete ticket', () => {
    cy.request({
      method: 'DELETE',
      url: `http://localhost:8080/api/tickets/${createdTicketId}`
    }).then((response) => {
      expect(response.status).to.eq(204)
    })
  })

})
