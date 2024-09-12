/// <reference types="cypress" />

describe('Juego de Pares', () => {
  beforeEach(() => {
    // Carga tu juego antes de cada prueba
    cy.visit('index.html'); // Asegúrate de que la ruta sea correcta
  });

  it('debería cargar el juego correctamente', () => {
    // Verifica que el estado inicial sea correcto
    cy.get('#estado').should('contain.text', 'Juego de Pares');
    cy.get('#intentos').should('have.text', '0');
    cy.get('.cuadro').should('have.length', 12);
  });

  it('debería permitir iniciar el juego', () => {
    cy.contains('Empezar').click();
    cy.get('#estado').should('contain.text', 'Juega a buscar pares!');
  });

  it('debería permitir seleccionar cuadros y encontrar pares', () => {
    cy.contains('Empezar').click();
    
    // Simula la selección de dos cuadros
    cy.get('.cuadro').first().click().invoke('attr', 'data-color').then((color1) => {
      cy.get('.cuadro').eq(1).click().invoke('attr', 'data-color').then((color2) => {
        if (color1 === color2) {
          cy.get('.cuadro').first().should('have.class', 'revelado');
          cy.get('.cuadro').eq(1).should('have.class', 'revelado');
        } else {
          cy.get('.cuadro').first().should('have.class', 'oculto');
          cy.get('.cuadro').eq(1).should('have.class', 'oculto');
        }
      });
    });
  });

  it('debería incrementar el contador de intentos', () => {
    cy.contains('Empezar').click();
    
    // Simula la selección de dos cuadros
    cy.get('.cuadro').first().click();
    cy.get('.cuadro').eq(1).click();

    cy.get('#intentos').should('not.have.text', '0');
  });
});
