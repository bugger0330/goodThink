package com.think.good.controller.page;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageHomeController {

	@GetMapping("/")
	public String home() {
		return "/";
	}
	
	
}
