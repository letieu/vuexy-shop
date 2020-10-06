-- MariaDB dump 10.17  Distrib 10.5.5-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: vuexy-shop
-- ------------------------------------------------------
-- Server version	10.5.5-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_user_id_foreign` (`user_id`),
  CONSTRAINT `addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'2020-10-03 11:25:35','2020-10-03 11:25:35','thanh hóa','Thanh hóa','Thanh Hoa',11);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `branches` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branches`
--

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;
INSERT INTO `branches` VALUES (1,'2020-10-03 08:20:04','2020-10-03 08:20:04','Harris-Dickinson'),(2,'2020-10-03 08:20:04','2020-10-03 08:20:04','Hansen, Marvin and Johnston'),(3,'2020-10-03 08:20:05','2020-10-03 08:20:05','Pollich-Jast'),(4,'2020-10-03 08:20:05','2020-10-03 08:20:05','Streich Group'),(5,'2020-10-03 08:20:05','2020-10-03 08:20:05','Donnelly Group');
/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'2020-10-03 08:20:04','2020-10-03 08:20:04','MediumSeaGreen'),(2,'2020-10-03 08:20:04','2020-10-03 08:20:04','Moccasin'),(3,'2020-10-03 08:20:04','2020-10-03 08:20:04','LimeGreen'),(4,'2020-10-03 08:20:05','2020-10-03 08:20:05','Cornsilk'),(5,'2020-10-03 08:20:05','2020-10-03 08:20:05','Magenta');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_product_id_foreign` (`product_id`),
  KEY `comments_user_id_foreign` (`user_id`),
  CONSTRAINT `comments_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'2020-10-04 07:21:39','2020-10-04 07:21:39','hay',1,11),(2,'2020-10-04 07:22:58','2020-10-04 07:22:58','haasdf',1,11),(3,'2020-10-04 07:23:45','2020-10-04 07:23:45','ok',1,11),(4,'2020-10-04 07:26:01','2020-10-04 07:26:01','ok',1,11),(5,'2020-10-04 07:26:18','2020-10-04 07:26:18','blabla',1,11);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2020_09_20_111925_create_products_table',1),(6,'2020_09_20_111933_create_categories_table',1),(7,'2020_09_20_112349_create_branches_table',1),(8,'2020_09_21_171122_create_roles_table',1),(9,'2020_09_21_171133_create_permissions_table',1),(10,'2020_09_23_083552_add_forienkey_to_products',1),(11,'2020_09_27_050640_create_addresses_table',1),(12,'2020_09_27_050658_create_orders_table',1),(13,'2020_09_27_050710_create_orders_products_table',1),(14,'2020_10_03_184105_create_comments_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `total` double(8,2) NOT NULL,
  `paid` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `address_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_address_id_foreign` (`address_id`),
  KEY `orders_user_id_foreign` (`user_id`),
  CONSTRAINT `orders_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,136.00,0,'2020-10-03 11:25:41','2020-10-03 11:25:41',1,11);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_products`
--

DROP TABLE IF EXISTS `orders_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `order_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_products_order_id_foreign` (`order_id`),
  KEY `orders_products_product_id_foreign` (`product_id`),
  CONSTRAINT `orders_products_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `orders_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_products`
--

LOCK TABLES `orders_products` WRITE;
/*!40000 ALTER TABLE `orders_products` DISABLE KEYS */;
INSERT INTO `orders_products` VALUES (1,NULL,NULL,1,2,2);
/*!40000 ALTER TABLE `orders_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` bigint(20) unsigned DEFAULT NULL,
  `branch_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_category_id_foreign` (`category_id`),
  KEY `products_branch_id_foreign` (`branch_id`),
  CONSTRAINT `products_branch_id_foreign` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`) ON DELETE SET NULL,
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'2020-10-03 08:20:05','2020-10-04 08:57:25','Vinmart pro 2020','1601827045.jpeg',10000000,'Deserunt error culpa eveniet perferendis. Esse laboriosam sint est voluptas commodi asperiores molestias. Cumque repellendus eum iusto quisquam voluptatem ullam nihil.',1,1),(2,'2020-10-03 08:20:05','2020-10-04 08:57:51','Miss Margarete Smith','1601827071.jpeg',2000000,'Ut sed exercitationem vero eligendi. Consequatur doloremque illo necessitatibus autem quibusdam officiis. Labore dolores odio asperiores atque incidunt ex illo.',2,2),(3,'2020-10-03 08:20:05','2020-10-04 08:58:06','Norbert Schmitt PhD','1601827086.jpeg',120000,'Voluptates commodi ab qui ab. Sit nam eligendi amet eum voluptas impedit et. Nemo ea voluptatem qui magni aut qui.',3,3),(4,'2020-10-03 08:20:05','2020-10-04 08:58:33','Mr. Kyle Dach III','1601827113.png',20000000,'Non maiores dolores reprehenderit ullam. In sunt fugiat et qui. Aperiam quam ut quo at.',4,4),(5,'2020-10-03 08:20:05','2020-10-04 08:58:44','Gaylord Bernier','1601827124.jpeg',8,'Dolor iusto ullam itaque impedit magni non officia ex. Eos odio veniam perferendis ut eos. Qui consequatur veniam suscipit quaerat alias iste dolorem est. Pariatur soluta vitae accusamus.',5,5),(12,'2020-10-04 08:59:17','2020-10-04 08:59:17','Iphone 11 Pro max','1601827157.jpeg',3000000,'Dolor iusto ullam itaque impedit magni non officia ex. Eos odio veniam perferendis ut eos. Qui consequatur veniam suscipit quaerat alias iste dolorem est. Pariatur soluta vitae accusamus.',2,5),(13,'2020-10-04 09:00:12','2020-10-04 09:00:12','Ipad pro 2020','1601827212.jpeg',2000000,'Sản phẩm được yêu thích nhất năm 2020',3,3),(14,'2020-10-03 08:20:05','2020-10-04 08:57:25','Vinmart pro 2020','1601827045.jpeg',10000000,'Deserunt error culpa eveniet perferendis. Esse laboriosam sint est voluptas commodi asperiores molestias. Cumque repellendus eum iusto quisquam voluptatem ullam nihil.',1,1),(15,'2020-10-03 08:20:05','2020-10-04 08:57:51','Miss Margarete Smith','1601827071.jpeg',2000000,'Ut sed exercitationem vero eligendi. Consequatur doloremque illo necessitatibus autem quibusdam officiis. Labore dolores odio asperiores atque incidunt ex illo.',2,2),(16,'2020-10-03 08:20:05','2020-10-04 08:58:06','Norbert Schmitt PhD','1601827086.jpeg',120000,'Voluptates commodi ab qui ab. Sit nam eligendi amet eum voluptas impedit et. Nemo ea voluptatem qui magni aut qui.',3,3),(17,'2020-10-03 08:20:05','2020-10-04 08:58:33','Mr. Kyle Dach III','1601827113.png',20000000,'Non maiores dolores reprehenderit ullam. In sunt fugiat et qui. Aperiam quam ut quo at.',4,4),(18,'2020-10-03 08:20:05','2020-10-04 08:58:44','Gaylord Bernier','1601827124.jpeg',8,'Dolor iusto ullam itaque impedit magni non officia ex. Eos odio veniam perferendis ut eos. Qui consequatur veniam suscipit quaerat alias iste dolorem est. Pariatur soluta vitae accusamus.',5,5),(19,'2020-10-04 08:59:17','2020-10-04 08:59:17','Iphone 11 Pro max','1601827157.jpeg',3000000,'Dolor iusto ullam itaque impedit magni non officia ex. Eos odio veniam perferendis ut eos. Qui consequatur veniam suscipit quaerat alias iste dolorem est. Pariatur soluta vitae accusamus.',2,5),(20,'2020-10-04 09:00:12','2020-10-04 09:00:12','Ipad pro 2020','1601827212.jpeg',2000000,'Sản phẩm được yêu thích nhất năm 2020',3,3),(21,'2020-10-03 08:20:05','2020-10-04 08:57:25','Vinmart pro 2020','1601827045.jpeg',10000000,'Deserunt error culpa eveniet perferendis. Esse laboriosam sint est voluptas commodi asperiores molestias. Cumque repellendus eum iusto quisquam voluptatem ullam nihil.',1,1),(22,'2020-10-03 08:20:05','2020-10-04 08:57:51','Miss Margarete Smith','1601827071.jpeg',2000000,'Ut sed exercitationem vero eligendi. Consequatur doloremque illo necessitatibus autem quibusdam officiis. Labore dolores odio asperiores atque incidunt ex illo.',2,2),(23,'2020-10-03 08:20:05','2020-10-04 08:58:06','Norbert Schmitt PhD','1601827086.jpeg',120000,'Voluptates commodi ab qui ab. Sit nam eligendi amet eum voluptas impedit et. Nemo ea voluptatem qui magni aut qui.',3,3),(24,'2020-10-03 08:20:05','2020-10-04 08:58:33','Mr. Kyle Dach III','1601827113.png',20000000,'Non maiores dolores reprehenderit ullam. In sunt fugiat et qui. Aperiam quam ut quo at.',4,4),(25,'2020-10-03 08:20:05','2020-10-04 08:58:44','Gaylord Bernier','1601827124.jpeg',8,'Dolor iusto ullam itaque impedit magni non officia ex. Eos odio veniam perferendis ut eos. Qui consequatur veniam suscipit quaerat alias iste dolorem est. Pariatur soluta vitae accusamus.',5,5),(26,'2020-10-04 08:59:17','2020-10-04 08:59:17','Iphone 11 Pro max','1601827157.jpeg',3000000,'Dolor iusto ullam itaque impedit magni non officia ex. Eos odio veniam perferendis ut eos. Qui consequatur veniam suscipit quaerat alias iste dolorem est. Pariatur soluta vitae accusamus.',2,5),(27,'2020-10-04 09:00:12','2020-10-04 09:00:12','Ipad pro 2020','1601827212.jpeg',2000000,'Sản phẩm được yêu thích nhất năm 2020',3,3),(28,'2020-10-03 08:20:05','2020-10-04 08:57:25','Vinmart pro 2020','1601827045.jpeg',10000000,'Deserunt error culpa eveniet perferendis. Esse laboriosam sint est voluptas commodi asperiores molestias. Cumque repellendus eum iusto quisquam voluptatem ullam nihil.',1,1),(29,'2020-10-03 08:20:05','2020-10-04 08:57:51','Miss Margarete Smith','1601827071.jpeg',2000000,'Ut sed exercitationem vero eligendi. Consequatur doloremque illo necessitatibus autem quibusdam officiis. Labore dolores odio asperiores atque incidunt ex illo.',2,2),(30,'2020-10-03 08:20:05','2020-10-04 08:58:06','Norbert Schmitt PhD','1601827086.jpeg',120000,'Voluptates commodi ab qui ab. Sit nam eligendi amet eum voluptas impedit et. Nemo ea voluptatem qui magni aut qui.',3,3),(31,'2020-10-03 08:20:05','2020-10-04 08:58:33','Mr. Kyle Dach III','1601827113.png',20000000,'Non maiores dolores reprehenderit ullam. In sunt fugiat et qui. Aperiam quam ut quo at.',4,4),(32,'2020-10-03 08:20:05','2020-10-04 08:58:44','Gaylord Bernier','1601827124.jpeg',8,'Dolor iusto ullam itaque impedit magni non officia ex. Eos odio veniam perferendis ut eos. Qui consequatur veniam suscipit quaerat alias iste dolorem est. Pariatur soluta vitae accusamus.',5,5),(33,'2020-10-04 08:59:17','2020-10-04 08:59:17','Iphone 11 Pro max','1601827157.jpeg',3000000,'Dolor iusto ullam itaque impedit magni non officia ex. Eos odio veniam perferendis ut eos. Qui consequatur veniam suscipit quaerat alias iste dolorem est. Pariatur soluta vitae accusamus.',2,5),(34,'2020-10-04 09:00:12','2020-10-04 09:00:12','Ipad pro 2020','1601827212.jpeg',2000000,'Sản phẩm được yêu thích nhất năm 2020',3,3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Prof. Ashtyn Weber Jr.','carrie82@example.org','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','aRJgZXbcg3','2020-10-03 08:19:49','2020-10-03 08:19:49'),(2,'Terence Rosenbaum','kendrick18@example.com','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','3fEXciPM2H','2020-10-03 08:19:49','2020-10-03 08:19:49'),(3,'Emanuel Rempel','zjacobs@example.com','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','NfiymiklEK','2020-10-03 08:19:49','2020-10-03 08:19:49'),(4,'Miss Aracely Gutkowski I','hayes.gerald@example.org','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','BwCuNtYPRG','2020-10-03 08:19:49','2020-10-03 08:19:49'),(5,'Ottilie Jakubowski','luna65@example.com','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','whiWBg3Ndc','2020-10-03 08:19:49','2020-10-03 08:19:49'),(6,'Kristin Homenick','malvina72@example.org','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','OXPotpyJ0c','2020-10-03 08:19:49','2020-10-03 08:19:49'),(7,'Dr. Alvina Herzog DVM','kmarvin@example.org','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','QrhqZc1CMq','2020-10-03 08:19:49','2020-10-03 08:19:49'),(8,'Cleora Prohaska MD','fsporer@example.com','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','0jcSfZK2X0','2020-10-03 08:19:49','2020-10-03 08:19:49'),(9,'Miss Imelda Hansen','malcolm.funk@example.com','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','vQXM95CdjA','2020-10-03 08:19:49','2020-10-03 08:19:49'),(10,'Solon Treutel','ruecker.dana@example.com','2020-10-03 08:19:49','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','PrzYB8rW4N','2020-10-03 08:19:49','2020-10-03 08:19:49'),(11,'admin','admin@demo.com',NULL,'$2y$10$Zz3FwH7P3aHHi40czZffNuWTUK16Eq1e0Ubc2B5vufrZSB5f3D.WC',NULL,'2020-10-03 11:22:25','2020-10-03 11:22:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-06 22:51:06
