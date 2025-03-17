
describe('API Tests', () => {

  it('Log in successfully', () => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body:{
            email: 'fulano@qa.com',
            password: 'teste'
        }
    }).then((response) => {
        expect(response.status).to.eq(200); 
        expect(response.body).to.have.property('message','Login realizado com sucesso'); 
  
      });
    });

it('Login with invalid password', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            failOnStatusCode: false,
            body:{
                email: 'fulano@qa.com',
                password: 'test'
            }
        }).then((response) => {
            expect(response.status).to.eq(401); 
            expect(response.body).to.have.property('message','Email e/ou senha inválidos'); 
      });
    });

 it('Register user that already exists', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            failOnStatusCode: false,
            body:{
                nome: 'Fulano da Silva',
                email: 'beltrano@qa.com.br',
                password: 'teste',
                administrador: 'true'
                  }
        }).then((response) => {
            expect(response.status).to.eq(400); 
            expect(response.body).to.have.property('message','Este email já está sendo usado'); 
      });
    });
});

