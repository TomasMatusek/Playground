package com.matusek.hackerrank;

import java.util.Arrays;
import java.util.stream.Stream;

public class P006_Sum {

    public static void main(String ...args) {
        int result1 = Arrays.asList(1,2,3,4,5,6).stream().reduce(0, (a, b) -> a + b);
        int result2 = Stream.of(1,2,3,4,5,6).reduce(0, Integer::sum);

        System.out.println(result1);
        System.out.println(result2);
    }
}