package x.sonic.modulith.product;

import org.springframework.stereotype.Service;
import x.sonic.modulith.notification.NotificationDTO;
import x.sonic.modulith.notification.NotificationService;
import x.sonic.modulith.notification.internal.NotificationType;
import x.sonic.modulith.product.internal.Product;

import java.util.Date;

@Service
public class ProductService {

    private final NotificationService notificationService;

    public ProductService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void create(Product product) {
        notificationService.create(new NotificationDTO(new Date(), "SMS", product.getName()));
    }
}