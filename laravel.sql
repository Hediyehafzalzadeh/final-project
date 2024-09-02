-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 29, 2024 at 01:39 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `best_sellers`
--

CREATE TABLE `best_sellers` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `liked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `best_sellers`
--

INSERT INTO `best_sellers` (`id`, `name`, `category`, `img`, `price`, `liked`, `created_at`, `updated_at`) VALUES
(1, 'Promaster Sikorsky', 'men', 'CA0710-58L Catalog.png', 2000, 0, NULL, NULL),
(2, 'TSUYOSA', 'men', 'NJ0151-53M_Catalog.png', 360, 0, NULL, NULL),
(3, '	\r\nSeries8 880 GMT', 'men', 'NB6032-53P_Catalog.png', 1795, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(77, '2014_10_12_000000_create_users_table', 1),
(78, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(79, '2019_08_19_000000_create_failed_jobs_table', 1),
(80, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(81, '2024_08_20_150151_create_products', 1),
(83, '2024_08_22_114326_create_shoppingcarts', 2),
(84, '2024_08_28_155325_create_best_sellers', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'PostmanRuntime/7.41.2', '73f1dbc655c78cee954d10a3e0e459b6ae9f6b74fe5532554f11cf7bcdf73186', '[\"*\"]', NULL, NULL, '2024-08-27 17:39:24', '2024-08-27 17:39:24'),
(2, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'b4875d953945e0ef7988ef723620d1ab16933db622231675598b97b6ffbfb0dd', '[\"*\"]', '2024-08-27 17:48:15', NULL, '2024-08-27 17:43:33', '2024-08-27 17:48:15'),
(3, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', '4304c7d0a30746219c04dc35990d0cb27a943e590164c198ce73869ba90de486', '[\"*\"]', NULL, NULL, '2024-08-27 18:00:17', '2024-08-27 18:00:17'),
(4, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', '979ce43812d826b7be16661fc8a4579302e3f7b4f7d7a0fbacc40aa0040f5799', '[\"*\"]', NULL, NULL, '2024-08-27 18:05:57', '2024-08-27 18:05:57'),
(5, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'cab3bdba92981aace3d8de31dd27d555683525ddeebdbbb803306ba36d0b7694', '[\"*\"]', NULL, NULL, '2024-08-27 18:10:03', '2024-08-27 18:10:03'),
(6, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'c12ea10df167e91587525be6b42bd072f9b821589a2883587685abd84d12dbda', '[\"*\"]', NULL, NULL, '2024-08-27 18:16:44', '2024-08-27 18:16:44'),
(7, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', 'd6734869b14f8595290ffcb7f4f7ea36f068b93033f2b6b7a4a04f77385c7c6c', '[\"*\"]', NULL, NULL, '2024-08-27 18:37:29', '2024-08-27 18:37:29'),
(8, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', '9249ddc50bec1a5c749804fe9d170463bf18d93185619872d83ae31cab888583', '[\"*\"]', NULL, NULL, '2024-08-27 18:49:00', '2024-08-27 18:49:00'),
(9, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36', '7e0c61bcd923c1b1379dcab8c25ad136b5de0c17affa39ebbfc50a97c6995d0a', '[\"*\"]', NULL, NULL, '2024-08-27 18:56:30', '2024-08-27 18:56:30'),
(10, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '8dfa72543d8c089a4a333e736f608f3822f0b5081b3ca289f5ebd5a46ffd2d1b', '[\"*\"]', NULL, NULL, '2024-08-27 19:35:36', '2024-08-27 19:35:36'),
(11, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '7bd54827ee3d49de8b99992c499f0af08d16aa279f5b340006a486524e6565cc', '[\"*\"]', NULL, NULL, '2024-08-27 19:35:36', '2024-08-27 19:35:36'),
(12, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '5e94f147864b4299868e1c1ff4ec0c64ce95256465714092198d111f71c434b4', '[\"*\"]', NULL, NULL, '2024-08-27 19:40:53', '2024-08-27 19:40:53'),
(13, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '7eff08b6a738514a9ce38587345d6716203442e52a5cdafe8cf24c8e3c5f057c', '[\"*\"]', NULL, NULL, '2024-08-27 19:41:18', '2024-08-27 19:41:18'),
(14, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '19a2e1dc9f9b488438ed5fabbe52eb0daa2f7e5c6d09dc728761fff636ef6b24', '[\"*\"]', NULL, NULL, '2024-08-27 19:44:54', '2024-08-27 19:44:54'),
(15, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '88a9fe6909c191775ec1f3d280de9c59bcf1b5d63b3a6cbde7c9cf24868e599d', '[\"*\"]', NULL, NULL, '2024-08-27 19:57:53', '2024-08-27 19:57:53'),
(16, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', 'c59f0d57c4c28b1dc2ed3f93350d4112946613612a33cd6d47ff93da68e4a56c', '[\"*\"]', NULL, NULL, '2024-08-27 20:00:34', '2024-08-27 20:00:34'),
(17, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', 'ea2360151b0e2ffee48ab77960e3f1388e6fa29283632c8933d0a8ec88409bca', '[\"*\"]', NULL, NULL, '2024-08-27 20:01:30', '2024-08-27 20:01:30'),
(18, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '966a611cabf7402771c9059c4022f558cd0409f82be4628fd7426a52f8ac152f', '[\"*\"]', NULL, NULL, '2024-08-27 20:06:25', '2024-08-27 20:06:25'),
(19, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '0927a79c7a4cf9f956ee48f9696a7a18a1e9e0dbb32f1df47129e32337d0b107', '[\"*\"]', NULL, NULL, '2024-08-27 20:07:49', '2024-08-27 20:07:49'),
(20, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', 'c91eabb3836f8a821e9bca63662e660ef883e5c49cfd8bc11c932b1efa2d72f7', '[\"*\"]', NULL, NULL, '2024-08-27 20:13:22', '2024-08-27 20:13:22'),
(21, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', 'e6f2b38b5f4588dca63555f93ba819c5c16041f2aad4dad6ff6537ce3a68e343', '[\"*\"]', NULL, NULL, '2024-08-27 20:24:04', '2024-08-27 20:24:04'),
(22, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '65ebdac11e92fecf65e680d60aa6643cd16d8bcada568fb5908f56db913f60cb', '[\"*\"]', NULL, NULL, '2024-08-27 20:32:54', '2024-08-27 20:32:54'),
(23, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '5be68a822fb850e68f2ffdc9753f999cc824041fa9cc679d6ec69b09a85aeb51', '[\"*\"]', NULL, NULL, '2024-08-27 20:38:54', '2024-08-27 20:38:54'),
(24, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '686ab5f2f8c6de12bfa67b4338f0a7b754cd4d9ed9f8d3f21c21bc5cf1a63a69', '[\"*\"]', NULL, NULL, '2024-08-27 20:45:16', '2024-08-27 20:45:16'),
(25, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '8ebcd894cd77641513d500e1dccb87cd5926b853d6bd961a8f143284b6625c9a', '[\"*\"]', NULL, NULL, '2024-08-27 20:46:24', '2024-08-27 20:46:24'),
(26, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', 'ea4c8aec7e140faf6e128276c2fabc18311fdfe9cc953dfb7d4f8ede94073b0c', '[\"*\"]', '2024-08-28 13:18:48', NULL, '2024-08-27 22:06:14', '2024-08-28 13:18:48'),
(27, 'App\\Models\\User', 1, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '2f1c6f29604695c828103350cdc9f1ea48acadd3aaf1b966180db644b783059b', '[\"*\"]', '2024-08-28 14:43:46', NULL, '2024-08-28 14:08:58', '2024-08-28 14:43:46'),
(28, 'App\\Models\\User', 2, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '6fc0702eb38200dc6723617afb0c03d640a59aed534bc50d85b22f49000aed42', '[\"*\"]', NULL, NULL, '2024-08-28 14:56:23', '2024-08-28 14:56:23'),
(29, 'App\\Models\\User', 3, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '08e93d56d8f36a5f7d53dceb12dc89518aa334e5d42adb978161088572fdc909', '[\"*\"]', NULL, NULL, '2024-08-28 17:00:30', '2024-08-28 17:00:30'),
(30, 'App\\Models\\User', 3, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '84632c3ad130ecfd72e6dd133b19f00853047339f4b9c1e218d5ed17856f11c8', '[\"*\"]', NULL, NULL, '2024-08-28 17:03:48', '2024-08-28 17:03:48'),
(31, 'App\\Models\\User', 3, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36', '0eee22d579fe459061b22ad0a29970b5dc6872d04a1aae0e83ac6dd502daa88a', '[\"*\"]', '2024-08-28 17:29:20', NULL, '2024-08-28 17:20:25', '2024-08-28 17:29:20');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `liked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `img`, `price`, `liked`, `created_at`, `updated_at`) VALUES
(1, 'Promaster Sikorsky', 'men', 'CA0710-58L Catalog.png', 2000, 0, '2024-08-27 19:41:10', '2024-08-27 17:42:53'),
(4, 'TSUYOSA', 'men', 'NJ0151-53M_Catalog.png', 360, 0, NULL, NULL),
(5, 'HAKUTO-R', 'men', 'CC4065-61Y_Catalog.png', 2995, 0, NULL, NULL),
(6, 'Citizen L Mae', 'women', 'EM1060-52N_Catalog.png', 394, 0, NULL, NULL),
(7, 'Bianca', 'women', 'EW5551-56N Catalog.png', 395, 1, NULL, '2024-08-28 17:29:16'),
(8, 'Aurora Enchanted', 'women', '2024_AuroraEnchanted_Catalog_GA1081-65N.png', 475, 1, NULL, '2024-08-28 14:15:04'),
(9, 'PCAT', 'men', 'CB5919-00X Catalog.png', 550, 0, NULL, NULL),
(10, 'Series8 880 GMT', 'men', 'NB6032-53P_Catalog.png', 1795, 0, NULL, NULL),
(11, 'the citizen', 'men', 'BY1010-57H_Catalog.png', 469, 0, NULL, NULL),
(12, 'Rolan\r\n\r\n', 'men', 'AW0096-06L Catalog.png', 281, 0, NULL, NULL),
(13, 'Corso Diamond', 'men', 'BM7646-55H_Catalog.png', 675, 0, NULL, NULL),
(14, 'Eco-Drive One', 'men', 'AR5050-51L_Catalog.png', 3495, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `shopping_carts`
--

CREATE TABLE `shopping_carts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `quantity` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shopping_carts`
--

INSERT INTO `shopping_carts` (`id`, `user_id`, `product_id`, `quantity`) VALUES
(11, 3, 7, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`, `updated_at`) VALUES
(3, 'mahmood', '$2y$12$Ic8a83X.Fxl80yTRHl6niu1xJ1jkJ2GBoCA/KjejnpIcDzko8JgTS', '2024-08-28 17:00:30', '2024-08-28 17:00:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `best_sellers`
--
ALTER TABLE `best_sellers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shopping_carts`
--
ALTER TABLE `shopping_carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shopping_carts_user_id_foreign` (`user_id`),
  ADD KEY `shopping_carts_product_id_foreign` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `best_sellers`
--
ALTER TABLE `best_sellers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `shopping_carts`
--
ALTER TABLE `shopping_carts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `shopping_carts`
--
ALTER TABLE `shopping_carts`
  ADD CONSTRAINT `shopping_carts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `shopping_carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
