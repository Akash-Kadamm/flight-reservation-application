package com.flight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flight.pojo.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {

	
}
