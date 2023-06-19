package com.flight.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flight.demo.FeedbackServiceApiApplication;
import com.flight.pojo.Feedback;
import com.flight.service.FeedbackService;

@CrossOrigin("*")
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
	
	static Logger logger=Logger.getLogger(FeedbackServiceApiApplication.class);
	@Autowired
	FeedbackService feedbackService;
	
	@GetMapping("/getAllFeedback")
	public ResponseEntity<List<Feedback>> getAllFeedback(){
		logger.info("Getting all feedback controller is executing.....");
		return new ResponseEntity<>(feedbackService.getAllFeedbacks(), HttpStatus.OK);
		
	}
	
	
	@PostMapping("/addFeedback")
	public Feedback addFeedbacks(@RequestBody Feedback feedback) {
		logger.info("Getting  feedback  is adding controller is executing.....");
		return feedbackService.addFeedback(feedback);
	}


	
	

}
