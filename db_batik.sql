-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 10:14 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_batik`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_batik`
--

CREATE TABLE `tb_batik` (
  `id_batik` int(255) NOT NULL,
  `nama_batik` varchar(255) NOT NULL,
  `id_deskripsi` int(255) NOT NULL,
  `gambar_batik` varchar(255) DEFAULT NULL,
  `tahun_diciptakan` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_batik`
--

INSERT INTO `tb_batik` (`id_batik`, `nama_batik`, `id_deskripsi`, `gambar_batik`, `tahun_diciptakan`) VALUES
(2, 'Batik Parang', 1, NULL, '1586');

-- --------------------------------------------------------

--
-- Table structure for table `tb_deskripsi`
--

CREATE TABLE `tb_deskripsi` (
  `id_deskripsi` int(255) NOT NULL,
  `makna_batik` text NOT NULL,
  `sejarah` text NOT NULL,
  `jenis_batik` text DEFAULT NULL,
  `penggunaan` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_deskripsi`
--

INSERT INTO `tb_deskripsi` (`id_deskripsi`, `makna_batik`, `sejarah`, `jenis_batik`, `penggunaan`) VALUES
(1, 'Batik parang memiliki makna yang tinggi dan mempunyai nilai yang besar dalam filosofinya. Batik motif dari Jawa ini adalah batik motif dasar yang paling tua. Batik parang ini memiliki makna petuah untuk tidak pernah menyerah, ibarat ombak laut yang tak pernah berhenti bergerak. Batik parang juga menggambarkan jalinan yang tidak pernah putus, baik dalam arti upaya untuk memperbaiki diri, upaya memperjuangkan kesejahteraan, maupun bentuk pertalian keluarga.\r\n\r\nBatik parang bahkan menggambarkan kain yang belum rusak, baik dalam arti memperbaiki diri, kesejahteraan upaya mereka, serta bentuk hubungan di mana batik parang pada masa lalu adalah hadiah yang mulia untuk anak-anaknya. Dalam konteks ini, pola berisi dewan orang tua untuk melanjutkan perjuangan parang dilanjutkan. Garis diagonal lurus melambangkan penghormatan dan cita-cita, serta kesetiaan kepada nilai yang sebenarnya. Dinamika dalam pola parang ini juga disebut ketangkasan, kewaspadaan, dan kontituinitas antara pekerja dengan pekerja lain. Batik parang biasanya digunakan untuk acara pembukaan. Misalnya: Senapati yang ingin pergi berperang, agar pulang membawa kemenangan.', 'Asal-usul batik parang berawal dari dari Jawa, khususnya Daerah Istimewa Yogyakarta dan Solo. Batik ini dibuat oleh para pengrajin batik di daerah tersebut dan mulai populer pada abad ke-19. Motif yang digunakan pada batik parang sangat khas dengan bentuk parang yang memiliki makna simbolis yang dalam.\r\n\r\nPerkembangan batik parang dari masa ke masa cukup signifikan. Pada awalnya, batik parang hanya digunakan oleh keluarga kerajaan dan masyarakat yang berada di kalangan atas saja. Namun, seiring berjalannya waktu, batik parang mulai dikenal oleh masyarakat luas dan mulai digunakan dalam berbagai acara, baik acara resmi maupun acara keluarga.\r\n\r\nFaktor yang mempengaruhi perkembangan batik parang antara lain adalah perkembangan teknologi, peningkatan permintaan pasar, serta dukungan pemerintah dalam melestarikan batik parang. Pemerintah juga turut serta dalam meningkatkan kualitas batik parang melalui pelatihan yang diberikan kepada para pengrajin batik.', 'Jenis batik ini hanya satu', 'Acara Resmi: Batik Parang sering dipakai dalam acara-acara resmi seperti pernikahan, upacara keagamaan, atau acara pemerintahan. Motifnya yang klasik dan maknanya yang dalam membuatnya cocok untuk momen-momen penting ini.\r\n\r\nPakaian Sehari-hari: Meskipun sering dikaitkan dengan acara formal, Batik Parang juga bisa menjadi pilihan untuk pakaian sehari-hari. Banyak orang yang mengenakan batik ini sebagai cara untuk menunjukkan identitas budaya dan kebanggaan akan warisan tradisional.\r\n\r\nBusana Profesional: Di tempat kerja atau acara profesional, Batik Parang bisa menjadi pilihan busana yang elegan dan klasik. Banyak pekerja kantoran atau profesional yang mengenakan batik ini sebagai bagian dari dress code yang ditetapkan.\r\n\r\nSouvenir dan Hadiah: Batik Parang juga sering dijadikan souvenir atau hadiah karena keindahannya dan nilai kulturalnya. Hal ini membuatnya menjadi pilihan yang populer sebagai oleh-oleh dari daerah asalnya, terutama bagi wisatawan yang berkunjung ke Jawa.\r\n\r\nPenggunaan Khusus: Beberapa jenis Batik Parang memiliki penggunaan khusus, misalnya Parang Slobog yang digunakan dalam upacara pelantikan, atau Parang Tuban yang berasal dari daerah Tuban, Jawa Timur.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_batik`
--
ALTER TABLE `tb_batik`
  ADD PRIMARY KEY (`id_batik`),
  ADD UNIQUE KEY `id_deskripsi` (`id_deskripsi`);

--
-- Indexes for table `tb_deskripsi`
--
ALTER TABLE `tb_deskripsi`
  ADD PRIMARY KEY (`id_deskripsi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_batik`
--
ALTER TABLE `tb_batik`
  MODIFY `id_batik` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_batik`
--
ALTER TABLE `tb_batik`
  ADD CONSTRAINT `tb_batik_ibfk_1` FOREIGN KEY (`id_deskripsi`) REFERENCES `tb_deskripsi` (`id_deskripsi`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
