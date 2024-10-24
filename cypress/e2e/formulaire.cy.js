describe('Test formulaire d\'ajout', () => {
  let email = Math.random().toString(36).substring(2, 15) + '@gmail.com'
  let date = new Date().toISOString().slice(0, 10);
  it('passes', () => {
    cy.visit('https://testing.adrardev.fr/addUser') 
    cy.get('input[name="nom"]').type('DOE')
    cy.get('input[name="prenom"]').type('John')
    cy.get('input[name="mail"]').type(email)
    cy.get('input[name="mdp"]').type('!P4sSw0rD!')
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
      .then(() => {
        cy.request('POST', 'http://testing.adrardev.fr/api/addTest', {
          name: 'Test formulaire d\'ajout',
          valid: 1,
          date: date
        });
      });
  })
  
  /* it('passes', () => {
    cy.visit('http://localhost/github_testing/addUser')
    cy.get('input[name="nom"]').type('DOE')
    cy.get('input[name="prenom"]').type('John')
    cy.get('input[name="mail"]').type(email)
    cy.get('input[name="mdp"]').type('!P4sSw0rD!')
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
      .then(() => {
        cy.request('POST', 'http://localhost/github_testing/api/addTest', {
          name: 'Test formulaire d\'ajout',
          valid: 1,
          date: date
        });
      });
  }) */
/*   it('notpasses', () => {
    cy.visit('http://localhost/github_testing/addUser')
    cy.get('input[name="nom"]').type('DOE')
    cy.get('input[name="prenom"]').type('John')
    cy.get('input[name="mail"]').type(email)
    cy.get('input[name="mdp"]').type('!P4sSw0rD!')
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Les informations sont incorrectes")
  })
  it('notpasses', () => {
    cy.visit('http://localhost/github_testing/addUser')
    cy.get('input[name="nom"]').type('DOE')
    cy.get('input[name="prenom"]').type('John')
    cy.get('input[name="mail"]').type(email)
    /* cy.get('input[name="mdp"]').type('!P4sSw0rD!') 
    cy.get('input[type="submit"]').click()
    cy.get('#msgzone').should('contain', "Veuillez remplir tous les champs du formulaire")
  }) */
})