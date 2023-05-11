package x.sonic.modulith.product;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import x.sonic.modulith.notification.NotificationDTO;
import x.sonic.modulith.product.internal.Product;

import java.util.Date;

@Service
public class ProductService {

    private final ApplicationEventPublisher events;

    public ProductService(ApplicationEventPublisher events) {
        this.events = events;
    }

    public void create(Product product) {
        events.publishEvent(new NotificationDTO(new Date(), "SMS", product.getName()));
    }
}