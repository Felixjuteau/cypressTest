Cypress.Commands.add('loginAsAdmin', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/api/auth/login',
        body: {
            username: 'admin',
            password: 'admin'
        }
    }).then((response) => {
        expect(response.status).to.eq(200)

        // ⚠️ à adapter selon ticketflow (JWT / session / cookie)
        const token = response.body.token

        window.localStorage.setItem('token', token)
    })
})