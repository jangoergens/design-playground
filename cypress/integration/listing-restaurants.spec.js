describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: 'https://outside-in-dev-api.herokuapp.com/WxF15Gnawut0Nc0TDHeY5YX1yq0zMFmR/restaurants',
      response: [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace},
      ],
    });

    cy.visit('/restaurant');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
