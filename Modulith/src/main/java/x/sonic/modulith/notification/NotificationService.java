package x.sonic.modulith.notification;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private static final Logger LOG = LoggerFactory.getLogger(NotificationService.class);

    public void create(NotificationDTO notification) {
        LOG.info("Received notification by module dependency for product {} in date {} by {}.",
                notification.productName(),
                notification.date(),
                notification.format());
    }
}