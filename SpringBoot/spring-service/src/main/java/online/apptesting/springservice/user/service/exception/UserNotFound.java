package online.apptesting.springservice.user.service.exception;

import graphql.ErrorClassification;
import graphql.GraphQLError;
import graphql.language.SourceLocation;

import java.util.Collections;
import java.util.List;
import java.util.Map;

public class UserNotFound extends RuntimeException implements GraphQLError {

    public UserNotFound(int userId) {
        super("User with id " + userId + " not found");
    }

    @Override
    public List<Object> getPath() {
        return GraphQLError.super.getPath();
    }

    @Override
    public Map<String, Object> toSpecification() {
        return GraphQLError.super.toSpecification();
    }

    @Override
    public Map<String, Object> getExtensions() {
        return GraphQLError.super.getExtensions();
    }

    @Override
    public List<SourceLocation> getLocations() {
        return Collections.emptyList();
    }

    @Override
    public ErrorClassification getErrorType() {
        return new ErrorClassification() {
            @Override
            public Object toSpecification(GraphQLError error) {
                return ErrorClassification.super.toSpecification(error);
            }
        };
    }
}