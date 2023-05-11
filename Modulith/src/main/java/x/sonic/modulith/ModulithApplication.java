package x.sonic.modulith;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import x.sonic.modulith.product.ProductService;
import x.sonic.modulith.product.internal.Product;

@EnableAsync
@SpringBootApplication
public class ModulithApplication {

	public static void main(String[] args) {
		SpringApplication.run(ModulithApplication.class, args)
                .getBean(ProductService.class)
                .create(new Product("Product 1", "Description 1", 100));
	}
}