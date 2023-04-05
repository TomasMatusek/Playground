package online.apptesting.springservice.general.error;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class ServiceErrorController implements ErrorController {

    @RequestMapping(value = "/error", produces = "application/json")
    public @ResponseBody ErrorResponse handleError(HttpServletRequest request) {
        return new ErrorResponse(
                404,
                "Not found",
                request.getRequestURI(),
                new Date().toString()
        );
    }
}