package x.sonic.modulith.notification.internal;

import java.util.Date;

public class Notification {

    private final Date date;
    private final String productName;
    private final NotificationType format;

    public Notification(Date date, NotificationType format, String productName) {
        this.date = date;
        this.format = format;
        this.productName = productName;
    }

    public Date getDate() {
        return date;
    }

    public NotificationType getFormat() {
        return format;
    }

    public String getProductName() {
        return productName;
    }
}