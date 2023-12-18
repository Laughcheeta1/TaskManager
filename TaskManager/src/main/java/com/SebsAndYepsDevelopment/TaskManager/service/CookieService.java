package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.NoCookiesException;
import jakarta.servlet.http.Cookie;

public interface CookieService {
    void validateCookies(Cookie[] cookies) throws NoCookiesException;
}
