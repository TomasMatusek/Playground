package com.matusek.hackerrank;

import java.util.Arrays;
import java.util.List;

public class P007_BodAlice {

    public static void main(String[] args) {
        List<String> ar = Arrays.asList("5", "");
    }

    public static long aVeryBigSum(List<Long> ar) {
        return ar.stream().reduce(0L, Long::sum);
    }
}
