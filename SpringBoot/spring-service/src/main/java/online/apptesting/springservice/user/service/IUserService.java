package online.apptesting.springservice.user.service;

import online.apptesting.springservice.user.domain.User;

import java.util.List;

public interface IUserService {
    User getUser(int id);
    List<User> getUsers();
}