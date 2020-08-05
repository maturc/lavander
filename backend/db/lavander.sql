CREATE DATABASE  IF NOT EXISTS `slack-clone` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `slack-clone`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: slack-clone
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `channel_participants`
--

DROP TABLE IF EXISTS `channel_participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channel_participants` (
  `id_channel` int NOT NULL,
  `id_team` int NOT NULL,
  PRIMARY KEY (`id_channel`,`id_team`),
  KEY `id_team_idx` (`id_team`),
  CONSTRAINT `fk_id_channel` FOREIGN KEY (`id_channel`) REFERENCES `channels` (`id_channel`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_id_team` FOREIGN KEY (`id_team`) REFERENCES `teams` (`id_team`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channel_participants`
--

LOCK TABLES `channel_participants` WRITE;
/*!40000 ALTER TABLE `channel_participants` DISABLE KEYS */;
/*!40000 ALTER TABLE `channel_participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `channels`
--

DROP TABLE IF EXISTS `channels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `channels` (
  `id_channel` int NOT NULL AUTO_INCREMENT,
  `channel_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_channel`),
  UNIQUE KEY `id_channel_UNIQUE` (`id_channel`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `channels`
--

LOCK TABLES `channels` WRITE;
/*!40000 ALTER TABLE `channels` DISABLE KEYS */;
INSERT INTO `channels` VALUES (1,'General'),(2,'Animals'),(3,'Movies'),(4,'TV shows'),(5,'Music'),(6,'Games'),(7,'Programing'),(8,'Language');
/*!40000 ALTER TABLE `channels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id_team` int NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_team`,`id_user`),
  KEY `id_team_idx` (`id_team`),
  KEY `id_user_idx` (`id_user`),
  CONSTRAINT `id_team` FOREIGN KEY (`id_team`) REFERENCES `teams` (`id_team`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,1);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id_user` int NOT NULL,
  `id_channel` int NOT NULL,
  `message` varchar(255) NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`time`),
  KEY `fk_messages_users1_idx` (`id_user`),
  KEY `fk_messages_channels1_idx` (`id_channel`),
  CONSTRAINT `fk_messages_channels1` FOREIGN KEY (`id_channel`) REFERENCES `channels` (`id_channel`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_messages_users1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,'Hello!','2020-08-02 18:12:35'),(22,1,'Hi there!','2020-08-02 18:16:56'),(30,1,'Hey, I just joined. Nice to meet you all.','2020-08-02 18:32:04'),(30,6,'Anybody playing Ghost of Tsushima? Thinking of getting it, looks fun','2020-08-02 18:46:14'),(30,8,'Dobar dan','2020-08-02 18:47:10'),(30,8,'I finally started learning croatian last month. My grandmother is Croatian and I always wanted to learn it.','2020-08-02 18:48:23'),(1,8,'I\'m from Croatia as well, feel free to ask me if you need any help!!','2020-08-02 18:49:30'),(30,8,'dogovoreno!','2020-08-02 18:52:33'),(30,8,'I\'ll ask you for some help soon','2020-08-02 18:52:51'),(1,6,'Yeah, I\'m enjoying it so far https://i.imgur.com/3LuY5WA.jpg','2020-08-02 19:07:01'),(1,1,'Welcome!!','2020-08-02 19:09:22'),(31,7,'Hey can somebody help me with my code???','2020-08-02 19:22:48'),(31,7,'its c++ https://i.imgur.com/IAJWZ6F.png','2020-08-02 19:24:17'),(1,7,'you need to put semicolons at the end of your commands','2020-08-02 19:26:03'),(1,7,' cout<<\"Hello World\";','2020-08-02 19:26:07'),(1,7,'Read you error messages!','2020-08-02 19:26:16'),(31,7,'oh.. ty','2020-08-02 19:28:19'),(29,2,'https://i.imgur.com/OKzMuhm.png','2020-08-02 19:33:39'),(29,2,'https://i.imgur.com/fi5oBWg.png','2020-08-02 19:36:15'),(29,2,'this is my cat, Felicia','2020-08-02 19:36:45'),(30,6,'looks beautiful','2020-08-02 19:41:34'),(32,6,'Hello','2020-08-02 19:41:51'),(32,6,'I\'m only playing satisfactory recently, its so addicting','2020-08-02 19:42:19'),(1,6,'we should play together sometimes','2020-08-02 19:44:46'),(33,6,'count me in as well','2020-08-02 19:46:58'),(32,6,'sure','2020-08-02 19:47:08'),(33,2,'this is my dog, his name is boris https://i.imgur.com/fT3Kzky.jpg','2020-08-02 19:48:39'),(34,2,'he has an awesome name!!','2020-08-02 19:50:37'),(34,4,'just finished the first season of money heist','2020-08-02 19:51:50'),(34,4,'can\'t wait to watch more','2020-08-02 19:51:57'),(33,4,'I will watch that after I\'m done with vikings','2020-08-02 19:52:41'),(34,5,'I\'m obsessed with sigur ros lately','2020-08-02 19:56:48'),(34,5,'https://www.youtube.com/watch?v=DJV-u_Tt2nk','2020-08-02 19:56:54'),(35,6,'anybody wants to play valorant with me?','2020-08-02 20:00:06'),(35,5,'here is some classic rap https://www.youtube.com/watch?v=eXvBjCO19QY','2020-08-02 20:05:44'),(43,1,'Hey, how is everyone doing?','2020-08-03 01:16:55'),(43,5,'https://open.spotify.com/track/4vjpLMyL3ZO6aphdYr8XYw?si=g6ykUObTQ_CMCqI-JZgw2w','2020-08-03 01:20:58'),(1,5,'Oh great, they recently added my country to spotify','2020-08-03 01:21:58'),(43,5,'I got some great playlists to share with you then','2020-08-03 01:22:39'),(44,1,'I\'m doing great!! Passed my finals today!','2020-08-03 01:26:19'),(45,1,'Thats great news, Ivana! Congratulations!!!','2020-08-03 01:31:43'),(46,5,'I\'m recording a guitar cover right now','2020-08-03 16:11:03'),(47,5,'Sweet! Don\'t forget to share it afterwards','2020-08-03 16:12:53'),(46,5,'Sure thing','2020-08-03 16:13:04'),(48,1,'Hello https://i.imgur.com/Fod4bPK.gif','2020-08-04 00:27:03'),(49,1,'What\'s up?','2020-08-05 11:35:28'),(49,3,'What are your favorite movies?','2020-08-05 11:37:33'),(51,1,'Hey','2020-08-05 18:53:49'),(50,3,'That is a really hard question, I love so many movies','2020-08-05 18:54:15'),(50,1,'Hiiii','2020-08-05 18:54:28'),(52,1,'hii','2020-08-06 00:27:02');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id_team` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(45) NOT NULL,
  `id_owner` int NOT NULL,
  PRIMARY KEY (`id_team`),
  UNIQUE KEY `id_team_UNIQUE` (`id_team`),
  KEY `owner_idx` (`id_owner`),
  CONSTRAINT `id_owner` FOREIGN KEY (`id_owner`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'backend',1);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `idusers_UNIQUE` (`id_user`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Matija','abc','$2b$10$xG01uMFYZsOCU1xsMkEb7eZuLmtUHEu4WhRgt4jiSbsY5cEjlMTE6','https://i.imgur.com/dZ2VsZA.png'),(22,'Guest','guest','$2b$10$z4WU0973BX1F7kDuHX4E1.oFH57l5nwTYmTN4UXOhsJ88lSDnv2ey',NULL),(29,'Maria','ma@r.ia','$2b$10$wwck4ZdNunxnvYib9tzCwOrahepFj.q4a4K9cQeuaGl3vJ4LtsCCC','https://i.imgur.com/L7Ycd2h.png'),(30,'Johnny','jo@hn.ny','$2b$10$5IjbIi/O8oqUYKaabPeWuOp.bvJrt.tdnK8E95fEFdJAKCyCM0Xqm','https://i.imgur.com/gzX2CpU.png'),(31,'1337 h4x02','leet@x.com','$2b$10$1I3c/8IGgo5gKP65MKOFle3.AtXpABBWC8Ra7DFqwsb3sAtvb81/q','https://i.imgur.com/LAhChO7.jpg'),(32,'Erika','er@i.ka','$2b$10$iTsuKu7.gATnGGnyPkcwOunWG5gK.fA.VQvN6pTe41Fawrxf7Vj9m','https://i.imgur.com/oZYURiP.png'),(33,'Gnelf','asdf@bb.bb','$2b$10$Qphtc4Qie7KyfarUcgmI/u3vZTJAh5pWc6MJn3KeDyRL0Oj2QvXJ.','https://i.imgur.com/PN637Zc.png'),(34,'Boris','qwert@qwert.cc','$2b$10$98c0OG..uu0nS6UdsQCctu599F1Ne6HOp/qwYB66vaxTUVBGDxt/W','https://i.imgur.com/EKVxjFc.png'),(35,'Zink','qwer@dsd.dsd','$2b$10$Er9biABUll3UJug6.KIrHur5da0GjapNOQds4qtRJbWZjZ54KIryC','https://i.imgur.com/LsAJA7F.png'),(43,'Blue','blue@bb.com','$2b$10$9MKJA0nO4K5OqUIh86r8OuMvYryW23/JcpDCHUigH5jYmo5qd1Cdi','https://i.imgur.com/iX92Oj5.png'),(44,'Ivana','iv@na.na','$2b$10$XBjKQycEuQfmR.kHPem.6eI/42vMN/lJg/BbDOZMt8qMIdOUQkBhO','https://i.imgur.com/nFJ2nma.png'),(45,'Sam','sam@sam.sam','$2b$10$L08hgSsQUq9BZkwm9JTIw.BfAhfLrBNnWtY9yDZQm1PL.LoiP5/ZO','https://i.imgur.com/Ih69bDm.png'),(46,'Gitta','git@ta.ta','$2b$10$SMGyVmwwT4UE2XreX.Dr1.v/QgPq8Tp8IvgCMqXNKv4Wy8T8xfUXW','https://i.imgur.com/FOcyP5B.png'),(47,'Lenny','lenny@len.ddd','$2b$10$gUfBpvyJQJjwGrD/PfAMTeeYO.qSPiEYF7pQvqPGbicY7QM0P9Ive','https://i.imgur.com/1ZAW3KM.png'),(48,'Nikolina','092@ds.ss','$2b$10$Zpei4SQxLHA8tJkT88MSrOpxniWoUsntreQ8BSIRseuGdAIydPnre','https://i.imgur.com/KxfYmEW.png'),(49,'Luka','luk@gd.ss','$2b$10$HzuLg0zom7tbegR/eDyUb.MEpCxLXD1DeA/0kt7tc5VpBUGLltfPK','https://i.imgur.com/X2idiTq.png'),(50,'Valentina','sdadas@dsa.sd','$2b$10$hv5L3sZ9Z3RCkMz2HPncaeHFBBa9RNe2zguNJgRFprVaq7DK.HEh2','https://i.imgur.com/MlpBxql.png'),(51,'Ivan','dasda@dsadsa.ds','$2b$10$du0bwxslYEgKOrOekxfTiepHew9egx0FVPdZwS1B5IcC92uyuO/36','https://i.imgur.com/RA5fgHq.png'),(52,'Marko','marko@gmail.com','$2b$10$oZotyMyCcznng8.1cz.3g.jB8jev3pgu8VzZ5HfDHp3bMusm0ZcSG','https://i.imgur.com/czTLTOf.png');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `users_public`
--

DROP TABLE IF EXISTS `users_public`;
/*!50001 DROP VIEW IF EXISTS `users_public`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `users_public` AS SELECT 
 1 AS `id_user`,
 1 AS `username`,
 1 AS `avatar`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'slack-clone'
--

--
-- Dumping routines for database 'slack-clone'
--

--
-- Final view structure for view `users_public`
--

/*!50001 DROP VIEW IF EXISTS `users_public`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `users_public` AS select `users`.`id_user` AS `id_user`,`users`.`username` AS `username`,`users`.`avatar` AS `avatar` from `users` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-06  1:06:00
