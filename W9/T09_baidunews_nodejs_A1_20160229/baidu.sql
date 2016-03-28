-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-02-29 15:34:58
-- 服务器版本： 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidu`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `newsid` int(11) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `addtime` date NOT NULL,
  `lanmu` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newsid`, `newstitle`, `newsimg`, `newscontent`, `addtime`, `lanmu`) VALUES
(0, 'aaa习近平会见伊朗最高领袖哈梅内伊', 'images/news1.jpg', '习近平出席鲁哈尼总统举行的隆重欢迎仪式', '2016-02-29', 'baijia'),
(2, '习近平16个字谈司法改革', 'images/news2.jpg', '习大大指示“防控风险、服务发展；破解难题、补齐短板”。在一个风清气正、干事创业的良好生态里，政...', '2016-01-18', 'tuijian'),
(34, '海通证券：反弹窗口仍开着 全年先难后易', 'images/news4.jpg', '外围市场否极泰来、情绪修复，国内市场汇率稳而市场稳，市场反弹窗口仍开着。', '2016-01-14', 'tuijian'),
(35, '春运5000万人站着回家?铁总:仅售无座票639万张', 'images/news5.jpg', '黄欣表示，此种推算有误，目前铁路仅售出无座车票639万张。', '2016-01-12', 'tuijian'),
(36, '铁路总局回应', 'images/news6.jpg', '中国铁路总公司运输局营运部副主任黄欣做客中国之声《今天我值班》特别节目，聊聊今年春运那些事儿。', '2016-01-10', 'tuijian'),
(57, '早期创业的你需要知道', 'images/baijia1.jpg', '请问什么样的BP是投资人最想看的。', '2015-12-30', 'baijia'),
(58, '迅雷创始人程浩为何转型投资：十年时间再造一支红杉', 'images/baijia2.jpg', '迅雷公司年会的前一晚，创立迅雷13年的迅雷联合创始人程浩，以内部邮件的形式向员工通告自己将卸任...', '2016-01-22', 'baijia'),
(76, '福斯5影片获29项奥斯卡提名 小李新片领跑', 'images/1-3.JPG', '《荒野猎人》12项提名领跑、莱奥纳多再冲影帝。', '2016-02-29', 'baijia'),
(77, '到“携程们”买机票有多少风险', 'images/1-4.JPEG', '去哪儿和去啊这样的平台，则主要销售第三方票台提供相对更便宜的机票，所提供的服务比较少。', '2016-02-29', 'baijia'),
(75, '桑托斯主席:权健报价远低于3000万欧', 'images/1-2.JPEG', '新华社记者采访权健内部相关人士，他表示具体多少钱不知道，但第三名外援已基本锁定为格乌瓦尼奥。', '2016-02-29', 'baijia'),
(61, '迅雷创始人程浩为何转型投资：十年时间再造一支红杉', 'images/baijia2.jpg', '迅雷公司年会的前一晚1，创立迅雷13年的迅雷联合创始人程浩，以内部邮件的形式向员工通告自己将卸任...', '2016-01-12', 'baijia'),
(74, '奥斯卡提名鼓励突破及创新 李安:喜欢百花齐放', 'images/1-1.JPEG', '莱昂纳多主演的《荒野猎人》以12项提名领跑88届奥斯卡。', '2016-02-29', 'tuijian');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newstitle` (`newstitle`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
