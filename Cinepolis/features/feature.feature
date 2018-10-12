@watch
Feature: Cinepolis
    @FiltroHorario
    Scenario: Confirm filter
        Given we are in Cinepolis
        Then we click Input "#cmbCiudades"
        And we select "San Pedro" from "#cmbCiudades"
        And we click on "//*[@id='busqueda']/div[3]/input"
        #24Hrs Format with increments of 1h
        Then we move slider "#slider-range" from "11:00" to "17:00"
        And we confirm range applied on ".btn.btnhorario.ng-scope > a" from "11:00" to "17:00"

    # @Confirmar
    # Scenario: Confirm same schedule
    #     Given we are in Cinepolis
    #     Then we click Input "#cmbCiudades"
    #     When we find "San Pedro"
    #     Then we select "San Pedro"
    #     And we click on '//*[@id="busqueda"]/div[3]/input'
