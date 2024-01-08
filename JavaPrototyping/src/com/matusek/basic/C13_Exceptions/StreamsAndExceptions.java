package com.matusek.basic.C13_Exceptions;

import java.util.Arrays;

public class StreamsAndExceptions {

    public static void main(String[] args) {
        Arrays.asList("1", "2", "3", "4", "5", "6", "7", "8", "9").stream()
                .map(StreamsAndExceptions::parseNumberUnchecked)
                .forEach(System.out::println);

        // Execution will stop on first exception
//        Arrays.asList("1", "2", "3", "4", "5", "6a", "7", "8", "9").stream()
//                .map(StreamsAndExceptions::parseNumberUnchecked)
//                .forEach(System.out::println);

        // Try catch block is required inside map function
        Arrays.asList("1", "2", "3", "4", "5", "6a", "7", "8", "9").stream()
                .map((number) -> {
                    try {
                        return StreamsAndExceptions.parseNumberChecked(number);
                    } catch (CheckedException e) {
                        throw new UnCheckedException("Cannot parse number from string: " + number);
                    }
                })
                .forEach(System.out::println);
    }

    private static int parseNumberUnchecked(String s) throws UnCheckedException {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException e) {
            throw new UnCheckedException("Cannot parse number from string: " + s);
        }
    }

    private static int parseNumberChecked(String s) throws CheckedException {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException e) {
            throw new CheckedException("Cannot parse number from string: " + s);
        }
    }

}
