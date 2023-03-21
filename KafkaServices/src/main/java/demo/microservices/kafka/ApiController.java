package demo.microservices.kafka;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @ResponseBody()
    @GetMapping("/api")
    public Data hello() {
        return new Data("api", "hello");
    }
}