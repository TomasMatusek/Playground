package x.sonic.modulith;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import x.sonic.modulith.product.internal.Product;
import x.sonic.modulith.product.ProductService;

@SpringBootApplication
public class ModulithApplication {

	public static void main(String[] args) {
		SpringApplication.run(ModulithApplication.class, args)
                .getBean(ProductService.class)
                .create(new Product("Product 1", "Description 1", 100));
	}
}