package com.example.SunReal_System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SunReal_System.model.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    // Дополнительные методы для поиска бронирований можно добавить здесь
}
