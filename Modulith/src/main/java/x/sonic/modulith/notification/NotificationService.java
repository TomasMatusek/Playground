package x.sonic.modulith.notification;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.modulith.ApplicationModuleListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import x.sonic.modulith.notification.internal.Notification;
import x.sonic.modulith.notification.internal.NotificationType;

@Service
public class NotificationService {

    private static final Logger LOG = LoggerFactory.getLogger(NotificationService.class);

    @Async
    @ApplicationModuleListener
    public void notificationEvent(NotificationDTO event) {
        Notification notification = toEntity(event);
        LOG.info("Received notification by event for product {} in date {} by {}.",
                notification.getProductName(),
                notification.getDate(),
                notification.getFormat());
    }

    private Notification toEntity(NotificationDTO dto) {
        return new Notification(dto.date(), NotificationType.valueOf(dto.format()), dto.productName());
    }
}