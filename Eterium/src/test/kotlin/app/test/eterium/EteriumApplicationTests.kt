package app.test.eterium

import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class EteriumApplicationTests {

	@Test
	fun contextLoads() {
	}

    @Test
    fun hello() {
        val controller = EteriumController()
        assert(controller.hello() == "Hello, World!")
    }
}
