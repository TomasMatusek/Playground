package online.apptesting.springservice.user.service;

import online.apptesting.springservice.user.domain.User;
import online.apptesting.springservice.user.service.exception.UserNotFound;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService implements IUserService {

    private static final Set<User> users = initializeData();

    private static Set<User> initializeData() {
        Set<User> users = new HashSet<>();
        users.add(new User(1, "John", "john@gmail.com"));
        users.add(new User(2, "Mary", "mary@gmail.com"));
        users.add(new User(3, "Peter", "peter@gmail.com"));
        return users;
    }

    @Override
    public User getUser(int userId) throws UserNotFound {
        return users.stream()
                .filter(user -> user.id() == userId)
                .findFirst()
                .orElseThrow(() -> new UserNotFound(userId));
    }

    @Override
    public List<User> getUsers() {
        return new ArrayList<>(users);
    }
}
