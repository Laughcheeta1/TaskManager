package com.SebsAndYepsDevelopment.TaskManager.controller;

import com.SebsAndYepsDevelopment.TaskManager.entity.NoCookiesException;
import com.SebsAndYepsDevelopment.TaskManager.service.CookieService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cookie")
@CrossOrigin(origins = "*")
public class CookieController {
    private final CookieService cookieService;

    @Autowired
    public CookieController(CookieService cookieService) {
        this.cookieService = cookieService;
    }

    @GetMapping("/validate")
    public ResponseEntity<String> validateCookie(HttpServletRequest request) throws NoCookiesException {
        Cookie[] cookies = request.getCookies();
        cookieService.validateCookies(cookies);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("User validated");
    }
}
