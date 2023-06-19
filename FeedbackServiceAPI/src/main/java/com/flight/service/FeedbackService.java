package com.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.flight.pojo.Feedback;
import com.flight.repository.FeedbackRepository;

@Service
public class FeedbackService {

    @Autowired
    FeedbackRepository feedbackRepository;


    @Cacheable("feedbacks")
    public List<Feedback> getAllFeedbacks() {
        System.out.println(" data from database..... ");
        return feedbackRepository.findAll();
    }

    public Feedback addFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    public Feedback getFeedbackById(int id) {
		return feedbackRepository.findById(id).get();
    }
}
