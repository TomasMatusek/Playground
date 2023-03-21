package com.matusek.testing;

import java.util.Arrays;
import java.util.List;

public class GetLastListElements {

    public static void main(String[] args) {
        List<String> list1 = Arrays.asList("1","2","3","4","5");
        List<String> list2 = Arrays.asList("1","2","3");
        List<String> list3 = Arrays.asList("1","2");

        // Get last 3 (or last N if N < 3) elements from array
        int lastN = 3;
        list1.stream().skip(Math.max(0, list1.size() - lastN)).forEach(System.out::println);
    }
}
