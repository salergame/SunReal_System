CREATE TABLE booking (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    room_number INT NOT NULL,
    booking_date DATE NOT NULL
);
