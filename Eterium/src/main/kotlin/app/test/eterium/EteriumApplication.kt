package app.test.eterium

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class EteriumApplication

fun main(args: Array<String>) {
	runApplication<EteriumApplication>(*args)
}