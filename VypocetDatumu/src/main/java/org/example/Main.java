package org.example;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

public class Main {
    public static void main(String[] args) {

        // 34 mas
        // Materska
        LocalDate date1 = LocalDate.of(2023,7,28);
        System.out.println("Datum porodu: " + date1);

        int variant1 = 6;
        System.out.println("Minus: " + date1.minusWeeks(8));

        System.out.println("===============================================================");

        // Materska
        LocalDate date2 = LocalDate.of(2023,6,2);
        System.out.println("Date 2: " + date2);
        System.out.println("Plus 34 weeks: " + date2.plusWeeks(34));

        // Rodicak potom
    }
}