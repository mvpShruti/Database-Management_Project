DROP DATABASE IF EXISTS HAHANewHotel;
 CREATE DATABASE `HAHANewHotel` /*!40100 DEFAULT CHARACTER SET 
utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT 
ENCRYPTION='N' */;
use HAHANewHotel;
drop table if exists Room;
drop table if exists Guest;
drop table if exists Reservation;
drop table if exists RoomService;
drop table if exists Staff;

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------------------------------------------------------------------
CREATE TABLE guest (
  guest_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  contact_info VARCHAR(255) NOT NULL
);

CREATE TABLE room (
  room_id INT PRIMARY KEY AUTO_INCREMENT,
  room_number INT NOT NULL,
  room_type VARCHAR(255) NOT NULL,
  room_status VARCHAR(255) NOT NULL
);

CREATE TABLE reservation (
  reservation_id INT PRIMARY KEY AUTO_INCREMENT,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  guest_id INT NOT NULL,
  room_id INT NOT NULL,
  FOREIGN KEY (guest_id) REFERENCES guest(guest_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (room_id) REFERENCES room(room_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE room_service (
  room_service_id INT PRIMARY KEY AUTO_INCREMENT,
  service_name VARCHAR(255) NOT NULL,
  service_charge DECIMAL(10, 2) NOT NULL,
  reservation_id INT NOT NULL,
  FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE billing (
  billing_id INT PRIMARY KEY AUTO_INCREMENT,
  room_charge DECIMAL(10, 2) NOT NULL,
  room_service_charge DECIMAL(10, 2) NOT NULL,
  other_charge DECIMAL(10, 2) NOT NULL,
  reservation_id INT NOT NULL,
  FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE staff (
  staff_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  contact_info VARCHAR(255) NOT NULL,
  guest_id INT,
  reservation_id INT,
  billing_id INT,
  FOREIGN KEY (guest_id) REFERENCES guest(guest_id) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (billing_id) REFERENCES billing(billing_id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- -----------------------------------------------------------------------------------------------------------

INSERT INTO guest (name, address, contact_info) VALUES
('John Doe', '123 Main St, Anytown USA', '555-1234'),
('Jane Smith', '456 Maple Ave, Somewhere USA', '555-5678'),
('Mike Johnson', '789 Oak Rd, Anywhere USA', '555-9012'),
('Sarah Lee', '321 Elm St, Anyplace USA', '555-3456'),
('Tom Brown', '654 Pine St, Nowhere USA', '555-7890'),
('Amy Lee', '987 Cherry Lane, Everywhere USA', '555-2345'),
('David Kim', '456 Oak St, Anytown USA', '555-6789'),
('Lisa Smith', '789 Maple Ave, Somewhere USA', '555-0123'),
('Eric Lee', '123 Main St, Anyplace USA', '555-4567'),
('Karen Brown', '456 Pine St, Nowhere USA', '555-8901'),
('Peter Johnson', '789 Elm St, Anytown USA', '555-2345'),
('Emily Davis', '654 Maple Ave, Somewhere USA', '555-6789'),
('Daniel Lee', '321 Oak Rd, Anyplace USA', '555-0123'),
('Jessica Kim', '987 Elm St, Anywhere USA', '555-4567'),
('Michael Brown', '456 Maple Ave, Anyplace USA', '555-8901'),
('Lisa Johnson', '789 Oak Rd, Anywhere USA', '555-2345'),
('Brian Lee', '123 Pine St, Anytown USA', '555-6789') ;

INSERT INTO room (room_number, room_type, room_status) VALUES
(101, 'Single', 'Available'),
(102, 'Single', 'Available'),
(103, 'Double', 'Available'),
(104, 'Double', 'Reserved'),
(105, 'Suite', 'Available'),
(106, 'Suite', 'Reserved'),
(107, 'Single', 'Available'),
(108, 'Double', 'Reserved'),
(109, 'Single', 'Available'),
(110, 'Double', 'Available'),
(201, 'Double', 'Reserved'),
(202, 'Single', 'Available'),
(203, 'Suite', 'Reserved'),
(204, 'Single', 'Available'),
(205, 'Double', 'Available'),
(206, 'Suite', 'Reserved'),
(207, 'Single', 'Available');

INSERT INTO reservation (check_in_date, check_out_date, guest_id, room_id) VALUES
('2023-04-15', '2023-04-17', 1, 101),
('2023-04-16', '2023-04-18', 2, 102),
('2023-04-17', '2023-04-19', 3, 103),
('2023-04-18', '2023-04-20', 4, 104),
('2023-04-19', '2023-04-21', 5, 105),
('2023-04-20', '2023-04-22', 6, 106),
('2023-04-21', '2023-04-23', 7, 107),
('2023-04-22', '2023-04-24', 8, 108),
('2023-04-23', '2023-04-25', 9, 109),
('2023-04-24', '2023-04-26', 10, 110),
('2023-04-15', '2023-04-18', 11, 201),
('2023-04-16', '2023-04-19', 12, 202),
('2023-04-17', '2023-04-20', 13, 203),
('2023-04-18', '2023-04-21', 14, 204),
('2023-04-19', '2023-04-22', 15, 205),
('2023-04-20', '2023-04-23', 16, 206),
('2023-04-21', '2023-04-24', 17, 207);

INSERT INTO room_service (service_name, service_charge, reservation_id) VALUES
('Room Cleaning', 20.00, 1),
('Laundry', 30.00, 2),
('Food & Beverage', 50.00, 3),
('Spa Service', 80.00, 4),
('Room Cleaning', 20.00, 5),
('Laundry', 30.00, 6),
('Food & Beverage', 50.00, 7),
('Spa Service', 80.00, 8),
('Room Cleaning', 20.00, 9),
('Laundry', 30.00, 10),
('Food & Beverage', 50.00, 11),
('Spa Service', 80.00, 12),
('Room Cleaning', 20.00, 13),
('Laundry', 30.00, 14),
('Food & Beverage', 50.00, 15),
('Spa Service', 80.00, 16),
('Room Cleaning', 20.00, 17);

INSERT INTO billing (room_charge, room_service_charge, other_charge, reservation_id) VALUES
(200.00, 20.00, 10.00, 1),
(250.00, 30.00, 15.00, 2),
(300.00, 50.00, 20.00, 3),
(350.00, 80.00, 25.00, 4),
(400.00, 20.00, 30.00, 5),
(450.00, 30.00, 35.00, 6),
(500.00, 50.00, 40.00, 7),
(550.00, 80.00, 45.00, 8),
(600.00, 20.00, 50.00, 9),
(650.00, 30.00, 55.00, 10),
(700.00, 50.00, 60.00, 11),
(750.00, 80.00, 65.00, 12),
(800.00, 20.00, 70.00, 13),
(850.00, 30.00, 75.00, 14),
(900.00, 50.00, 80.00, 15),
(950.00, 80.00, 85.00, 16),
(1000.00, 20.00, 90.00, 17);

INSERT INTO staff (name, position, contact_info, guest_id, reservation_id, billing_id) VALUES
('John Doe', 'Manager', 'john.doe@example.com', 1, 1, 1),
('Jane Doe', 'Receptionist', 'jane.doe@example.com', 2, 2, 2),
('James Smith', 'Room Service', 'james.smith@example.com', 3, 3, 3),
('Emily Johnson', 'Housekeeping', 'emily.johnson@example.com', 4, 4, 4),
('Michael Lee', 'Maintenance', 'michael.lee@example.com', NULL, NULL, 5),
('Sarah Williams', 'Receptionist', 'sarah.williams@example.com', NULL, 6, 6),
('David Brown', 'Manager', 'david.brown@example.com', NULL, NULL, 7),
('Jessica Davis', 'Housekeeping', 'jessica.davis@example.com', 5, 8, 8),
('Daniel Garcia', 'Room Service', 'daniel.garcia@example.com', NULL, NULL, 9),
('Jennifer Rodriguez', 'Manager', 'jennifer.rodriguez@example.com', 6, NULL, 10),
('Matthew Martinez', 'Maintenance', 'matthew.martinez@example.com', 7, 11, 11),
('Emma Hernandez', 'Receptionist', 'emma.hernandez@example.com', NULL, 12, NULL),
('Christopher Lopez', 'Room Service', 'christopher.lopez@example.com', 8, 13, 13),
('Olivia Gonzalez', 'Housekeeping', 'olivia.gonzalez@example.com', NULL, NULL, 14),
('Aiden Perez', 'Manager', 'aiden.perez@example.com', 9, 15, 15),
('Isabella Taylor', 'Maintenance', 'isabella.taylor@example.com', NULL, 16, NULL),
('Ethan Moore', 'Receptionist', 'ethan.moore@example.com', 10, 17, NULL);

-- ---------------------------------------------------------------------------------------------------
-- Create a new guest record in the database.
DELIMITER //
CREATE PROCEDURE `create_guest`(
  IN guest_name VARCHAR(255),
  IN guest_address VARCHAR(255),
  IN guest_contact_info VARCHAR(255)
)
BEGIN
  INSERT INTO guest (name, address, contact_info) VALUES (guest_name, guest_address, guest_contact_info);
END //
DELIMITER ;

-- Retrieve information about a particular guest, including their reservations and billing.
DELIMITER //
CREATE PROCEDURE `get_guest_info`(
  IN xxx INT
)
BEGIN
  SELECT * FROM guest WHERE guest_id = xxx;
  SELECT * FROM reservation WHERE guest_id = xxx;
  SELECT * FROM billing WHERE reservation_id IN (SELECT reservation_id FROM reservation WHERE guest_id = xxx);
END //
DELIMITER ;

-- Create a new reservation for a guest.
DELIMITER //
CREATE PROCEDURE `create_reservation`(
  IN check_in_date DATE,
  IN check_out_date DATE,
  IN guest_id INT,
  IN room_id INT
)
BEGIN
  INSERT INTO reservation (check_in_date, check_out_date, guest_id, room_id) VALUES (check_in_date, check_out_date, guest_id, room_id);
END //
DELIMITER ;
--  Add a room service to an existing reservation.
DELIMITER //
CREATE PROCEDURE `add_room_service`(
  IN service_name VARCHAR(255),
  IN service_charge DECIMAL(10,2),
  IN reservation_id INT
)
BEGIN
  INSERT INTO room_service (service_name, service_charge, reservation_id) VALUES (service_name, service_charge, reservation_id);
END //
DELIMITER ;
-- Calculate the total bill for a reservation, including room charges, room service charges, and other charges.
DELIMITER //
CREATE PROCEDURE `calculate_bill`(
  IN ri INT
)
BEGIN
  SELECT (room_charge + room_service_charge + other_charge) AS total_charge 
  FROM billing
  WHERE reservation_id =ri;
END //
DELIMITER ;
-- Update the status of a room in the database.
DELIMITER //
CREATE PROCEDURE `update_room_status`(
  IN roomid INT,
  IN new_status VARCHAR(255),
  IN guestid INT
)
BEGIN
  UPDATE room SET room_status = new_status WHERE room_id = roomid;
END //
DELIMITER ;
-- Assign a staff member to a reservation.
DELIMITER //
CREATE PROCEDURE `assign_staff`(
  IN staffid INT,
  IN reservationid INT,
  IN guestid INT
)
BEGIN
  UPDATE staff SET reservation_id = reservationid WHERE staff_id = staffid AND reservation_id IS NULL;
  UPDATE staff SET guest_id=guestid WHERE staff_id = staffid AND guest_id IS NULL;
END //
DELIMITER ;
-- Update the information of a guest.
DELIMITER //
CREATE PROCEDURE `update_guest`(
  IN guestid INT,
  IN new_name VARCHAR(255),
  IN new_address VARCHAR(255),
  IN new_contact_info VARCHAR(255)
)
BEGIN
  SET SQL_SAFE_UPDATES = 0;
  UPDATE guest SET name = new_name, address = new_address, contact_info = new_contact_info WHERE guest_id = guestid;
  SET SQL_SAFE_UPDATES = 1;
END //
DELIMITER ;
-- Remove a guest from the database along with their reservations and billing.
DELIMITER //
CREATE PROCEDURE `delete_guest`(
  IN guestid INT
)
BEGIN
SET SQL_SAFE_UPDATES = 0;
  DELETE FROM room_service WHERE reservation_id IN (SELECT reservation_id FROM reservation WHERE guest_id = guestid);
  DELETE FROM billing WHERE reservation_id IN (SELECT reservation_id FROM reservation WHERE guest_id = guestid);
  DELETE FROM reservation WHERE guest_id = guestid;
  DELETE FROM guest WHERE guest_id = guestid;
  DELETE FROM room WHERE room_id IN (SELECT room_id FROM reservation WHERE guest_id=guestid) ;
SET SQL_SAFE_UPDATES = 1;
END //
DELIMITER ;
-- Retrieve a list of all available rooms for a given date range and room type.
DELIMITER //
CREATE PROCEDURE `get_available_rooms`(
  IN start_date DATE,
  IN end_date DATE,
  IN roomtype VARCHAR(255)
)
BEGIN
  SELECT * 
 FROM room
 WHERE room_type = roomtype AND room_id IN (SELECT room_id FROM reservation WHERE check_in_date <= start_date AND check_out_date >= end_date AND room_status='Available');
END //
DELIMITER ;
-- Retrieve a list of all reservations for a given room.
DELIMITER //
CREATE PROCEDURE `get_reservations_by_room`(
  IN roomid INT
)
BEGIN
  SELECT * FROM reservation WHERE room_id = roomid;
END //
DELIMITER ;
-- Retrieve a list of all reservations for a given guest.
DELIMITER //
CREATE PROCEDURE `get_reservations_by_guest`(
  IN xxx INT
)
BEGIN
  SELECT * FROM reservation WHERE guest_id = xxx;
END //
DELIMITER ;
-- Retrieve a list of all room services for a given reservation.
DELIMITER //
CREATE PROCEDURE `get_room_services_by_reservation`(
  IN reservationid INT
)
BEGIN
  SELECT * FROM room_service WHERE reservation_id = reservationid;
END //
DELIMITER ;
-- Remove a room service from a reservation.
DELIMITER //
CREATE PROCEDURE `delete_room_service`(
  IN roomserviceid INT
)
BEGIN
  DELETE FROM room_service WHERE room_service_id = roomserviceid;
END //
DELIMITER ;
-- Add a new staff member to the database.
DELIMITER //
CREATE PROCEDURE `create_staff`(
  IN staff_name VARCHAR(255),
  IN staff_position VARCHAR(255),
  IN staff_contact_info VARCHAR(255)
)
BEGIN
  INSERT INTO staff (name, position, contact_info) VALUES (staff_name, staff_position, staff_contact_info);
END //
DELIMITER ;
-- Update the information of a staff member.
DELIMITER //
CREATE PROCEDURE `update_staff`(
  IN staffid INT,
  IN new_name VARCHAR(255),
  IN new_position VARCHAR(255),
  IN new_contact_info VARCHAR(255)
)
BEGIN
  UPDATE staff SET name = new_name, position = new_position, contact_info = new_contact_info WHERE staff_id = staffid;
END //
DELIMITER ;
-- Remove a staff member from the database.
DELIMITER //
CREATE PROCEDURE `delete_staff`(
  IN staffid INT
)
BEGIN
  UPDATE staff SET guest_id = NULL, reservation_id = NULL, billing_id = NULL WHERE guest_id = guest_id;
DELETE FROM staff WHERE staff_id = staffid;
END //
DELIMITER ;
-- Procedure for inserting a room
DELIMITER //
CREATE PROCEDURE `add_room`(
  IN roomno INT,
  IN roomtype VARCHAR(255),
  IN roomstatus VARCHAR(255)
)
BEGIN
  INSERT INTO room VALUES (DEFAULT , roomno,roomtype,roomstatus) ;
END //
DELIMITER ;
-- Procedure for booking a room
DELIMITER //

CREATE PROCEDURE book_room (IN guestid INT, IN roomnumber INT, IN checkindate DATE, IN checkoutdate DATE)
BEGIN
    DECLARE room_id INT;
    DECLARE room_status VARCHAR(255);
    
    -- Get the room ID and status for the specified room number
    SELECT room_id, room_status INTO room_id, room_status
    FROM room
    WHERE room_number = roomnumber;
    
    -- If the room is not available, return an error message
    IF room_status <> 'available' THEN
        SELECT 'Room is not available' AS Error;
    ELSE
        -- Update the room status to 'booked' and the reservation table with the new reservation
        UPDATE room SET room_status = 'booked' WHERE room_id = roomid;
        INSERT INTO reservation (checkindate, checkoutdate, guestid, roomid)
        VALUES (checkindate, checkoutdate, guestid, roomid);
        
        SELECT 'Room booked successfully' AS Success;
    END IF;
END //


DELIMITER ;

CREATE VIEW guest_reservation_billing AS
SELECT g.guest_id, g.name, g.address, g.contact_info, 
       r.reservation_id, r.check_in_date, r.check_out_date, 
       b.billing_id, b.room_charge, b.room_service_charge, b.other_charge
FROM guest g
JOIN reservation r ON g.guest_id = r.guest_id
JOIN billing b ON r.reservation_id = b.reservation_id;
-- -------------------------occupiedrooms
DELIMITER //
CREATE PROCEDURE view_occupied_rooms ()
BEGIN
  SELECT * FROM room WHERE room_status = 'Occupied';
END //
DELIMITER ;

-- -------------- 
-- View a list of all guests currently checked in and their room assignments:

SELECT guest.name, room.room_number, reservation.check_in_date, reservation.check_out_date
FROM guest
JOIN reservation ON guest.guest_id = reservation.guest_id
JOIN room ON reservation.room_id = room.room_id
WHERE reservation.check_in_date <= CURDATE()
  AND reservation.check_out_date > CURDATE()
ORDER BY reservation.check_in_date;

--
-- trigger checkout
DELIMITER //
CREATE TRIGGER after_checkout_time
AFTER UPDATE ON reservation
FOR EACH ROW
BEGIN
  IF NEW.check_out_date < NOW() THEN
    UPDATE room SET room_status = 'Available' WHERE room_id = NEW.room_id;
  END IF;
END //
DELIMITER ;
