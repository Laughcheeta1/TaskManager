package com.SebsAndYepsDevelopment.TaskManager.service;

import com.SebsAndYepsDevelopment.TaskManager.entity.NoCookiesException;
import jakarta.servlet.http.Cookie;
import org.springframework.stereotype.Service;

@Service
public class CookieServiceImplementation implements CookieService{
    @Override
    public void validateCookies(Cookie[] cookies) throws NoCookiesException {
        if (cookies == null || cookies.length == 0)
            throw new NoCookiesException();

        // TODO: finish this method
        /*
        to be able to do it, you need to find where the cookie that is being sent, is being generated, after that, check wether you should check the existence of the user,
        by either using .getValue() or .getName()

        Could do that, or just remove the cookies altogether (For now), and if I have time remaining, then re implement them.
        This can be done throught removing the validate user, part in the react.
        Like, removing that validate from each page will make it so the cookies are not validated when entering the page, that way we can avoid dealing with
        coookies for now without having to directly get rid of thems
         */

        cookies[0].getValue();
    }
}
