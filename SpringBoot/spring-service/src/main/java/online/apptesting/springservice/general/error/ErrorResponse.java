package online.apptesting.springservice.general.error;

public record ErrorResponse(
    int status,
    String message,
    String path,
    String timestamp) {
}