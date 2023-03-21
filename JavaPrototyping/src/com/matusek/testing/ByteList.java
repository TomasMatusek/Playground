package com.matusek.testing;

import java.util.ArrayList;
import java.util.List;

public class ByteList {
    public static void main(String[] args) {
        getList().forEach(i -> System.out.println(new String(i)));
    }

    private static List<byte[]> getList() {
        List<byte[]> list = new ArrayList<>();
        for (int  i = 0; i < 1000000; i++) {
            list.add(("Test " + i).getBytes());
        }
        return list;
    }
}
