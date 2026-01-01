package com.backend.ashikadb.controller;

import com.backend.ashikadb.service.DbCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
public class HealthController {

    @Autowired
    private DbCheckService service;

    @GetMapping("/db")
    public String checkDb() {
        return service.isDbUp() ? "DB Connected Successfully" : "DB is DOWN : connection error";
    }
}
