package online.apptesting.springservice.user.service.exception;

public class UserNotFound extends RuntimeException {
    public UserNotFound(int userId) {
        super("User with id " + userId + " not found");
    }
}