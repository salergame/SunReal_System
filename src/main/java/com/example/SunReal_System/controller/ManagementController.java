package com.example.SunReal_System.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ManagementController {

    @GetMapping("/management")
    public String managementHome(Model model) {
        // Передаем необходимые данные на страницу управления
        model.addAttribute("pageTitle", "Управление отелем");
        return "management";
    }

    // Обработка формы для добавления нового бронирования
    @PostMapping("/management/bookings")
    public String addBooking(@RequestParam("clientName") String clientName,
                             @RequestParam("roomNumber") int roomNumber,
                             @RequestParam("date") String date,
                             Model model) {
        // Логика добавления бронирования (сохранение в базу данных и т.д.)
        model.addAttribute("message", "Бронирование добавлено успешно");
        return "redirect:/management";
    }

    // Другие методы для управления клиентами, номерами, услугами и т.д.
}
