CREATE DATABASE IF NOT EXISTS mydatabase;
use mydatabase; 
CREATE TABLE IF NOT EXISTS users(
	user_id varchar(255) PRIMARY KEY,
    email varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP,
    activation_status boolean DEFAULT 0,
    user_type ENUM('user', 'seller', 'admin') DEFAULT 'user',
    banned_status boolean DEFAULT 0
);
INSERT INTO users(user_id, email, `password`, activation_status, user_type) values('admin1', 'admin@market.com', 'admin123', 1, 'admin');
CREATE TABLE IF NOT EXISTS products(
	product_id varchar(255) PRIMARY KEY,
    product_name varchar(255) NOT NULL,
    price int NOT NULL,
    description text,
    image_display_name varchar(255) NOT NULL,
	category varchar(100),
    units int NOT NULL,
    seller_id varchar(255) NOT NULL,
    posted_date datetime DEFAULT CURRENT_TIMESTAMP,
    updated_date datetime DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY products(seller_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE
);
-- methonds/functions for users table


-- insert function
CREATE PROCEDURE insert_user(
    IN temp_user_id VARCHAR(255),
    IN temp_email VARCHAR(255),
    IN temp_password VARCHAR(255)
)
BEGIN
    INSERT INTO users(user_id, email, `password`)
    VALUES (temp_user_id, temp_email, temp_password);
END


-- update password
CREATE PROCEDURE update_user(
    IN ref_user_id VARCHAR(255),
    IN new_password VARCHAR(255),
    IN new_user_type ENUM('user', 'seller', 'admin')
)
BEGIN
    UPDATE users
    SET `password` = new_password,
        user_type = temp_user_type,
        updated_at = CURRENT_TIMESTAMP
    WHERE user_id = ref_user_id;
END

-- update account type
CREATE PROCEDURE update_user(
    IN ref_user_id VARCHAR(255),
    IN new_user_type ENUM('user', 'seller', 'admin')
)
BEGIN
    UPDATE users
    SET user_type = temp_user_type,
        updated_at = CURRENT_TIMESTAMP
    WHERE user_id = ref_user_id;
END

-- activate or deactivate account
CREATE PROCEDURE toggle_account_activation_status(
    IN temp_user_id varchar(255)
)
BEGIN
	UPDATE users
    SET activation_status = NOT activation_status
    WHERE user_id = temp_user_id;
END
-- ban/unban user
CREATE PROCEDURE toggle_ban(
    IN temp_user_id varchar(255)
)
BEGIN
	UPDATE users
    SET banned_status = NOT banned_status
    WHERE user_id = temp_user_id;
END
