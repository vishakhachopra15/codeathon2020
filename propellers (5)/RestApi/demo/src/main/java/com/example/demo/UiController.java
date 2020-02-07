/*

package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.StringJoiner;

@RestController
@RequestMapping("/propeller-ui")
public class UiController {


    @Autowired
    ResourceLoader resourceLoader;


    @GetMapping("/{pages:.*}")
    public String showUi(@PathVariable("pages") final ArrayList<String> pages, HttpServletRequest request) throws IOException {

        String path = "classpath:" + request.getServletPath();
        System.out.println("path ::" + path);
        Resource resource = resourceLoader.getResource(path);

        return new String(FileCopyUtils.copyToByteArray(resource.getInputStream()));

    }
}

*/
