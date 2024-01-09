package app.test.eterium

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class EteriumController {

    @GetMapping("/")
    fun hello(): String {
        return "Hello, World!"
    }
}