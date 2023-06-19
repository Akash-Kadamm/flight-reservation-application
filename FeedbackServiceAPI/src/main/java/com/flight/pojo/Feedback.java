package com.flight.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="feedbacks")
public class Feedback  implements Serializable {
	@Id
	@Column(name="feedback_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int feedback_id;
	
	@Column(name="description")
	private String description;
	
	@Column(name="rating")
	private float rating;
	
	

	@Column(name="booking_id")
	private int booking_id;
	
	
	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Feedback(String description, float rating, int booking_id) {
		super();
		this.description = description;
		this.rating = rating;
		this.booking_id = booking_id;
	}



	public Feedback(String description, float rating) {
		super();
		this.description = description;
		this.rating = rating;
	}



	public int getFeedback_id() {
		return feedback_id;
	}


	public void setFeedback_id(int feedback_id) {
		this.feedback_id = feedback_id;
	}


	public float getRating() {
		return rating;
	}


	public void setRating(float rating) {
		this.rating = rating;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public int getBooking_id() {
		return booking_id;
	}


	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}



	@Override
	public String toString() {
		return "Feedback [feedback_id=" + feedback_id + ", description=" + description + ", rating=" + rating
				+ ", booking_id=" + booking_id + "]";
	}


	
 
	
	
}
