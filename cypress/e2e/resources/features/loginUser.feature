Feature: Login de usuarios
Mateo como usuario de la página Swag Labs.

    Scenario: Autenticaciòn exitosa
        Given Mateo es un cliente previamente registrado en Swag Labs
        When ingresa su username y su password de manera correcta
            |username|password|
            |standard_user|secret_sauce|
        And pulsa el boton Login
        Then debe poder ingresar a su cuenta