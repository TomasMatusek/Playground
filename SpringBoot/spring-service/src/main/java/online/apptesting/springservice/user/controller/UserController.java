package online.apptesting.springservice.user.controller;

import online.apptesting.springservice.user.domain.User;
import online.apptesting.springservice.user.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class UserController {

    private final IUserService userService;

    @Autowired
    public UserController(IUserService userService) {
        this.userService = userService;
    }

    @QueryMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @QueryMapping
    public User getUser(@Argument int userId) {
        return userService.getUser(userId);
    }
}