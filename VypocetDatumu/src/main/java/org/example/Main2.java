package org.example;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Main2 {

    public static void main(String[] args) {
        vypocitaj(LocalDate.of(2023,7,28));
    }

    private static void vypocitaj(LocalDate datumPorodu) {
        double rodicakFixny = 420;
        double vymeriavaciZaklad = 40.93;
        double denMaterskej = (vymeriavaciZaklad * 0.75);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        System.out.println("======================================");
        System.out.println("Datum porodu: " + datumPorodu.format(formatter));

        LocalDate materskaDo = datumPorodu.minusWeeks(6);
        LocalDate materskaOd = datumPorodu.minusWeeks(8);
        System.out.println("Moznost nastupu na matersku (6 - 8 tyzdnov pre porodom): " + materskaOd.format(formatter) + " - " + materskaDo.format(formatter));
        System.out.println("Vymeriavaci zaklad: " + vymeriavaciZaklad + " EUR z toho 75%: " + String.format("%.2f", denMaterskej) + " EUR");
        System.out.println("======================================");


        for (int i = 0; i < 15; i++) {
            LocalDate datum = materskaOd.plusDays(i);
            LocalDate datumUkoncenia = datum.plusWeeks(34);

            // Pointa je ukoncit Matersku na konci mesiaca aby nabehol uz aj Rodicak (sa vyplaca aj za len 1 den v mesiaci)
            // Materska je vzdy 34 tyzdnov
            System.out.println(
                    "Datum nastupu: " + datum.format(formatter) + ", " +
                    "Datum ukoncenia (po 34t): " + datumUkoncenia.format(formatter) + ", " +
                    "Eur materska (" + datumUkoncenia.getDayOfMonth() + " dni * " + String.format("%.2f", denMaterskej) +"): " + String.format("%.2f", datumUkoncenia.getDayOfMonth() * denMaterskej));
            System.out.println("======================================");
        }
    }
}