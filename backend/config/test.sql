-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 29, 2023 at 12:16 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `createdId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdBy` varchar(100) NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(2, 'Veeramani Rajkumar', 'veeramanirajkumar32@gmail.com', '$2b$10$C7Mng8gzP9Xw4ygJG.dvlO98FRM.SMZvt6xsMxBKBW0M8jUB.ODbC', 1, '2023-08-24 10:51:37', '2023-08-24 10:51:37'),
(3, 'matofresh', 'rajveera30500@gmail.com', '$2b$10$boW9AJHVUkUkjCDcg/T/uuo9d9KJTe0aGT6pF1YnSD9YTDiWPkLvW', 1, '2023-08-24 10:56:00', '2023-08-24 10:56:00'),
(4, 'veera', 'veeramanirajkumar@gmail.com', '$2a$10$D56VCyOmEOYvAdlLD6OjJe3wcsQxzFEYQyFthP9kXI9MZwuFc8pDy', 1, '2023-08-25 08:49:39', '2023-08-25 08:49:39'),
(5, 'mani', 'manirajkumar@gmail.com', '$2a$10$Rx58Sl5ZLQfOICX8SWEzl.Oqsx7Vt.NYUE3qnK2aajhHCthaKu506', 1, '2023-08-25 09:04:55', '2023-08-25 09:04:55'),
(6, 'East', 'Kumar@mail.com', '$2a$10$mN9EI6x8HI/OvmsQ8H/bnedf/PUcKNhX9f6I85ghe7OIuNyphnrjG', 1, '2023-08-27 09:59:51', '2023-08-27 09:59:51'),
(7, 'test_user', 'rajKumar@mail.com', '$2a$10$jq/84gwYgRpt4fq6NkPlee28UjyiASjgcSRkMF/pafi6LO2rarLgu', 1, '2023-08-27 10:02:16', '2023-08-27 10:02:16');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `content` text NOT NULL,
  `createdId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdBy` varchar(100) NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `image`, `content`, `createdId`, `createdAt`, `createdBy`, `updatedAt`) VALUES
(1, 'test', '', 'test 123', 2, '2023-08-25 09:45:27', 'Veeramani Rajkumar', '2023-08-25 09:45:27'),
(3, 'test13', '', 'veeramani', 4, '2023-08-25 11:33:31', 'veera', '2023-08-25 11:19:44'),
(4, 'test', '', 'veera', 7, '2023-08-27 10:16:49', 'test_user', '2023-08-27 10:16:49'),
(5, 'hello', '', 'hello world', 2, '2023-08-28 05:29:16', 'Veeramani Rajkumar', '2023-08-28 05:29:16'),
(6, 'hi bro ', '', 'Kumar bro', 2, '2023-08-28 13:45:14', 'Veeramani Rajkumar', '2023-08-28 13:45:14'),
(7, 'de', '', 'veeramani', 2, '2023-08-28 13:46:39', 'Veeramani Rajkumar', '2023-08-28 13:46:39'),
(8, '1', '', '2', 2, '2023-08-28 13:53:16', 'Veeramani Rajkumar', '2023-08-28 13:53:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
