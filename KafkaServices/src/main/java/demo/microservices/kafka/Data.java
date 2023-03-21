package demo.microservices.kafka;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Data {
    private final String name;
    private final String value;
}