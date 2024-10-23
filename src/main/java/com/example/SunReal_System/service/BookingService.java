package com.example.SunReal_System.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SunReal_System.model.Booking;
import com.example.SunReal_System.repository.BookingRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public void addBooking(Booking booking) {
        bookingRepository.save(booking);
    }

}
