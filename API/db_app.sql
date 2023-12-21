-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2017 at 11:22 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `id` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `date_order` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total` float NOT NULL DEFAULT '0',
  `note` text,
  `status` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`id`, `id_customer`, `date_order`, `total`, `note`, `status`) VALUES
(34, 7, '2017-04-15 07:14:16', 292, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `bill_detail`
--

CREATE TABLE `bill_detail` (
  `id` int(11) NOT NULL,
  `id_bill` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` float DEFAULT '0',
  `size` int (2) NOT NULL,
  `price` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bill_detail`
--

INSERT INTO `bill_detail` (`id`, `id_bill`, `id_product`, `quantity`, `price`) VALUES
(13, 34, 33, 3, 157),
(14, 34, 34, 3, 135);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `link` text  NOT NULL,
  `id_product` int(11) NOT NULL
) 

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `link`, `id_product`) VALUES

(1,'Converse/chuck 70/Converse.2.Chuck_70.White_1.jpg | Converse/chuck 70/Converse.2.Chuck_70.White_3.jpg | Converse/chuck 70/Converse.2.Chuck_70.White_2.jpg | Converse/chuck 70/Converse.2.Chuck_70.White_4.jpg',1),
(2,'Converse/chuck 70/Converse.2.Chuck_70.White_High_1.jpg | Converse/chuck 70/Converse.2.Chuck_70.White_High_3.jpg | Converse/chuck 70/Converse.2.Chuck_70.White_High_2.jpg | Converse/chuck 70/Converse.2.Chuck_70.White_High_4.jpg',2),
(3,'Converse/chuck taylor/Converse.1.Chuck_Taylor.Black_High_1.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Black_High_3.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Black_High_2.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Black_High_4.jpg',3),
(4,'Converse/chuck taylor/Converse.1.Chuck_Taylor.Black_Monochrome_High_1.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Black_Monochrome_High_3.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Black_Monochrome_High_2.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Black_Monochrome_High_4.jpg',4),
(5,'Converse/chuck taylor low/Converse.4.Chuck_Taylor.Black_1.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Black_3.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Black_2.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Black_4.jpg',5),
(6,'Converse/chuck taylor low/Converse.4.Chuck_Taylor.Black_Monochrome_1.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Black_Monochrome_3.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Black_Monochrome_2.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Black_Monochrome_4.jpg',6),
(7,'Converse/chuck taylor low/Converse.4.Chuck_Taylor.Natural_Ivory_1.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Natural_Ivory_3.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Natural_Ivory_2.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Natural_Ivory_4.jpg',7),
(8,'Converse/chuck taylor low/Converse.4.Chuck_Taylor.Navy_1.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Navy_3.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Navy_2.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Navy_4.jpg',8),
(9,'Converse/chuck taylor low/Converse.4.Chuck_Taylor.Optical_White_1.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Optical_White_3.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Optical_White_2.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Optical_White_4.jpg',9),
(10,'Converse/chuck taylor low/Converse.4.Chuck_Taylor.Red_1.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Red_3.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Red_2.jpg | Converse/chuck taylor low/Converse.4.Chuck_Taylor.Red_4.jpg',10),
(11,'Converse/chuck taylor/Converse.1.Chuck_Taylor.Natural_Ivory_High_1.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Natural_Ivory_High_3.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Natural_Ivory_High_2.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Natural_Ivory_High_4.jpg',11),
(12,'Converse/chuck taylor/Converse.1.Chuck_Taylor.Navy_High_1.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Navy_High_3.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Navy_High_2.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Navy_High_4.jpg',12),
(13,'Converse/chuck taylor/Converse.1.Chuck_Taylor.Optical_White_High_1.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Optical_White_High_3.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Optical_White_High_2.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Optical_White_High_4.jpg',13),
(14,'Converse/chuck taylor/Converse.1.Chuck_Taylor.Optical_White_High_1.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Optical_White_High_3.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Optical_White_High_2.jpg | Converse/chuck taylor/Converse.1.Chuck_Taylor.Optical_White_High_4.jpg' ,14),
(15,'Converse/one star pro/Converse.5.One_Star_Pro.Black_1.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Black_3.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Black_2.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Black_4.jpg',15),
(16,'Converse/one star pro/Converse.5.One_Star_Pro.Erget_1.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Erget_3.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Erget_2.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Erget_4.jpg',16),
(17,'Converse/one star pro/Converse.5.One_Star_Pro.Green_1.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Green_3.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Green_2.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Green_4.jpg',17),
(18,'Converse/one star pro/Converse.5.One_Star_Pro.Grey_1.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Grey_3.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Grey_2.jpg | Converse/one star pro/Converse.5.One_Star_Pro.Grey_4.jpg',18),
(19,'Converse/one star pro others/Converse.6.One_Star_Pro.Imi_Gente!_1.jpg | Converse/one star pro others/Converse.6.One_Star_Pro.Imi_Gente!_3.jpg | Converse/one star pro others/Converse.6.One_Star_Pro.Imi_Gente!_2.jpg | Converse/one star pro others/Converse.6.One_Star_Pro.Imi_Gente!_4.jpg',19),
(20,'Converse/one star pro others/Converse.6.One_Star_Pro.Lips_1.jpg | Converse/one star pro others/Converse.6.One_Star_Pro.Lips_3.jpg | Converse/one star pro others/Converse.6.One_Star_Pro.Lips_2.jpg | Converse/one star pro others/Converse.6.One_Star_Pro.Lips_4.jpg',20),
(21, 'Converse/run star hike platform/Converse.7.Run_Star.Black_1.jpg | Converse/run star hike platform/Converse.7.Run_Star.Black_3.jpg | Converse/run star hike platform/Converse.7.Run_Star.Black_2.jpg | Converse/run star hike platform/Converse.7.Run_Star.Black_4.jpg',21),
(22, 'Converse/run star hike platform/Converse.7.Run_Star.BLue_1.jpg | Converse/run star hike platform/Converse.7.Run_Star.BLue_3.jpg | Converse/run star hike platform/Converse.7.Run_Star.BLue_2.jpg | Converse/run star hike platform/Converse.7.Run_Star.BLue_4.jpg',22),
(23,'Converse/run star hike platform/Converse.7.Run_Star.White_1.jpg | Converse/run star hike platform/Converse.7.Run_Star.White_3.jpg | Converse/run star hike platform/Converse.7.Run_Star.White_2.jpg | Converse/run star hike platform/Converse.7.Run_Star.White_4.jpg',23);


-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `id_type` int(11) DEFAULT NULL,
 
  `price` float DEFAULT '0',
  
  `color` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL COMMENT 'the loai cua giay/ chat lieu',
  `description` text NOT NULL,
  `new` tinyint(4) NOT NULL DEFAULT '0',
  `inCollection` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `id_type`, `price`, `color`, `material`, `description`, `new`, `inCollection`) VALUES






(1,'Chuck 70 ', 2,  1800000,'White','Low Top', 'Converse Chuck 70S 1970s được xem là đỉnh cao của “nghệ thuật” thời trang bởi sự pha trộn giữa nét cổ điển và hiện đại. Giữ cho mình một dấu ấn của thời trang cố điển cho đến nay Chuck 70S vẫn là một trong những sản phẩm dẫn đầu xu hướng. Chuck 70S được thêm vào những chi tiết đảm bảo đúng chất vintage, đồng thời tạo được chất lượng tốt hơn cho người mang. Trong đó, những điểm mới trên đôi giày Chuck 1970s được các nhà thiết kế đưa vào mà bạn có thể nhận diện ngay:\r\n\r\n\r\n\r\nPhần đế giày có màu ngà hơn so với các thiết kế trước, cao hơn và được phủ một lớp bóng để hạn chế bám bẩn và dễ dàng vệ sinh.\r\n\r\nLớp vải Canvas phần thân giày được dệt dày hơn, có lớp lót đệm giúp giày cứng cáp hơn, không còn tình trạng ọp ẹp sau một thời gian sử dụng như các mẫu cũ\r\nĐệm chân Ortholite ® êm ái có thể tháo rời, làm giảm lực ma sát giữa ngón - gót chân với giày.\r\nForm giày được thiết kế chuẩn hơn với gót giày và mũi giày ôm sát vào chân nhưng không gây cảm giác khó chịu cho người mang.\r\n\r\nĐường viền đen quanh đế nổi lên trên nền trắng ngà tạo sự bắt mắt, điểm nhấn cho đôi giày. \r\n\r\nĐường kim mũi chỉ quanh thân giày được gia công tỉ mỉ tạo nên sự tinh tế, nổi bật cho đôi giày.\r\n\r\nLogo sau gót giày được thiết kế lại với font chữ của những năm 1970, chữ “Converse All Star Chuck Taylor” trắng nằm trên nền đen tạo nên sự khác biết so với các thiết kế trước.\r\n\r\n\r\n\r\nMột điểm “chất như nước cất” của dòng giày Converse 1970s chính là khả năng hòa hợp với tất cả các phong cách thời trang. Khiến bạn có thể kết hợp nhiều Outfit chuẩn không cần chỉnh.\r\n\r\n\r\n\r\nBạn sẽ không cần phải suy nghĩ hôm nay “mặc gì, mang gì” khi chỉ cần một đôi Converse Chuck 1970s. Bạn có thể cân tất cả mọi phong cách từ quần tây – sơ mi đi học, cho đến phong cách bụi bặm, nổi loạn hay nhẹ nhàng, thanh lịch, … Bởi thiết kế của Chuck Taylor 1970s mặc dù mang đậm phong cách vintage, cổ điển. Nhưng vẫn giữ được sự hiện đại trong thiết kế của mình với đầy đủ hai phiên bản Converse Chuck 70S cổ thấp và Converse Chuck 70S cổ cao cùng sự đa dạng về màu sắc (vàng, xanh dương, đỏ, đen, trắng, full đen da và full đen trắng). Điều này giúp bạn có thể dễ dàng lựa chọn một phong cách thời trang cho riêng mình.\r\n\r\nVới thiết kế và những ưu điểm về chất lượng mà Chuck 1970s mang lại, đây thật sự là một “siêu phẩm” đáng “đồng tiền bát gạo” mà bạn có thể chi ra.  Khác với những loại giày khác, riêng với Converse, một điều khá lạ là việc càng mang lâu, đôi giày lại càng toát ra được vẻ trẻ trung, hiện đại, khỏe khoắn đúng với chất Converse. Đặc biệt, bạn có thể lựa chọn các tông giày màu sáng để những set đồ của bạn trông rực rỡ, năng động hơn so với ngày thường.\r\n\r\n\r\n\r\nVới sự nổi bật, cá tính và chất lượng của mình, Chuck Taylor 1970s luôn nằm trong những mẫu giày bán chạy nhất hiện nay.',1,0),
(2,'Chuck 70 ', 2,  1800000, 'White' ,'High Top', 'Converse Chuck 70S 1970s được xem là đỉnh cao của “nghệ thuật” thời trang bởi sự pha trộn giữa nét cổ điển và hiện đại. Giữ cho mình một dấu ấn của thời trang cố điển cho đến nay Chuck 70S vẫn là một trong những sản phẩm dẫn đầu xu hướng. Chuck 70S được thêm vào những chi tiết đảm bảo đúng chất vintage, đồng thời tạo được chất lượng tốt hơn cho người mang. Trong đó, những điểm mới trên đôi giày Chuck 1970s được các nhà thiết kế đưa vào mà bạn có thể nhận diện ngay:\r\n\r\n\r\n\r\nPhần đế giày có màu ngà hơn so với các thiết kế trước, cao hơn và được phủ một lớp bóng để hạn chế bám bẩn và dễ dàng vệ sinh.\r\n\r\nLớp vải Canvas phần thân giày được dệt dày hơn, có lớp lót đệm giúp giày cứng cáp hơn, không còn tình trạng ọp ẹp sau một thời gian sử dụng như các mẫu cũ\r\nĐệm chân Ortholite ® êm ái có thể tháo rời, làm giảm lực ma sát giữa ngón - gót chân với giày.\r\nForm giày được thiết kế chuẩn hơn với gót giày và mũi giày ôm sát vào chân nhưng không gây cảm giác khó chịu cho người mang.\r\n\r\nĐường viền đen quanh đế nổi lên trên nền trắng ngà tạo sự bắt mắt, điểm nhấn cho đôi giày. \r\n\r\nĐường kim mũi chỉ quanh thân giày được gia công tỉ mỉ tạo nên sự tinh tế, nổi bật cho đôi giày.\r\n\r\nLogo sau gót giày được thiết kế lại với font chữ của những năm 1970, chữ “Converse All Star Chuck Taylor” trắng nằm trên nền đen tạo nên sự khác biết so với các thiết kế trước.\r\n\r\n\r\n\r\nMột điểm “chất như nước cất” của dòng giày Converse 1970s chính là khả năng hòa hợp với tất cả các phong cách thời trang. Khiến bạn có thể kết hợp nhiều Outfit chuẩn không cần chỉnh.\r\n\r\n\r\n\r\nBạn sẽ không cần phải suy nghĩ hôm nay “mặc gì, mang gì” khi chỉ cần một đôi Converse Chuck 1970s. Bạn có thể cân tất cả mọi phong cách từ quần tây – sơ mi đi học, cho đến phong cách bụi bặm, nổi loạn hay nhẹ nhàng, thanh lịch, … Bởi thiết kế của Chuck Taylor 1970s mặc dù mang đậm phong cách vintage, cổ điển. Nhưng vẫn giữ được sự hiện đại trong thiết kế của mình với đầy đủ hai phiên bản Converse Chuck 70S cổ thấp và Converse Chuck 70S cổ cao cùng sự đa dạng về màu sắc (vàng, xanh dương, đỏ, đen, trắng, full đen da và full đen trắng). Điều này giúp bạn có thể dễ dàng lựa chọn một phong cách thời trang cho riêng mình.\r\n\r\nVới thiết kế và những ưu điểm về chất lượng mà Chuck 1970s mang lại, đây thật sự là một “siêu phẩm” đáng “đồng tiền bát gạo” mà bạn có thể chi ra.  Khác với những loại giày khác, riêng với Converse, một điều khá lạ là việc càng mang lâu, đôi giày lại càng toát ra được vẻ trẻ trung, hiện đại, khỏe khoắn đúng với chất Converse. Đặc biệt, bạn có thể lựa chọn các tông giày màu sáng để những set đồ của bạn trông rực rỡ, năng động hơn so với ngày thường.\r\n\r\n\r\n\r\nVới sự nổi bật, cá tính và chất lượng của mình, Chuck Taylor 1970s luôn nằm trong những mẫu giày bán chạy nhất hiện nay.',1,0),
(3,'Chuck Taylor ', 1,   1300000, 'Black','High Top', 'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n\r\n\r\n- Converse Classic cổ cao: có patch logo chữ ký của Chuck Taylor được in bên hông giày, kèm logo All Star được in ở đế giày\r\n\r\n\r\nPhiên bản Chuck Classic cổ cao vẫn giữ được nét độc đáo đặc trưng của thương hiệu, mang đến cho người mang một phong cách mới.\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' , 0, 1),
(4,'Chuck Taylor', 1, 1300000,'Black Monochrome', 'High Top','Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n\r\n\r\n- Converse Classic cổ cao: có patch logo chữ ký của Chuck Taylor được in bên hông giày, kèm logo All Star được in ở đế giày\r\n\r\n\r\nPhiên bản Chuck Classic cổ cao vẫn giữ được nét độc đáo đặc trưng của thương hiệu, mang đến cho người mang một phong cách mới.\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' , 1 , 0),
(5,'Chuck Taylor ', 1,   1300000,'Black','Low Top',  'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n- Converse Classic cổ thấp: có logo All Star được in 3D ở phần gót giày\r\n Thì phiên bản cổ thấp lại đảm bảo sự đơn giản, phổ biến hơn vì chúng dễ đi, dễ kết hợp quần áo.\r\n\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' , 0 ,1),
(6,'Chuck Taylor', 1,  1300000,'Black Monochrome', 'Low Top', 'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n- Converse Classic cổ thấp: có logo All Star được in 3D ở phần gót giày\r\n Thì phiên bản cổ thấp lại đảm bảo sự đơn giản, phổ biến hơn vì chúng dễ đi, dễ kết hợp quần áo.\r\n\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.', 0 ,1),
(7,'Chuck Taylor', 1,  1300000, 'Natural Ivory', 'Low Top',  'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n- Converse Classic cổ thấp: có logo All Star được in 3D ở phần gót giày\r\n Thì phiên bản cổ thấp lại đảm bảo sự đơn giản, phổ biến hơn vì chúng dễ đi, dễ kết hợp quần áo.\r\n\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.', 0 ,1),
(8,'Chuck Taylor', 1, 1300000,'navy','Low Top',  'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n- Converse Classic cổ thấp: có logo All Star được in 3D ở phần gót giày\r\n Thì phiên bản cổ thấp lại đảm bảo sự đơn giản, phổ biến hơn vì chúng dễ đi, dễ kết hợp quần áo.\r\n\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' ,1,0),
(9,'Chuck Taylor ', 1,  1300000, 'Optiocal White','Low Top',  'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n- Converse Classic cổ thấp: có logo All Star được in 3D ở phần gót giày\r\n Thì phiên bản cổ thấp lại đảm bảo sự đơn giản, phổ biến hơn vì chúng dễ đi, dễ kết hợp quần áo.\r\n\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.', 0 ,1),
(10,'Chuck Taylor ', 1,  1300000,'Red', 'Low Top', 'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n- Converse Classic cổ thấp: có logo All Star được in 3D ở phần gót giày\r\n Thì phiên bản cổ thấp lại đảm bảo sự đơn giản, phổ biến hơn vì chúng dễ đi, dễ kết hợp quần áo.\r\n\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' ,0 , 1),
(11,'Chuck Taylor', 1,  1300000,  'Natural Ivory', 'High Top','Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n\r\n\r\n- Converse Classic cổ cao: có patch logo chữ ký của Chuck Taylor được in bên hông giày, kèm logo All Star được in ở đế giày\r\n\r\n\r\nPhiên bản Chuck Classic cổ cao vẫn giữ được nét độc đáo đặc trưng của thương hiệu, mang đến cho người mang một phong cách mới.\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' ,1,0),
(12,'Chuck Taylor', 1, 1300000,'navy','High Top', 'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n\r\n\r\n- Converse Classic cổ cao: có patch logo chữ ký của Chuck Taylor được in bên hông giày, kèm logo All Star được in ở đế giày\r\n\r\n\r\nPhiên bản Chuck Classic cổ cao vẫn giữ được nét độc đáo đặc trưng của thương hiệu, mang đến cho người mang một phong cách mới.\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' ,1,0),
(13,'Chuck Taylor', 1,  1300000,'Optiocal White', 'High Top','Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n\r\n\r\n- Converse Classic cổ cao: có patch logo chữ ký của Chuck Taylor được in bên hông giày, kèm logo All Star được in ở đế giày\r\n\r\n\r\nPhiên bản Chuck Classic cổ cao vẫn giữ được nét độc đáo đặc trưng của thương hiệu, mang đến cho người mang một phong cách mới.\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' 0, 1),
(14,'Chuck Taylor', 1, 1300000,'Red', 'High Top', 'Converse Classic là dòng giày truyền thống của Converse được giữ đúng với nguyên bản ban đầu. Từ lúc xuất hiện cho đến nay dòng Classic vẫn nhận được sự quan tâm của nhiều khách hàng trên thế giới. Vậy đâu là lý do giúp dòng giày này trở nên phổ biến và được yêu thích nhiều như vậy trong nhiều thập kỷ qua?\r\n\r\n\r\n\r\nConverse Classic – Dòng giày chưa bao giờ mất đi độ hot trong giới trẻ\r\n\r\nChuck Taylor Classic có thiết kế giống như dòng Converse All Star được cho ra mắt vào 1917 dành riêng cho các vận động viên bóng rổ chuyên nghiệp.\r\nTuy nhiên thời điểm này giày Converse All Star chỉ thế hiện đúng chức năng của mình mà chưa đạt được độ tinh tế về thời trang. Vì vậy, sau khi Chuck Taylor tham gia vào đội ngũ Converse đã mang đến một sự thay đổi mới, đảm bảo được tính thời trang cho sản phẩm. Sự thay đổi này đã khiến Converse có những bước chuyển mình và dần khẳng định được vị thế trong lĩnh vực giày thể thao.\r\n\r\n\r\n\r\nThiết kế của Converse trước đây phục vụ cho các hoạt động thể thao, đặc biệt là bóng rổ\r\n\r\nCác thiết kế giày Converse Chuck Taylor All Star Classic ghi điểm bởi sự đơn giản, tinh tế nhưng không kém phần thời trang, năng động. Đặc biệt là với dòng Classic cổ cao với thiết kế ôm sát phần cổ chân, vừa độc đáo, vừa lạ mắt giúp bạn khẳng định được phong cách thời trang của mình.\r\n\r\n\r\n\r\nConverse cổ cao được thiết kế mang nét trẻ trung, khỏe khoắn\r\n\r\n\r\n\r\nLựa chọn vải Canvas cho phần thân giày để đảm bảo độ mềm mại, nhẹ chân cùng lỗ xỏ dây thoáng khí cho người mang\r\nPhần đế cao su bền chắc có đường viền màu đặc trưng xung quanh, giúp người mang đảm bảo độ ma sát.\r\nThiết kế logo tròn vẫn được giữ nguyên không thay đổi:\r\n\r\n\r\n- Converse Classic cổ cao: có patch logo chữ ký của Chuck Taylor được in bên hông giày, kèm logo All Star được in ở đế giày\r\n\r\n\r\nPhiên bản Chuck Classic cổ cao vẫn giữ được nét độc đáo đặc trưng của thương hiệu, mang đến cho người mang một phong cách mới.\r\nCó thể nói, so với mặt bằng chung, mức giá cho một đôi Converse Chuck Classic chính hãng vẫn là chi phí hợp lý cho những ai yêu thích thời trang. Đặc biệt là mong muốn cho được một đôi giày đúng với xu hướng và có được độ bền bỉ nhất định.' ,0, 1),
(15,'One Star', 4, 1300000,'Black','Low Top',  'Converse Cons One Star thật sự là cái tên không còn quá lạ lẫm đối với những ai yêu thích dòng giày 1 sao kinh điển này. Bởi sự phá cách đầy táo bạo trong lối thiết kế, tự rẽ hướng sang một trang mới tách biệt hoàn toàn với những đôi Converse cổ điển đã gây được ấn tượng mạnh mẽ đối với những tín đồ thời trang, âm nhạc và đặc biệt là ván trượt. Vậy điều gì đã làm nên sức hút cho dòng giày Converse One Star?\r\n\r\nConverse One Star dòng giày của ván trượt và thời trang đường phố\r\n\r\nKhông giống với các dòng All Star, Converse Cons – One Star có phần logo bên hông upper và sau gót khác biệt hoàn toàn. Converse One Star nổi bật với phần hông có logo hình ngôi sao 5 cánh. Chúng thường được miêu tả như hình ngôi sao được cắt ra từ phần vải canvas.\r\n\r\nLogo của Converse Cons có phần thú vị hơn nhờ tạo hình ngôi sao 5 cánh điểm xuyến thêm 2 đường gạch cạnh bên (biểu thị như hình tượng mặt trăng). Ở một vài đôi giày thuộc dòng Cons – One Star, bạn sẽ thấy thêm phần logo “Converse One Star” in nổi màu đen hoặc trắng ở gót giày. Công nghệ ngày càng phát triển, Converse cũng không bao giờ chịu tụt lại phía sau. Với một vài bộ sưu tập của Cons – One Star, Converse trang bị thêm cho chúng những bộ đệm lót hiện đại phải kể đến như: Comfort Cushioning và SmartFoam.\r\n\r\nCó thể bạn chưa biết, Converse One Star ban đầu được sản xuất ra dành cho người chơi bóng rổ, nhưng kì lạ thay chúng lại gây được tiếng vang trong làng ván trượt đường phố. Tuy nhiên để đạt đến thành công mãi cho đến tận ngày nay vẫn phải kể đến công lao của Spike Jemony – tay đạo diễn tài năng của Girls Mouse, Yeah Right đã khiến chúng trở nên phổ biến thông qua các quảng cáo trên tạp chí và thương mại.\r\n\r\n\r\nConverse One Star có kiểu dáng cổ thấp khá lạ mắt, không bị mất form hay thay đổi hình dáng quá nhiều khi chơi stakerboarding. \r\n\r\nConverse One Star dòng giày của ván trượt và thời trang đường phố\r\n\r\nVới sự phát triển của công nghệ cùng hơn trăm năm kinh nghiệm trong làng giày thể thao, Converse đã cho ra mắt liên tục những thiết kế ấn tượng cùng phối màu sáng tạo. Đi kèm theo đó chính là nét bụi bặm, thời trang mang đậm dấu ấn và hơi thở của dòng giày One Star huyền thoại.\r\n\r\n' ,0, 1),
(16,'One Star', 4,  1300000, 'Erget','Low Top', 'Converse Cons One Star thật sự là cái tên không còn quá lạ lẫm đối với những ai yêu thích dòng giày 1 sao kinh điển này. Bởi sự phá cách đầy táo bạo trong lối thiết kế, tự rẽ hướng sang một trang mới tách biệt hoàn toàn với những đôi Converse cổ điển đã gây được ấn tượng mạnh mẽ đối với những tín đồ thời trang, âm nhạc và đặc biệt là ván trượt. Vậy điều gì đã làm nên sức hút cho dòng giày Converse One Star?\r\n\r\nConverse One Star dòng giày của ván trượt và thời trang đường phố\r\n\r\nKhông giống với các dòng All Star, Converse Cons – One Star có phần logo bên hông upper và sau gót khác biệt hoàn toàn. Converse One Star nổi bật với phần hông có logo hình ngôi sao 5 cánh. Chúng thường được miêu tả như hình ngôi sao được cắt ra từ phần vải canvas.\r\n\r\nLogo của Converse Cons có phần thú vị hơn nhờ tạo hình ngôi sao 5 cánh điểm xuyến thêm 2 đường gạch cạnh bên (biểu thị như hình tượng mặt trăng). Ở một vài đôi giày thuộc dòng Cons – One Star, bạn sẽ thấy thêm phần logo “Converse One Star” in nổi màu đen hoặc trắng ở gót giày. Công nghệ ngày càng phát triển, Converse cũng không bao giờ chịu tụt lại phía sau. Với một vài bộ sưu tập của Cons – One Star, Converse trang bị thêm cho chúng những bộ đệm lót hiện đại phải kể đến như: Comfort Cushioning và SmartFoam.\r\n\r\nCó thể bạn chưa biết, Converse One Star ban đầu được sản xuất ra dành cho người chơi bóng rổ, nhưng kì lạ thay chúng lại gây được tiếng vang trong làng ván trượt đường phố. Tuy nhiên để đạt đến thành công mãi cho đến tận ngày nay vẫn phải kể đến công lao của Spike Jemony – tay đạo diễn tài năng của Girls Mouse, Yeah Right đã khiến chúng trở nên phổ biến thông qua các quảng cáo trên tạp chí và thương mại.\r\n\r\n\r\nConverse One Star có kiểu dáng cổ thấp khá lạ mắt, không bị mất form hay thay đổi hình dáng quá nhiều khi chơi stakerboarding. \r\n\r\nConverse One Star dòng giày của ván trượt và thời trang đường phố\r\n\r\nVới sự phát triển của công nghệ cùng hơn trăm năm kinh nghiệm trong làng giày thể thao, Converse đã cho ra mắt liên tục những thiết kế ấn tượng cùng phối màu sáng tạo. Đi kèm theo đó chính là nét bụi bặm, thời trang mang đậm dấu ấn và hơi thở của dòng giày One Star huyền thoại.\r\n', 0 ,1),
(17,'One Star', 4,  1300000,'Green', 'Low Top', 'Converse Cons One Star thật sự là cái tên không còn quá lạ lẫm đối với những ai yêu thích dòng giày 1 sao kinh điển này. Bởi sự phá cách đầy táo bạo trong lối thiết kế, tự rẽ hướng sang một trang mới tách biệt hoàn toàn với những đôi Converse cổ điển đã gây được ấn tượng mạnh mẽ đối với những tín đồ thời trang, âm nhạc và đặc biệt là ván trượt. Vậy điều gì đã làm nên sức hút cho dòng giày Converse One Star?\r\n\r\nConverse One Star dòng giày của ván trượt và thời trang đường phố\r\n\r\nKhông giống với các dòng All Star, Converse Cons – One Star có phần logo bên hông upper và sau gót khác biệt hoàn toàn. Converse One Star nổi bật với phần hông có logo hình ngôi sao 5 cánh. Chúng thường được miêu tả như hình ngôi sao được cắt ra từ phần vải canvas.\r\n\r\nLogo của Converse Cons có phần thú vị hơn nhờ tạo hình ngôi sao 5 cánh điểm xuyến thêm 2 đường gạch cạnh bên (biểu thị như hình tượng mặt trăng). Ở một vài đôi giày thuộc dòng Cons – One Star, bạn sẽ thấy thêm phần logo “Converse One Star” in nổi màu đen hoặc trắng ở gót giày. Công nghệ ngày càng phát triển, Converse cũng không bao giờ chịu tụt lại phía sau. Với một vài bộ sưu tập của Cons – One Star, Converse trang bị thêm cho chúng những bộ đệm lót hiện đại phải kể đến như: Comfort Cushioning và SmartFoam.\r\n\r\nCó thể bạn chưa biết, Converse One Star ban đầu được sản xuất ra dành cho người chơi bóng rổ, nhưng kì lạ thay chúng lại gây được tiếng vang trong làng ván trượt đường phố. Tuy nhiên để đạt đến thành công mãi cho đến tận ngày nay vẫn phải kể đến công lao của Spike Jemony – tay đạo diễn tài năng của Girls Mouse, Yeah Right đã khiến chúng trở nên phổ biến thông qua các quảng cáo trên tạp chí và thương mại.\r\n\r\n\r\nConverse One Star có kiểu dáng cổ thấp khá lạ mắt, không bị mất form hay thay đổi hình dáng quá nhiều khi chơi stakerboarding. \r\n\r\nConverse One Star dòng giày của ván trượt và thời trang đường phố\r\n\r\nVới sự phát triển của công nghệ cùng hơn trăm năm kinh nghiệm trong làng giày thể thao, Converse đã cho ra mắt liên tục những thiết kế ấn tượng cùng phối màu sáng tạo. Đi kèm theo đó chính là nét bụi bặm, thời trang mang đậm dấu ấn và hơi thở của dòng giày One Star huyền thoại.\r\n', 1 ,0),
(18,'One Star', 4, 1300000, 'Grey','Low Top', 'Converse Cons One Star thật sự là cái tên không còn quá lạ lẫm đối với những ai yêu thích dòng giày 1 sao kinh điển này. Bởi sự phá cách đầy táo bạo trong lối thiết kế, tự rẽ hướng sang một trang mới tách biệt hoàn toàn với những đôi Converse cổ điển đã gây được ấn tượng mạnh mẽ đối với những tín đồ thời trang, âm nhạc và đặc biệt là ván trượt. Vậy điều gì đã làm nên sức hút cho dòng giày Converse One Star?\r\n\r\nConverse One Star dòng giày của ván trượt và thời trang đường phố\r\n\r\nKhông giống với các dòng All Star, Converse Cons – One Star có phần logo bên hông upper và sau gót khác biệt hoàn toàn. Converse One Star nổi bật với phần hông có logo hình ngôi sao 5 cánh. Chúng thường được miêu tả như hình ngôi sao được cắt ra từ phần vải canvas.\r\n\r\nLogo của Converse Cons có phần thú vị hơn nhờ tạo hình ngôi sao 5 cánh điểm xuyến thêm 2 đường gạch cạnh bên (biểu thị như hình tượng mặt trăng). Ở một vài đôi giày thuộc dòng Cons – One Star, bạn sẽ thấy thêm phần logo “Converse One Star” in nổi màu đen hoặc trắng ở gót giày. Công nghệ ngày càng phát triển, Converse cũng không bao giờ chịu tụt lại phía sau. Với một vài bộ sưu tập của Cons – One Star, Converse trang bị thêm cho chúng những bộ đệm lót hiện đại phải kể đến như: Comfort Cushioning và SmartFoam.\r\n\r\nCó thể bạn chưa biết, Converse One Star ban đầu được sản xuất ra dành cho người chơi bóng rổ, nhưng kì lạ thay chúng lại gây được tiếng vang trong làng ván trượt đường phố. Tuy nhiên để đạt đến thành công mãi cho đến tận ngày nay vẫn phải kể đến công lao của Spike Jemony – tay đạo diễn tài năng của Girls Mouse, Yeah Right đã khiến chúng trở nên phổ biến thông qua các quảng cáo trên tạp chí và thương mại.\r\n\r\n\r\nConverse One Star có kiểu dáng cổ thấp khá lạ mắt, không bị mất form hay thay đổi hình dáng quá nhiều khi chơi stakerboarding. \r\n\r\nConverse One Star dòng giày của ván trượt và thời trang đường phố\r\n\r\nVới sự phát triển của công nghệ cùng hơn trăm năm kinh nghiệm trong làng giày thể thao, Converse đã cho ra mắt liên tục những thiết kế ấn tượng cùng phối màu sáng tạo. Đi kèm theo đó chính là nét bụi bặm, thời trang mang đậm dấu ấn và hơi thở của dòng giày One Star huyền thoại.\r\n', 1,0),
(19,'One Star Pro Imi Gente!', 4,  1700000, 'None','Low Top', 'Converse One Star Pro Lips và Imi Gente là hai phiên bản độc đáo thuộc dòng giày Converse, mang đến sự kết hợp hoàn hảo giữa phong cách và sự cá nhân hóa.\r\n\r\nConverse One Star Pro Lips:\r\nGiày Converse One Star Pro Lips là một sự kết hợp táo bạo giữa thương hiệu kinh điển và nghệ thuật đương đại. Đôi giày này nổi bật với hình vẽ môi đậm chất nghệ thuật được thể hiện trên phần trên của giày, tạo nên một điểm nhấn độc đáo và phong cách. One Star Pro Lips mang lại không chỉ là một cảm giác thoải mái và chất lượng tuyệt vời, mà còn là một tuyên bố về sự sáng tạo và tôn vinh nghệ thuật đương đại.\r\n\r\nImi Gente:\r\nConverse Imi Gente, hay còn được gọi là Converse x Imi Knoebel, là một tác phẩm hợp tác độc đáo giữa Converse và nghệ sĩ người Đức Imi Knoebel. Đôi giày này mang trong mình vẻ đẹp trừu tượng và hiện đại, với các họa tiết hình học sắc nét trên phần trên của giày. Imi Gente là sự kết hợp tuyệt vời giữa sự cá nhân hóa nghệ thuật và chất lượng vượt trội của Converse, tạo ra một tác phẩm nghệ thuật độc đáo trên nền tảng thế giới giày thể thao.\r\n\r\nCả hai phiên bản đều thể hiện cam kết của Converse đối với sự sáng tạo và tôn vinh nghệ thuật đương đại. Những người yêu thích cái mới mẻ, phá cách và sự độc đáo sẽ không thể bỏ qua sự lựa chọn này.\r\n' ,1,0),
(20,'One Star Pro Lips', 4,  1700000,'Low Top','None',  'Converse One Star Pro Lips và Imi Gente là hai phiên bản độc đáo thuộc dòng giày Converse, mang đến sự kết hợp hoàn hảo giữa phong cách và sự cá nhân hóa.\r\n\r\nConverse One Star Pro Lips:\r\nGiày Converse One Star Pro Lips là một sự kết hợp táo bạo giữa thương hiệu kinh điển và nghệ thuật đương đại. Đôi giày này nổi bật với hình vẽ môi đậm chất nghệ thuật được thể hiện trên phần trên của giày, tạo nên một điểm nhấn độc đáo và phong cách. One Star Pro Lips mang lại không chỉ là một cảm giác thoải mái và chất lượng tuyệt vời, mà còn là một tuyên bố về sự sáng tạo và tôn vinh nghệ thuật đương đại.\r\n\r\nImi Gente:\r\nConverse Imi Gente, hay còn được gọi là Converse x Imi Knoebel, là một tác phẩm hợp tác độc đáo giữa Converse và nghệ sĩ người Đức Imi Knoebel. Đôi giày này mang trong mình vẻ đẹp trừu tượng và hiện đại, với các họa tiết hình học sắc nét trên phần trên của giày. Imi Gente là sự kết hợp tuyệt vời giữa sự cá nhân hóa nghệ thuật và chất lượng vượt trội của Converse, tạo ra một tác phẩm nghệ thuật độc đáo trên nền tảng thế giới giày thể thao.\r\n\r\nCả hai phiên bản đều thể hiện cam kết của Converse đối với sự sáng tạo và tôn vinh nghệ thuật đương đại. Những người yêu thích cái mới mẻ, phá cách và sự độc đáo sẽ không thể bỏ qua sự lựa chọn này.\r\n' ,1,0),
(21,'Run Star Hike Platform ', 3, 2500000,'Black','High Top', 'Đặc điểm nổi bật khác của Converse Run Star Hike Platform là sự linh hoạt trong việc mix & match với nhiều loại trang phục khác nhau. Với thiết kế độc đáo và cá tính, đôi giày này có khả năng biến tấu phong cách từ năng động đến hợp thời trang, phù hợp với nhiều tình huống và sự kiện khác nhau. Bạn có thể kết hợp chúng với quần jeans rách để tạo nên một vẻ ngoài thật bụi bặm và năng động, hoặc phối cùng váy maxi để thể hiện phong cách cá nhân đầy sáng tạo.\r\n\r\nBên cạnh đó, đế giày dày và chống trượt của Run Star Hike Platform mang lại sự thoải mái và an toàn cho bàn chân trong mọi điều kiện địa hình. Bạn có thể thoải mái di chuyển trên mọi nẻo đường mà không phải lo lắng về sự mệt mỏi hay nguy hiểm. Điều này làm cho đôi giày này trở thành một lựa chọn hoàn hảo cho những người yêu thích sự mạo hiểm và khám phá.\r\n\r\nNhư vậy, Converse Run Star Hike Platform không chỉ là một đôi giày, mà còn là một biểu tượng về sự sáng tạo, độc đáo và sự tôn trọng đối với môi trường. Đối với những người mang nó, đây là một cách để thể hiện phong cách cá nhân và tôn vinh giá trị bền vững.\r\n' ,1,0),
(22,'Run Star Hike Platform', 3, 2500000, 'Blue','High Top','Đặc điểm nổi bật khác của Converse Run Star Hike Platform là sự linh hoạt trong việc mix & match với nhiều loại trang phục khác nhau. Với thiết kế độc đáo và cá tính, đôi giày này có khả năng biến tấu phong cách từ năng động đến hợp thời trang, phù hợp với nhiều tình huống và sự kiện khác nhau. Bạn có thể kết hợp chúng với quần jeans rách để tạo nên một vẻ ngoài thật bụi bặm và năng động, hoặc phối cùng váy maxi để thể hiện phong cách cá nhân đầy sáng tạo.\r\n\r\nBên cạnh đó, đế giày dày và chống trượt của Run Star Hike Platform mang lại sự thoải mái và an toàn cho bàn chân trong mọi điều kiện địa hình. Bạn có thể thoải mái di chuyển trên mọi nẻo đường mà không phải lo lắng về sự mệt mỏi hay nguy hiểm. Điều này làm cho đôi giày này trở thành một lựa chọn hoàn hảo cho những người yêu thích sự mạo hiểm và khám phá.\r\n\r\nNhư vậy, Converse Run Star Hike Platform không chỉ là một đôi giày, mà còn là một biểu tượng về sự sáng tạo, độc đáo và sự tôn trọng đối với môi trường. Đối với những người mang nó, đây là một cách để thể hiện phong cách cá nhân và tôn vinh giá trị bền vững.\r\n' ,1,0),
(23,'Run Star Hike Platform', 3,  2500000,'White', 'High Top','Đặc điểm nổi bật khác của Converse Run Star Hike Platform là sự linh hoạt trong việc mix & match với nhiều loại trang phục khác nhau. Với thiết kế độc đáo và cá tính, đôi giày này có khả năng biến tấu phong cách từ năng động đến hợp thời trang, phù hợp với nhiều tình huống và sự kiện khác nhau. Bạn có thể kết hợp chúng với quần jeans rách để tạo nên một vẻ ngoài thật bụi bặm và năng động, hoặc phối cùng váy maxi để thể hiện phong cách cá nhân đầy sáng tạo.\r\n\r\nBên cạnh đó, đế giày dày và chống trượt của Run Star Hike Platform mang lại sự thoải mái và an toàn cho bàn chân trong mọi điều kiện địa hình. Bạn có thể thoải mái di chuyển trên mọi nẻo đường mà không phải lo lắng về sự mệt mỏi hay nguy hiểm. Điều này làm cho đôi giày này trở thành một lựa chọn hoàn hảo cho những người yêu thích sự mạo hiểm và khám phá.\r\n\r\nNhư vậy, Converse Run Star Hike Platform không chỉ là một đôi giày, mà còn là một biểu tượng về sự sáng tạo, độc đáo và sự tôn trọng đối với môi trường. Đối với những người mang nó, đây là một cách để thể hiện phong cách cá nhân và tôn vinh giá trị bền vững.\r\n' ,1,0);

-- --------------------------------------------------------

--
-- Table structure for table `product_type`
--

CREATE TABLE `product_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_type`
--

INSERT INTO `product_type` (`id`, `name`) VALUES
(1, 'Chuck Taylor'),
(2,'Chuck 70'),
(3,'Run Hike Platform'),
(4, 'One Star Pro');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone`, `address`) VALUES
(1, 'huong@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', NULL, NULL, NULL),
(2, '', 'd41d8cd98f00b204e9800998ecf8427e', '', NULL, NULL),
(4, 'huonggg@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'huong', NULL, NULL),
(6, 'huonggssssg@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'huong', NULL, NULL),
(7, 'huossssggag@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'Hương siêu nhân', '234567890', '123343 lê thị riêng');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f1` (`id_customer`);

--
-- Indexes for table `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f2` (`id_bill`),
  ADD KEY `f3` (`id_product`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f5` (`id_product`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f4` (`id_type`);

--
-- Indexes for table `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `bill_detail`
--
ALTER TABLE `bill_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;
--
-- AUTO_INCREMENT for table `product_type`
--
ALTER TABLE `product_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `f1` FOREIGN KEY (`id_customer`) REFERENCES `users` (`id`);

--
-- Constraints for table `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD CONSTRAINT `f2` FOREIGN KEY (`id_bill`) REFERENCES `bill` (`id`),
  ADD CONSTRAINT `f3` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `f5` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `f4` FOREIGN KEY (`id_type`) REFERENCES `product_type` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
