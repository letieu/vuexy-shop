-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2020 at 01:01 PM
-- Server version: 10.5.6-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vuexy-shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `created_at`, `updated_at`, `address`, `city`, `phone`, `user_id`) VALUES
(1, '2020-10-03 11:25:35', '2020-10-03 11:25:35', 'thanh hóa', 'Thanh hóa', 'Thanh Hoa', 11);

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `created_at`, `updated_at`, `name`) VALUES
(1, '2020-10-03 08:20:04', '2020-10-03 08:20:04', 'Harris-Dickinson'),
(2, '2020-10-03 08:20:04', '2020-10-03 08:20:04', 'Hansen, Marvin and Johnston'),
(3, '2020-10-03 08:20:05', '2020-10-03 08:20:05', 'Pollich-Jast'),
(4, '2020-10-03 08:20:05', '2020-10-03 08:20:05', 'Streich Group'),
(5, '2020-10-03 08:20:05', '2020-10-03 08:20:05', 'Donnelly Group');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `created_at`, `updated_at`, `name`, `icon`) VALUES
(1, '2020-10-03 08:20:04', '2020-10-10 04:53:10', 'Áo phông', 'tshirt'),
(2, '2020-10-03 08:20:04', '2020-10-10 04:54:31', 'Áo khoác', 'user-tie'),
(3, '2020-10-03 08:20:04', '2020-10-10 04:55:02', 'Mũ', 'hat-cowboy'),
(4, '2020-10-03 08:20:05', '2020-10-10 04:56:03', 'Túi xách', 'shopping-bag'),
(5, '2020-10-03 08:20:05', '2020-10-10 04:59:12', 'Khác', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2020_09_20_111925_create_products_table', 1),
(6, '2020_09_20_111933_create_categories_table', 1),
(7, '2020_09_20_112349_create_branches_table', 1),
(8, '2020_09_21_171122_create_roles_table', 1),
(9, '2020_09_21_171133_create_permissions_table', 1),
(10, '2020_09_23_083552_add_forienkey_to_products', 1),
(11, '2020_09_27_050640_create_addresses_table', 1),
(12, '2020_09_27_050658_create_orders_table', 1),
(13, '2020_09_27_050710_create_orders_products_table', 1),
(14, '2020_10_03_184105_create_comments_table', 2),
(15, '2020_10_10_104627_add_icon_to_categories_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `total` double(8,2) NOT NULL,
  `paid` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `address_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `total`, `paid`, `created_at`, `updated_at`, `address_id`, `user_id`) VALUES
(1, 136.00, 0, '2020-10-03 11:25:41', '2020-10-03 11:25:41', 1, 11);

-- --------------------------------------------------------

--
-- Table structure for table `orders_products`
--

CREATE TABLE `orders_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `branch_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `created_at`, `updated_at`, `name`, `image`, `price`, `description`, `category_id`, `branch_id`) VALUES
(35, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(36, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(37, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(38, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(39, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(40, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(41, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(42, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(43, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(44, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(45, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(46, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(47, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(48, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(49, '2020-10-10 05:39:50', '2020-10-10 05:39:50', 'Túi đeo đau vai', '1602333590.jpeg', 980000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(50, '2020-10-10 05:40:12', '2020-10-10 05:40:12', 'Túi ba gang', '1602333612.jpeg', 9877, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 3),
(51, '2020-10-10 05:40:43', '2020-10-10 05:40:43', 'Túi item các thứ', '1602333643.jpeg', 800000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 3),
(52, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(53, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(54, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(55, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(56, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(57, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(58, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(59, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(60, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(61, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(62, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(63, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(64, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(65, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(66, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(67, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(68, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(69, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(70, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(71, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(72, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(73, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(74, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(75, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(76, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(77, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(78, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(79, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(80, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(81, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(82, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(83, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(84, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(85, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(86, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(87, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(88, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(89, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(90, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(91, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(92, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(93, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(94, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(95, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(96, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(97, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(98, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(99, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(100, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(101, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(102, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(103, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(104, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(105, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(106, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(107, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(108, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(109, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(110, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(111, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(112, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(113, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(114, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(115, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(116, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(117, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(118, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(119, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(120, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(121, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(122, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(123, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(124, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(125, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(126, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(127, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(128, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(129, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(130, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(131, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(132, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(133, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(134, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(135, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(136, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(137, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(138, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(139, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(140, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(141, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(142, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(143, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(144, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(145, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(146, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(147, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(148, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(149, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(150, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(151, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(152, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(153, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(154, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(155, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(156, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(157, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(158, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(159, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(160, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(161, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(162, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(163, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(164, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(165, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(166, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(167, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(168, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(169, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(170, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(171, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(172, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(173, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(174, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(175, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(176, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(177, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(178, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(179, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(180, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(181, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(182, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(183, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(184, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(185, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(186, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(187, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(188, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(189, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(190, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(191, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(192, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(193, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(194, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(195, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(196, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(197, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(198, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(199, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(200, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(201, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(202, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(203, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(204, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(205, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(206, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(207, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(208, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(209, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(210, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(211, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(212, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(213, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(214, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(215, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(216, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(217, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(218, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(219, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(220, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(221, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(222, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(223, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(224, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(225, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(226, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(227, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(228, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(229, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(230, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(231, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(232, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(233, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(234, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(235, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(236, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(237, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(238, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(239, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(240, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(241, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(242, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(243, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(244, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(245, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(246, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(247, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(248, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(249, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(250, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(251, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(252, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(253, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(254, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(255, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(256, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(257, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(258, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(259, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(260, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(261, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(262, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(263, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(264, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(265, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(266, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(267, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(268, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(269, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(270, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(271, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(272, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(273, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(274, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(275, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(276, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(277, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(278, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(279, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(280, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(281, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(282, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(283, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(284, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(285, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(286, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(287, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(288, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(289, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(290, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(291, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(292, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(293, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(294, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(295, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(296, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(297, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(298, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(299, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(300, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(301, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(302, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(303, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(304, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(305, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(306, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(307, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(308, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2),
(309, '2020-10-10 05:28:58', '2020-10-10 05:29:18', 'Áo phông thời thượng', '1602332957.png', 200000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 1),
(310, '2020-10-10 05:29:49', '2020-10-10 05:29:49', 'Áo đỉnh cao Nam', '1602332989.png', 3000000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 1, 2),
(311, '2020-10-10 05:34:21', '2020-10-10 05:34:21', 'áo đẹp nhất', '1602333261.jpeg', 123, 'Tốt nhất trog tầm giá', 3, 3),
(312, '2020-10-10 05:35:00', '2020-10-10 05:35:00', 'Áo phoog bele', '1602333300.png', 123, 'OK nhất năm nay', 1, 4),
(313, '2020-10-10 05:35:28', '2020-10-10 05:35:28', 'Áo khoác nam mỏng manh', '1602333328.jpeg', 343434, 'OK nhất năm nay', 2, 2),
(314, '2020-10-10 05:35:58', '2020-10-10 05:35:58', 'Áo khoác nữ hở hang', '1602333358.jpeg', 54545, 'OK nhất năm ngoái', 2, 2),
(315, '2020-10-10 05:36:29', '2020-10-10 05:36:29', 'áo minini', '1602333389.jpeg', 54535, 'OK nhất năm sau', 2, 4),
(316, '2020-10-10 05:36:52', '2020-10-10 05:36:52', 'Áo khoác sexy girl', '1602333412.jpeg', 434444, 'OK nhất năm sau', 2, 5),
(317, '2020-10-10 05:37:14', '2020-10-10 05:37:14', 'Áo lung tung', '1602333434.jpeg', 122222, 'OK nhất năm sau', 2, 5),
(318, '2020-10-10 05:37:47', '2020-10-10 05:37:47', 'Mũ đẹp trai', '1602333467.jpeg', 333000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(319, '2020-10-10 05:38:05', '2020-10-10 05:38:05', 'Mũ hàn quốc', '1602333485.jpeg', 44000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 5),
(320, '2020-10-10 05:38:23', '2020-10-10 05:38:23', 'Mu cave', '1602333503.jpeg', 4545, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 1),
(321, '2020-10-10 05:38:48', '2020-10-10 05:38:48', 'Mũ len có như không', '1602333528.jpeg', 4444, 'Áo mặc mùa này mùa kia các kiểu blablabla', 3, 2),
(322, '2020-10-10 05:39:30', '2020-10-10 05:39:30', 'Túi đựng thông minh', '1602333570.png', 8000, 'Áo mặc mùa này mùa kia các kiểu blablabla', 4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Prof. Ashtyn Weber Jr.', 'carrie82@example.org', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'aRJgZXbcg3', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(2, 'Terence Rosenbaum', 'kendrick18@example.com', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '3fEXciPM2H', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(3, 'Emanuel Rempel', 'zjacobs@example.com', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'NfiymiklEK', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(4, 'Miss Aracely Gutkowski I', 'hayes.gerald@example.org', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'BwCuNtYPRG', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(5, 'Ottilie Jakubowski', 'luna65@example.com', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'whiWBg3Ndc', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(6, 'Kristin Homenick', 'malvina72@example.org', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'OXPotpyJ0c', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(7, 'Dr. Alvina Herzog DVM', 'kmarvin@example.org', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'QrhqZc1CMq', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(8, 'Cleora Prohaska MD', 'fsporer@example.com', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '0jcSfZK2X0', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(9, 'Miss Imelda Hansen', 'malcolm.funk@example.com', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'vQXM95CdjA', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(10, 'Solon Treutel', 'ruecker.dana@example.com', '2020-10-03 08:19:49', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'PrzYB8rW4N', '2020-10-03 08:19:49', '2020-10-03 08:19:49'),
(11, 'admin', 'admin@shop.com', NULL, '$2y$10$Zz3FwH7P3aHHi40czZffNuWTUK16Eq1e0Ubc2B5vufrZSB5f3D.WC', NULL, '2020-10-03 11:22:25', '2020-10-03 11:22:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `addresses_user_id_foreign` (`user_id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_product_id_foreign` (`product_id`),
  ADD KEY `comments_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_address_id_foreign` (`address_id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `orders_products`
--
ALTER TABLE `orders_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_products_order_id_foreign` (`order_id`),
  ADD KEY `orders_products_product_id_foreign` (`product_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_branch_id_foreign` (`branch_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders_products`
--
ALTER TABLE `orders_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=323;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders_products`
--
ALTER TABLE `orders_products`
  ADD CONSTRAINT `orders_products_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
