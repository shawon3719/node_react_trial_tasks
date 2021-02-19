-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 19, 2021 at 10:51 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `react`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `email`, `country`, `phone`, `password`) VALUES
(1, 'shawon', 'shawon@gmail.com', 'bangladesh', 188384729, '$2b$10$qvlJYVKGVctXuf4KsQ1ht.E/iilI.AQwyyOzXFPst6c4ZJgA.pW1G'),
(2, 'Shawon Test', 'shawon@gmail.com', 'Bangladesh', 1717757902, '$2b$10$yFkMj9ZNjZUCyZzCZ89uq.1mSkGJp7UeB7k5IDZH8r.zcfQPmZgtC'),
(3, 'test', 'test@gmail.com', 'test', 1717757902, '$2b$10$dGl7swjBmY9MQewNIfi2i.bWLNTLjv5baYERf8eB4mwLrBjiryvWW'),
(4, 'Shawon Test', 'shawon@gmail.com', 'Bangladesh', 1717757902, '$2b$10$h7kKFI9.02B238xLf4MVr.Tr23NOzDKPzEWl5U9qj0uU7P3sQO8hS'),
(5, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$LZnWXTtmviXXA9M9Louj0uf8qdSDQ9XKgUYOJTBKnn4o.NajVCclO'),
(6, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$W3L12M7d6WELxIOWOcMG0e6qLs3qIncFI7mDo9ldp3jspr5tEQmVW'),
(7, 'Shawon Test', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$3EFhwLk5txHd8JjU3epGxulMI8bigcwoxwqCxIq/mZtzShQU5kaBi'),
(8, 'Shawon Test', 'shawon@gmail.com', 'Bangladesh', 1717757902, '$2b$10$F0Li9I9dRSvGYW/3PBEpgufd/7CwT4yqye4sx8n44JH5.Hmjsdr8C'),
(9, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$aLgmJFfYx7jFVnDoRB3WVujS0dn/zoTJonWRyPJsAjnBgZ6SrAgvK'),
(10, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$VX28Dm8J8K9fC20ZRJLa0OrVa.UX3Fmejni2Eobnqq7FcSCImCBP.'),
(11, 'Shawon Test', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$8k9o8gjHZIga2donCi6P8u5WBqdpB0YvuruzfsYIxg493JuWuxtMK'),
(12, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$6fTNBZ4ojzaecih2vVNWwetlY.gInizTymg4ZidCxfR/krX0TVoaK'),
(13, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$DBwTuwFJXp5c48VefhhAV.wv9zYK6v78N1TLwLBE2xrRi.m0emVWO'),
(14, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$obg/Hw43uOH7TA1n5pkgCu398nJMuqMVgNjgFLiXoYre155x0J7ki'),
(15, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$mQH6hiJsBRa.0ya8/D4bsOFloUOVHnSa4lK0Lp0jzNnSZ/K2V9pHO'),
(16, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$4bzVUyvD0Y0.7fz.CA.C1e1Pbk5zQ92BSWLRjspChViI6EYwmtk6W'),
(17, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$XAB99tv3m9OqncvibejXueCcTIJty8GvPfAfz1Rqeu5DfObODsLaW'),
(18, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$QmoMvr0CBxeu.8E/8n8qd.kukc/VT/saQhmIcuX8r1IMMy8A./Inu'),
(19, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$RkTKeWfGLpyjqYTnanLa4ev5EmsNWR1FaLVoiHEIZaX5njS2Zu71y'),
(20, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$B6rMXLdnXBd.naBcsvUpZeu5TdRSyWKxUiSLDLoX42cVFc4kitPtS'),
(21, 'dsfd', 'shawon@gmail.com', 'Bangladesh', 1717757902, '$2b$10$ZhSdZu1.Yxt.AimeCA8eteWA10drqVN/GeR5uwqpB9SyYQg9XhVeq'),
(22, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$MOs9h98bxFdbnBH4rdMNv.ccSYDi0X9.AbCJpS1Y5l5iGCg8aUyfK'),
(23, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$CS0evXUX0nkIMHZgPmSKLelvTx3YprZ6VRE5QOegYfZliY7dTfTGG'),
(24, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$8vw5VHiZCCYYH90S2s2QcODKqtfi38NHpLUK1zZglVtqnJVXxYJRW'),
(25, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$eg/tVWq.7BIF8rjSFrT2VOj92s7LmVHQj8He0t1EtTMttR6OG9f3e'),
(26, 'dsfd', 'shawon@gmail.com', 'test', 1717757902, '$2b$10$bZW8wXaUHRwubBlX1sRPYu5vzHJodNRycYPiL5SjESxka8/V/tlGq'),
(27, 'Masudul Hasan Shawon', 'shawon@gmail.com', 'Bangladesh', 1717757902, '$2b$10$fpFU9IWtg5jLVQrzXSSLF.NljyFaqBRjN3pQg2MwXbrOswkU2QDdW'),
(28, 'Masudul Hasan Shawon', 'masudul@gmail.com', 'Bangladesh', 1717757902, '$2b$10$VAoEzB2vu9V21kiivdMNLOThi1j5ZwSLpGxgo5D6FvrxxalwdbR62'),
(29, 'Masudul Hasan Shawon', 'shawon123@gmail.com', 'Bangladesh', 1717757902, '$2b$10$OXg6ZXccAiQIJTYEwjKSpeDz1qceGQ2gEOJwcSgFfLkCe3oQCKnrq');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `title`, `description`) VALUES
(2, 'test', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. '),
(3, 'test2', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. '),
(4, 'test 3', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. '),
(5, 'test4', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. '),
(6, 'we', '<p>wetwesjkhfdjl</p>'),
(8, 'Disabling cookies is Working Properly', '<p>testy</p>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
