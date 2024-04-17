-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: devdream
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `banss` int NOT NULL,
  `status` bit(1) NOT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `charge_travail` varchar(255) DEFAULT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `commentaire_post_list` varbinary(255) DEFAULT NULL,
  `disponibilite` int NOT NULL DEFAULT '1',
  `email` varchar(255) DEFAULT NULL,
  `evaluations` varbinary(255) DEFAULT NULL,
  `identifiant` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `interactions` varbinary(255) DEFAULT NULL,
  `niveau` enum('Premiere','Deuxiemme','Troisiemme','Quateriemme') DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `role` enum('Esprit','Enseignant','Encadrant','Entreprise','Etudiant') DEFAULT NULL,
  `specialite` enum('IT','TC','GC','GE') DEFAULT NULL,
  `stage_id_stage` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_pxr6hclevplidx25gu7ki95e4` (`stage_id_stage`),
  CONSTRAINT `FKd1ffs0mcewpqcitnmfd91eti7` FOREIGN KEY (`stage_id_stage`) REFERENCES `stage` (`id_stage`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,0,_binary '\0',NULL,NULL,NULL,NULL,1,'Admin@esprit.tn',NULL,'201',NULL,NULL,NULL,'Admin','$2a$10$2RKlcDQmz9j4m/ybIJWk6ON8UwACCK5MUoepqWc79P.NlI3QuDBBm','admin','Esprit',NULL,NULL),(2,0,_binary '\0',NULL,NULL,NULL,NULL,1,'eeeAdmiaaaaaaaaaaaaaaan@esprit.tn',NULL,NULL,NULL,NULL,NULL,'eeAdmaaaain','$2a$10$xWS1m4p2XMVdR4wrMPd4quXe1hyf1kr3lCmweRpJEVKeMtD9R0fhq','rrradmaaain','Etudiant',NULL,NULL),(3,0,_binary '\0',NULL,NULL,NULL,NULL,1,'oaaaaaaaaaaaaaaaaaa@esprit.tn',NULL,NULL,NULL,NULL,NULL,'zzzzzzzzzzzzzzzzz','$2a$10$T4QOGrZ1x7i6vFzD73ObgO8Jm0QGHzSs5Uj0.wWe.ZFFVUZZVcq16','zzzzzzzzzzzzzzzzzzzzzzzzzzzz','Encadrant',NULL,NULL),(5,0,_binary '\0',NULL,NULL,NULL,NULL,1,'user@test.com',NULL,NULL,NULL,NULL,NULL,'User','$2a$10$Dr4Daq.5MqzfFF44Z8gHMuVU7/WOwcpI6FsqKfUEsgwWHTl8CRYP2','User','Etudiant',NULL,NULL),(6,0,_binary '\0',NULL,NULL,NULL,NULL,1,'Rayen@esprit.tn',NULL,'1',NULL,NULL,NULL,'Rayen','$2a$10$INycJXRmo4KTvknQz.CYvujsY7jXXj4jG1XjbwOVqxvCftL7.7Ctq','Rayen','Etudiant',NULL,NULL),(7,0,_binary '\0',NULL,NULL,NULL,NULL,1,'Ranim@esprit.tn',NULL,NULL,NULL,NULL,NULL,'Ranim','$2a$10$lnDB2fak1c6oIqDv7rUl2eGFODg3vgderISzyGlhhmYftqNvylOxS','Ranim','Entreprise',NULL,NULL),(8,0,_binary '\0',NULL,NULL,NULL,NULL,1,'Ghofrane@esprit.tn',NULL,NULL,NULL,NULL,NULL,'Fajraoui','$2a$10$s2ebVYrynzIhXtrsICSbg.Wj2mDnE.oI8ROX4rJNifyRwY8H6kjCO','Ghofrane','Encadrant',NULL,NULL),(9,0,_binary '\0',NULL,NULL,NULL,NULL,1,'Ghada@esprit.tn',NULL,NULL,NULL,NULL,NULL,'ghada','$2a$10$T7RZ8sabJGMI3l76bdFTmO6FIf2s0mGf0eHD0hBdmiy1Q8yBYfwke','ghada','Enseignant',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 19:32:50
