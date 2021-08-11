describe('Pokemon List', () => {

    beforeEach(() => {
      cy.server()
      cy.route('GET', 'https://api.pokemontcg.io/v1/cards', 'fixture:pokemons.json');
      cy.visit('/');
    });

    it('should tittle on pokemon page', () => {
      cy.get('.title')
        .should('contain.text', 'Guia pokémons');
    });

  });