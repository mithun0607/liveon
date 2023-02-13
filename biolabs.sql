-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 12, 2023 at 11:23 PM
-- Server version: 5.6.51-cll-lve
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biolabs`
--

-- --------------------------------------------------------

--
-- Table structure for table `bd_add`
--

CREATE TABLE `bd_add` (
  `id` int(255) NOT NULL,
  `sponser_name` text NOT NULL,
  `address` text NOT NULL,
  `rep_name` text NOT NULL,
  `email` text NOT NULL,
  `city` text NOT NULL,
  `country` text NOT NULL,
  `pdf` text NOT NULL,
  `sponsor_code` varchar(255) NOT NULL DEFAULT 'Un-Assigned',
  `type` text NOT NULL,
  `article_code` varchar(255) NOT NULL DEFAULT 'Un-Assigned',
  `study_no` varchar(255) NOT NULL DEFAULT 'Un-Assigned',
  `study_dir` varchar(255) NOT NULL DEFAULT 'Un-Assigned',
  `study_code` varchar(255) NOT NULL DEFAULT 'Un-Assigned',
  `g_ng` text NOT NULL,
  `remarks1` text NOT NULL,
  `remarks2` text NOT NULL,
  `remarks3` text NOT NULL,
  `tfm_status` varchar(255) NOT NULL DEFAULT 'Pending',
  `tfm_comments` text NOT NULL,
  `bd_comments` text NOT NULL,
  `qa_comments` text NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bd_add`
--

INSERT INTO `bd_add` (`id`, `sponser_name`, `address`, `rep_name`, `email`, `city`, `country`, `pdf`, `sponsor_code`, `type`, `article_code`, `study_no`, `study_dir`, `study_code`, `g_ng`, `remarks1`, `remarks2`, `remarks3`, `tfm_status`, `tfm_comments`, `bd_comments`, `qa_comments`, `timestamp`) VALUES
(2, 'Johnson', 'Bengaluru', 'Suhas', 'suhas@gmail.com', 'Bengaluru', 'India', 'brouchure.pdf', 'S133/TI-002', 'Test Item', 'S133/TI-002', '', 'Mr.Rakesh', 'GPMT', 'G', '', '', '', 'Approved', '', 'Testing', 'Test', '2022-11-21 04:02:21'),
(3, 'Himalaya', 'Bengaluru', 'Suhas', 'suhas@gmail.com', 'Bengaluru', 'india', 'brouchure.pdf', 'S134', '', 'S134/TI-002', 'Un-Assigned', 'Un-Assigned', 'AST', 'NG', '', '', '', 'Approved', '', '', '', '2022-11-25 22:46:43'),
(4, 'Himalaya', 'Bengaluru', 'Suhas', 'suhas@gmail.com', 'Bengaluru', 'india', 'brouchure.pdf', 'S135', '', 'S135/TI-003', 'Un-Assigned', 'Un-Assigned', 'IRTNZW', 'NG', '', '', '', 'Approved', 'Check', 'Check Completed', '', '2022-11-25 22:46:43'),
(5, 'Johnson', 'Bengaluru', 'Suhas', 'suhas@gmail.com', 'Bengaluru', 'India', 'brouchure.pdf', 'S136', '', 'S136/TI-004', 'Un-Assigned', 'Un-Assigned', 'GPMT', 'G', '', '', '', 'Approved', 'Check', 'Check Completed', '', '2023-01-20 02:12:44');

-- --------------------------------------------------------

--
-- Table structure for table `bd_login`
--

CREATE TABLE `bd_login` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bd_login`
--

INSERT INTO `bd_login` (`id`, `username`, `password`) VALUES
(1, 'benith', 'benith123');

-- --------------------------------------------------------

--
-- Table structure for table `draftast_plan`
--

CREATE TABLE `draftast_plan` (
  `id` int(255) NOT NULL,
  `title1` text NOT NULL,
  `title2` text NOT NULL,
  `study_no` text NOT NULL,
  `study_code` text NOT NULL,
  `study_dir` text NOT NULL,
  `sponser` text NOT NULL,
  `obj` text NOT NULL,
  `study_title1` text NOT NULL,
  `study_no1` text NOT NULL,
  `study_code1` text NOT NULL,
  `ulr_no1` text NOT NULL,
  `sponsor1` text NOT NULL,
  `study_director1` text NOT NULL,
  `study_vet1` text NOT NULL,
  `sponsor_rep1` text NOT NULL,
  `monitor1` text NOT NULL,
  `study_start_date` text NOT NULL,
  `exp_start_date` text NOT NULL,
  `acc` text NOT NULL,
  `treat_start_date` text NOT NULL,
  `exp_end_date` text NOT NULL,
  `draft_rep` text NOT NULL,
  `study_end_date` text NOT NULL,
  `short1` text NOT NULL,
  `full1` text NOT NULL,
  `short2` text NOT NULL,
  `full2` text NOT NULL,
  `short3` text NOT NULL,
  `full3` text NOT NULL,
  `short4` text NOT NULL,
  `full4` text NOT NULL,
  `short5` text NOT NULL,
  `full5` text NOT NULL,
  `short6` text NOT NULL,
  `full6` text NOT NULL,
  `short7` text NOT NULL,
  `full7` text NOT NULL,
  `short8` text NOT NULL,
  `full8` text NOT NULL,
  `short9` text NOT NULL,
  `full9` text NOT NULL,
  `short10` text NOT NULL,
  `full10` text NOT NULL,
  `short11` text NOT NULL,
  `full11` text NOT NULL,
  `short12` text NOT NULL,
  `full12` text NOT NULL,
  `short13` text NOT NULL,
  `full13` text NOT NULL,
  `short14` text NOT NULL,
  `full14` text NOT NULL,
  `short15` text NOT NULL,
  `full15` text NOT NULL,
  `short16` text NOT NULL,
  `full16` text NOT NULL,
  `short17` text NOT NULL,
  `full17` text NOT NULL,
  `short18` text NOT NULL,
  `full18` text NOT NULL,
  `short19` text NOT NULL,
  `full19` text NOT NULL,
  `short20` text NOT NULL,
  `full20` text NOT NULL,
  `short21` text NOT NULL,
  `full21` text NOT NULL,
  `short22` text NOT NULL,
  `full22` text NOT NULL,
  `iaec_no` text NOT NULL,
  `item_name` text NOT NULL,
  `item_code` text NOT NULL,
  `item_code1` text NOT NULL,
  `intended_use` text NOT NULL,
  `contact_site` text NOT NULL,
  `duration` text NOT NULL,
  `material` text NOT NULL,
  `weight` text NOT NULL,
  `storage_cond` text NOT NULL,
  `batch_no` text NOT NULL,
  `mfg_date` text NOT NULL,
  `exp_date` text NOT NULL,
  `sterility` text NOT NULL,
  `mfg_by` text NOT NULL,
  `supplied_by` text NOT NULL,
  `others` text NOT NULL,
  `anex_1` text NOT NULL,
  `iso_1` text NOT NULL,
  `source` text NOT NULL,
  `age` text NOT NULL,
  `no_groups` text NOT NULL,
  `no_animals` text NOT NULL,
  `weight_range` text NOT NULL,
  `temp` text NOT NULL,
  `cage_size` text NOT NULL,
  `mfg_by_name` text NOT NULL,
  `clipping` text NOT NULL,
  `test_extract` text NOT NULL,
  `archive_1` text NOT NULL,
  `archive_2` text NOT NULL,
  `study_no2` text NOT NULL,
  `date_app` text NOT NULL,
  `study_dir1` text NOT NULL,
  `sign1` text NOT NULL,
  `sign2` text NOT NULL,
  `sign3` text NOT NULL,
  `sponsor_name` text NOT NULL,
  `spons_rep` text NOT NULL,
  `sign4` text NOT NULL,
  `monitor_sci` text NOT NULL,
  `sign5` text NOT NULL,
  `ast_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `draftast_plan`
--

INSERT INTO `draftast_plan` (`id`, `title1`, `title2`, `study_no`, `study_code`, `study_dir`, `sponser`, `obj`, `study_title1`, `study_no1`, `study_code1`, `ulr_no1`, `sponsor1`, `study_director1`, `study_vet1`, `sponsor_rep1`, `monitor1`, `study_start_date`, `exp_start_date`, `acc`, `treat_start_date`, `exp_end_date`, `draft_rep`, `study_end_date`, `short1`, `full1`, `short2`, `full2`, `short3`, `full3`, `short4`, `full4`, `short5`, `full5`, `short6`, `full6`, `short7`, `full7`, `short8`, `full8`, `short9`, `full9`, `short10`, `full10`, `short11`, `full11`, `short12`, `full12`, `short13`, `full13`, `short14`, `full14`, `short15`, `full15`, `short16`, `full16`, `short17`, `full17`, `short18`, `full18`, `short19`, `full19`, `short20`, `full20`, `short21`, `full21`, `short22`, `full22`, `iaec_no`, `item_name`, `item_code`, `item_code1`, `intended_use`, `contact_site`, `duration`, `material`, `weight`, `storage_cond`, `batch_no`, `mfg_date`, `exp_date`, `sterility`, `mfg_by`, `supplied_by`, `others`, `anex_1`, `iso_1`, `source`, `age`, `no_groups`, `no_animals`, `weight_range`, `temp`, `cage_size`, `mfg_by_name`, `clipping`, `test_extract`, `archive_1`, `archive_2`, `study_no2`, `date_app`, `study_dir1`, `sign1`, `sign2`, `sign3`, `sponsor_name`, `spons_rep`, `sign4`, `monitor_sci`, `sign5`, `ast_id`) VALUES
(2, 'ACUTE SYSTEMIC TOXICITY TEST OF POLAR AND NON-POLAR EXTRACTS OF XXXX IN SWISS ALBINO MICE', 'ISO 10993-11:2017', 'LBPL/G-XXXX (TX)', 'AST', 'Ms. Zehra Khanum', 'XXXX', 'acute systemic toxicity and biocompatibility of a polar extract (Physiological saline) and non-polar extract (Sesame oil) of “XXXX”', 'Acute Systemic Toxicity Test of Polar and Non-Polar Extracts of XXXX in Swiss Albino Mice.', 'LBPL/G-XXXX (TX)', 'AST', 'XXXX', 'XXXX', 'Ms. Zehra Khanum', 'Dr. Sunkad Meghana', 'XXXX', 'XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'Latest by XX/XX/XXXX', 'Latest by XX/XX/XXXX or within a week after receiving comments for draft report from sponsor. ', 'AAALAC', 'Association for Assessment and Accreditation of Laboratory Animal Care', 'CPCSEA', 'Committee for the Purpose of Control and Supervision of Experiments on Animals', 'Cm', 'Centimeter', 'dB', 'decibel', 'FCA', 'Freund’s Complete Adjuvant', 'hr/h(s)', 'Hour (s)', 'IAEC', 'Institutional Animal Ethics Committee', 'ISO', 'International Organization for Standardization', 'IEC', 'International Electrotechnical Commission', 'GLP', 'Good Laboratory Practice', 'g', 'Gram', 'LBPL', 'Liveon Biolabs Private Limited', 'mL', 'Millilitre', 'No.', 'Number', 'OECD', 'Organization for Economic Co-operation and Development', 'AST', 'Acute Systemic Toxicity', 'rpm', 'Revolutions Per Minute', 'SDS', 'Sodium Dodecyl Sulphate', 'Sign.', 'Signature', 'TIIS', 'Test Item Information Sheet', 'UV', 'Ultraviolet', 'false', 'Less than', 'LBPL-IAEC-035-06/2022', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', '2', 'ISO 10993-11:2017', 'In-house breed animals', '6-8 weeks (exact age will be provided in the report)', '04 (5 animals /group)', '20 Males / Females (Female will be nulliparous and non-pregnant)', '17-26 g (Exact body weight will be provided in the report).', '22 ± 3 °C', 'Approximate Cage Size: Length 29 X Breadth 22 X Height 14cm', 'Krishna Valley Agrotech LLP', '', 'est item thickness is less than 0.5mm, 6cm2/mL will be selected for extraction as per ISO 10993-12:2021 (Annexure 1). The extraction condition will be selected (37 ± 1) °C for (72 ± 2) hrs.Example of preparation for 10 mL: 60cm2 of test item will be taken and transferred to the sterilized beaker containing 10 mL of 0.9% NaCl (polar vehicle) Similarly, 60cm2 of test item will be taken and transferred to the sterilized beaker containing 10 mL of sesame oil (non-polar vehicle). Similar procedure will be followed for polar and non-polar vehicle control without test item. All the (polar and non-polar test item extracts and polar and non-polar vehicle control) beakers/containers will be subjected to extraction at 37 ± 1°C for a period 72 ± 2 hrs with continuous agitation in orbital shaker incubator at 110(±2) rpm. Similar extraction procedures will also be applicable for respective polar (0.9% w/v Sodium chloride) and non-polar (Sesame oil) vehicle control without test item. Pre and post extraction condition for the appearance of extracts will be checked. The extract will be filtered if any particulates observed using syringe filters / filter papers. The extracts will be prepared under aseptic conditions. Note: pH of extracts will be checked for pre and post-extraction and will be mentioned in the raw data file and Study report.', '9', '[(C (97)186/Final]', 'LBPL/G-XXXX (TX)', 'XX/XX/2022', 'Ms. Zehra Khanum', '', '', '', 'WRP ASIA PACIFIC SDN BHD', 'XXXX', '', 'XXXX', '', 3),
(4, 'ACUTE SYSTEMIC TOXICITY TEST OF POLAR AND NON-POLAR EXTRACTS OF XXXX IN SWISS ALBINO MICE', 'ISO 10993-11:2017', 'LBPL/G-XXXX (TX)', 'AST', 'Ms. Zehra Khanum', 'XXXX', 'acute systemic toxicity and biocompatibility of a polar extract (Physiological saline) and non-polar extract (Sesame oil) of “XXXX”', 'Acute Systemic Toxicity Test of Polar and Non-Polar Extracts of XXXX in Swiss Albino Mice.', 'LBPL/G-XXXX (TX)', 'AST', 'XXXX', 'XXXX', 'Ms. Zehra Khanum', 'Dr. Sunkad Meghana', 'XXXX', 'XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'XX/XX/XXXX', 'Latest by XX/XX/XXXX', 'Latest by XX/XX/XXXX or within a week after receiving comments for draft report from sponsor. ', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'LBPL-IAEC-035-06/2022', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', '2', 'ISO 10993-11:2017', 'In-house breed animals', '6-8 weeks (exact age will be provided in the report)', '04 (5 animals /group)', '20 Males / Females (Female will be nulliparous and non-pregnant)', '17-26 g (Exact body weight will be provided in the report).', '22 ± 3 °C', 'Approximate Cage Size: Length 29 X Breadth 22 X Height 14cm', 'Krishna Valley Agrotech LLP', '', 'est item thickness is less than 0.5mm, 6cm2/mL will be selected for extraction as per ISO 10993-12:2021 (Annexure 1). The extraction condition will be selected (37 ± 1) °C for (72 ± 2) hrs.Example of preparation for 10 mL: 60cm2 of test item will be taken and transferred to the sterilized beaker containing 10 mL of 0.9% NaCl (polar vehicle) Similarly, 60cm2 of test item will be taken and transferred to the sterilized beaker containing 10 mL of sesame oil (non-polar vehicle). Similar procedure will be followed for polar and non-polar vehicle control without test item. All the (polar and non-polar test item extracts and polar and non-polar vehicle control) beakers/containers will be subjected to extraction at 37 ± 1°C for a period 72 ± 2 hrs with continuous agitation in orbital shaker incubator at 110(±2) rpm. Similar extraction procedures will also be applicable for respective polar (0.9% w/v Sodium chloride) and non-polar (Sesame oil) vehicle control without test item. Pre and post extraction condition for the appearance of extracts will be checked. The extract will be filtered if any particulates observed using syringe filters / filter papers. The extracts will be prepared under aseptic conditions. Note: pH of extracts will be checked for pre and post-extraction and will be mentioned in the raw data file and Study report.', '9', '[(C (97)186/Final]', 'LBPL/G-XXXX (TX)', 'XX/XX/2022', 'Ms. Zehra Khanum', '', '', '', 'WRP ASIA PACIFIC SDN BHD', 'XXXX', '', 'XXXX', '', 5);

-- --------------------------------------------------------

--
-- Table structure for table `draftnzw_plan`
--

CREATE TABLE `draftnzw_plan` (
  `id` int(255) NOT NULL,
  `title1` text NOT NULL,
  `title2` text NOT NULL,
  `study_no` text NOT NULL,
  `study_code` text NOT NULL,
  `study_dir` text NOT NULL,
  `sponser` text NOT NULL,
  `obj` text NOT NULL,
  `study_title1` text NOT NULL,
  `study_no1` text NOT NULL,
  `study_code1` text NOT NULL,
  `ulr_no1` text NOT NULL,
  `sponsor1` text NOT NULL,
  `study_director1` text NOT NULL,
  `study_vet1` text NOT NULL,
  `sponsor_rep1` text NOT NULL,
  `monitor1` text NOT NULL,
  `study_start_date` text NOT NULL,
  `exp_start_date` text NOT NULL,
  `acc` text NOT NULL,
  `treat_start_date` text NOT NULL,
  `exp_end_date` text NOT NULL,
  `draft_rep` text NOT NULL,
  `study_end_date` text NOT NULL,
  `short1` text NOT NULL,
  `full1` text NOT NULL,
  `short2` text NOT NULL,
  `full2` text NOT NULL,
  `short3` text NOT NULL,
  `full3` text NOT NULL,
  `short4` text NOT NULL,
  `full4` text NOT NULL,
  `short5` text NOT NULL,
  `full5` text NOT NULL,
  `short6` text NOT NULL,
  `full6` text NOT NULL,
  `short7` text NOT NULL,
  `full7` text NOT NULL,
  `short8` text NOT NULL,
  `full8` text NOT NULL,
  `short9` text NOT NULL,
  `full9` text NOT NULL,
  `short10` text NOT NULL,
  `full10` text NOT NULL,
  `short11` text NOT NULL,
  `full11` text NOT NULL,
  `short12` text NOT NULL,
  `full12` text NOT NULL,
  `short13` text NOT NULL,
  `full13` text NOT NULL,
  `short14` text NOT NULL,
  `full14` text NOT NULL,
  `short15` text NOT NULL,
  `full15` text NOT NULL,
  `short16` text NOT NULL,
  `full16` text NOT NULL,
  `short17` text NOT NULL,
  `full17` text NOT NULL,
  `short18` text NOT NULL,
  `full18` text NOT NULL,
  `short19` text NOT NULL,
  `full19` text NOT NULL,
  `short20` text NOT NULL,
  `full20` text NOT NULL,
  `short21` text NOT NULL,
  `full21` text NOT NULL,
  `short22` text NOT NULL,
  `full22` text NOT NULL,
  `iaec_no` text NOT NULL,
  `item_name` text NOT NULL,
  `item_code` text NOT NULL,
  `item_code1` text NOT NULL,
  `intended_use` text NOT NULL,
  `contact_site` text NOT NULL,
  `duration` text NOT NULL,
  `material` text NOT NULL,
  `weight` text NOT NULL,
  `storage_cond` text NOT NULL,
  `batch_no` text NOT NULL,
  `mfg_date` text NOT NULL,
  `exp_date` text NOT NULL,
  `sterility` text NOT NULL,
  `mfg_by` text NOT NULL,
  `supplied_by` text NOT NULL,
  `others` text NOT NULL,
  `anex_1` text NOT NULL,
  `iso_1` text NOT NULL,
  `source` text NOT NULL,
  `age` text NOT NULL,
  `no_groups` text NOT NULL,
  `no_animals` text NOT NULL,
  `weight_range` text NOT NULL,
  `temp` text NOT NULL,
  `cage_size` text NOT NULL,
  `mfg_by_name` text NOT NULL,
  `clipping` text NOT NULL,
  `test_extract` text NOT NULL,
  `anex_2` text NOT NULL,
  `archive_1` text NOT NULL,
  `archive_2` text NOT NULL,
  `study_no2` text NOT NULL,
  `date_app` text NOT NULL,
  `study_dir1` text NOT NULL,
  `sign1` text NOT NULL,
  `sign2` text NOT NULL,
  `sign3` text NOT NULL,
  `sponsor_name` text NOT NULL,
  `spons_rep` text NOT NULL,
  `sign4` text NOT NULL,
  `monitor_sci` text NOT NULL,
  `sign5` text NOT NULL,
  `irtnzw_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `draftnzw_plan`
--

INSERT INTO `draftnzw_plan` (`id`, `title1`, `title2`, `study_no`, `study_code`, `study_dir`, `sponser`, `obj`, `study_title1`, `study_no1`, `study_code1`, `ulr_no1`, `sponsor1`, `study_director1`, `study_vet1`, `sponsor_rep1`, `monitor1`, `study_start_date`, `exp_start_date`, `acc`, `treat_start_date`, `exp_end_date`, `draft_rep`, `study_end_date`, `short1`, `full1`, `short2`, `full2`, `short3`, `full3`, `short4`, `full4`, `short5`, `full5`, `short6`, `full6`, `short7`, `full7`, `short8`, `full8`, `short9`, `full9`, `short10`, `full10`, `short11`, `full11`, `short12`, `full12`, `short13`, `full13`, `short14`, `full14`, `short15`, `full15`, `short16`, `full16`, `short17`, `full17`, `short18`, `full18`, `short19`, `full19`, `short20`, `full20`, `short21`, `full21`, `short22`, `full22`, `iaec_no`, `item_name`, `item_code`, `item_code1`, `intended_use`, `contact_site`, `duration`, `material`, `weight`, `storage_cond`, `batch_no`, `mfg_date`, `exp_date`, `sterility`, `mfg_by`, `supplied_by`, `others`, `anex_1`, `iso_1`, `source`, `age`, `no_groups`, `no_animals`, `weight_range`, `temp`, `cage_size`, `mfg_by_name`, `clipping`, `test_extract`, `anex_2`, `archive_1`, `archive_2`, `study_no2`, `date_app`, `study_dir1`, `sign1`, `sign2`, `sign3`, `sponsor_name`, `spons_rep`, `sign4`, `monitor_sci`, `sign5`, `irtnzw_id`) VALUES
(1, 'INTRACUTANEOUS REACTIVITY TEST OF POLAR AND NON-POLAR EXTRACTS OF XXXX IN NEW ZEALAND WHITE RABBITS', 'ISO 10993-23:2021', 'LBPL/G-XXXX (TX)', 'IRTNZW', 'Ms. Zehra Khanum', 'XXXX', 'intracutaneous injection of extract of the test item, “XXXX”', 'Intracutaneous Reactivity Test of Polar and Non-Polar extracts of XXXX in New Zealand White Rabbits.', 'LBPL/G-XXXX (TX)', 'IRTNZW', 'XXXX', 'XXXX', 'Ms. Zehra Khanum', 'Dr. Sunkad Meghana', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'Latest by XXXX', 'Latest by XXXX or within a week after receiving comments for draft report from sponsor.', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'LBPL-IAEC-XXXX.', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', 'XXXX', '5', 'ISO-10993-23:2021', 'In-house bred animals', 'About 4 Months (exact age will be provided in the report)', '03 Male/Female (Female will be Nulliparous and Non-Pregnant)', 'XXXX - XXXX', '2.0 – 2.5 kg (exact weight will be provided in the report)', '20 ± 3°C', 'Cage Size Length 1.6 X Breadth 2 X Height 1.6 feet', 'Krishna Valley Agrotech LLP', '', 'Test item thickness is less than 0.5mm, 6cm2/mL will be selected for extraction as per ISO 10993-12:2021 (Annexure 1). The extraction condition will be selected (37 ± 1) °C for (72 ± 2) hrs. Example of preparation for 10 mL: 60cm2 of test item will be taken and transferred to the sterilized beaker containing 10 mL of 0.9% NaCl (polar vehicle) Similarly, 60cm2 of test item will be taken and transferred to the sterilized beaker containing 10 mL of sesame oil (non-polar vehicle). Similar procedure will be followed for polar and non-polar vehicle control without adding test item. All the (polar and non-polar test item extracts and polar and non-polar vehicle control) beakers / containers will be subjected to extraction at 37 ± 1°C for a period 72 ± 2 hrs with continuous agitation in orbital shaker incubator at 110(±2) rpm. Similar extraction procedures will also be applicable for respective polar (0.9% w/v Sodium chloride) and non-polar (Sesame oil) vehicle control without test item. Pre and post extraction condition for the appearance of extracts will be checked. The extract will be filtered if any particulates observed using syringe filters / filter papers. The extracts will be prepared under aseptic conditions. Note: pH of extracts will be checked for pre and post-extraction and will be mentioned in the raw data file and Study report.', '4', '9', '[(C (97)186/Final]', 'LBPL/G-XXXX (TX)', 'XX/XX/2022', 'Ms. Zehra Khanum', '', '', '', 'WRP ASIA PACIFIC SDN BHD', 'XXXX', '', 'XXXX', '', 4);

-- --------------------------------------------------------

--
-- Table structure for table `draft_plan`
--

CREATE TABLE `draft_plan` (
  `id` int(255) NOT NULL,
  `title1` text NOT NULL,
  `title2` text NOT NULL,
  `study_no` text NOT NULL,
  `study_code` text NOT NULL,
  `study_dir` text NOT NULL,
  `sponser` text NOT NULL,
  `obj` text NOT NULL,
  `study_title1` text NOT NULL,
  `study_no1` text NOT NULL,
  `study_code1` text NOT NULL,
  `ulr_no1` text NOT NULL,
  `sponsor1` text NOT NULL,
  `study_director1` text NOT NULL,
  `study_vet1` text NOT NULL,
  `sponsor_rep1` text NOT NULL,
  `monitor1` text NOT NULL,
  `study_start_date` text NOT NULL,
  `exp_start_date` text NOT NULL,
  `acc` text NOT NULL,
  `treat_start_date` text NOT NULL,
  `exp_end_date` text NOT NULL,
  `draft_rep` text NOT NULL,
  `study_end_date` text NOT NULL,
  `short1` text NOT NULL,
  `full1` text NOT NULL,
  `short2` text NOT NULL,
  `full2` text NOT NULL,
  `short3` text NOT NULL,
  `full3` text NOT NULL,
  `short4` text NOT NULL,
  `full4` text NOT NULL,
  `short5` text NOT NULL,
  `full5` text NOT NULL,
  `short6` text NOT NULL,
  `full6` text NOT NULL,
  `short7` text NOT NULL,
  `full7` text NOT NULL,
  `short8` text NOT NULL,
  `full8` text NOT NULL,
  `short9` text NOT NULL,
  `full9` text NOT NULL,
  `short10` text NOT NULL,
  `full10` text NOT NULL,
  `short11` text NOT NULL,
  `full11` text NOT NULL,
  `short12` text NOT NULL,
  `full12` text NOT NULL,
  `short13` text NOT NULL,
  `full13` text NOT NULL,
  `short14` text NOT NULL,
  `full14` text NOT NULL,
  `short15` text NOT NULL,
  `full15` text NOT NULL,
  `short16` text NOT NULL,
  `full16` text NOT NULL,
  `short17` text NOT NULL,
  `full17` text NOT NULL,
  `short18` text NOT NULL,
  `full18` text NOT NULL,
  `short19` text NOT NULL,
  `full19` text NOT NULL,
  `short20` text NOT NULL,
  `full20` text NOT NULL,
  `short21` text NOT NULL,
  `full21` text NOT NULL,
  `short22` text NOT NULL,
  `full22` text NOT NULL,
  `iaec_no` text NOT NULL,
  `item_name` text NOT NULL,
  `item_code` text NOT NULL,
  `item_code1` text NOT NULL,
  `intended_use` text NOT NULL,
  `contact_site` text NOT NULL,
  `duration` text NOT NULL,
  `material` text NOT NULL,
  `weight` text NOT NULL,
  `storage_cond` text NOT NULL,
  `batch_no` text NOT NULL,
  `mfg_date` text NOT NULL,
  `exp_date` text NOT NULL,
  `sterility` text NOT NULL,
  `mfg_by` text NOT NULL,
  `supplied_by` text NOT NULL,
  `others` text NOT NULL,
  `anex_1` text NOT NULL,
  `iso_1` text NOT NULL,
  `source` text NOT NULL,
  `age` text NOT NULL,
  `no_groups` text NOT NULL,
  `no_animals` text NOT NULL,
  `weight_range` text NOT NULL,
  `temp` text NOT NULL,
  `cage_size` text NOT NULL,
  `mfg_by_name` text NOT NULL,
  `test_extract` text NOT NULL,
  `induction` text NOT NULL,
  `anex_2` text NOT NULL,
  `g1a` text NOT NULL,
  `g2a` text NOT NULL,
  `g1b` text NOT NULL,
  `g2b` text NOT NULL,
  `challenge_phase` text NOT NULL,
  `g1a_head` text NOT NULL,
  `g1a_right` text NOT NULL,
  `g1a_polar` text NOT NULL,
  `g1a_left` text NOT NULL,
  `g1a_nonpolar` text NOT NULL,
  `g2a_head` text NOT NULL,
  `g2a_right` text NOT NULL,
  `g2a_polar` text NOT NULL,
  `g2a_left` text NOT NULL,
  `g2a_nonpolar` text NOT NULL,
  `g1b_head` text NOT NULL,
  `g1b_right` text NOT NULL,
  `g1b_polar` text NOT NULL,
  `g1b_left` text NOT NULL,
  `g1b_nonpolar` text NOT NULL,
  `g2b_head` text NOT NULL,
  `g2b_right` text NOT NULL,
  `g2b_polar` text NOT NULL,
  `g2b_left` text NOT NULL,
  `g2b_nonpolar` text NOT NULL,
  `anex_3` text NOT NULL,
  `anex_4` text NOT NULL,
  `archive_1` text NOT NULL,
  `archive_2` text NOT NULL,
  `study_no2` text NOT NULL,
  `date_app` text NOT NULL,
  `study_dir1` text NOT NULL,
  `sign1` text NOT NULL,
  `sign2` text NOT NULL,
  `sign3` text NOT NULL,
  `sponsor_name` text NOT NULL,
  `spons_rep` text NOT NULL,
  `sign4` text NOT NULL,
  `monitor_sci` text NOT NULL,
  `sign5` text NOT NULL,
  `gpmt_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `draft_plan`
--

INSERT INTO `draft_plan` (`id`, `title1`, `title2`, `study_no`, `study_code`, `study_dir`, `sponser`, `obj`, `study_title1`, `study_no1`, `study_code1`, `ulr_no1`, `sponsor1`, `study_director1`, `study_vet1`, `sponsor_rep1`, `monitor1`, `study_start_date`, `exp_start_date`, `acc`, `treat_start_date`, `exp_end_date`, `draft_rep`, `study_end_date`, `short1`, `full1`, `short2`, `full2`, `short3`, `full3`, `short4`, `full4`, `short5`, `full5`, `short6`, `full6`, `short7`, `full7`, `short8`, `full8`, `short9`, `full9`, `short10`, `full10`, `short11`, `full11`, `short12`, `full12`, `short13`, `full13`, `short14`, `full14`, `short15`, `full15`, `short16`, `full16`, `short17`, `full17`, `short18`, `full18`, `short19`, `full19`, `short20`, `full20`, `short21`, `full21`, `short22`, `full22`, `iaec_no`, `item_name`, `item_code`, `item_code1`, `intended_use`, `contact_site`, `duration`, `material`, `weight`, `storage_cond`, `batch_no`, `mfg_date`, `exp_date`, `sterility`, `mfg_by`, `supplied_by`, `others`, `anex_1`, `iso_1`, `source`, `age`, `no_groups`, `no_animals`, `weight_range`, `temp`, `cage_size`, `mfg_by_name`, `test_extract`, `induction`, `anex_2`, `g1a`, `g2a`, `g1b`, `g2b`, `challenge_phase`, `g1a_head`, `g1a_right`, `g1a_polar`, `g1a_left`, `g1a_nonpolar`, `g2a_head`, `g2a_right`, `g2a_polar`, `g2a_left`, `g2a_nonpolar`, `g1b_head`, `g1b_right`, `g1b_polar`, `g1b_left`, `g1b_nonpolar`, `g2b_head`, `g2b_right`, `g2b_polar`, `g2b_left`, `g2b_nonpolar`, `anex_3`, `anex_4`, `archive_1`, `archive_2`, `study_no2`, `date_app`, `study_dir1`, `sign1`, `sign2`, `sign3`, `sponsor_name`, `spons_rep`, `sign4`, `monitor_sci`, `sign5`, `gpmt_id`) VALUES
(14, 'SKIN SENSITIZATION STUDY OF POLAR AND NON-POLAR EXTRACTS OF PRESSURE MONITORING LINE IN GUINEA PIGS BY USING GUINEA PIG MAXIMIZATION TEST (GPMT)', 'ISO 10993-10:2021', 'LBPL/G-XXX (TX)', 'GPMT', 'Mr. Rakesh P.Y', 'XXXX', 'skin sensitization and biocompatibility of a polar extract (physiological saline) and non-polar extract (sesame oil) of “Pressure Monitoring Line”', 'Skin Sensitization Test of Pressure Monitoring Line in Guinea Pigs by using Guinea Pig Maximization Test (GPMT)', 'LBPL/G-XXXX (TX)', 'GPMT', 'TC- 679422000000757F', 'XXXXX', 'Ms.Zehra Khanum', 'Dr. Sunkad Meghana', 'Dr. Sunkad Meghana', 'Dr. Sunkad Meghana', 'XX/XX/2022', 'XX/XX/2022', 'XX/XX/2022', 'XX/XX/2022', 'XX/XX/2022', 'XX/XX/2022', 'XX/XX/2022', 'AAALAC', 'Association for Assessment and Accreditation of Laboratory Animal Care', 'CPCSEA', 'Committee for the Purpose of Control and Supervision of Experiments on Animals', 'Cm', 'Centimeter', 'dB', 'decibel', 'FCA', 'Freund’s Complete Adjuvant', 'hr/h(s)', 'Hour (s)', 'IAEC', 'Institutional Animal Ethics Committee', 'ISO', 'International Organization for Standardization', 'IEC', 'International Electrotechnical Commission', 'GLP', 'Good Laboratory Practice', 'g', 'Gram', 'LBPL', 'Liveon Biolabs Private Limited', 'mL', 'Millilitre', 'No.', 'Number', 'OECD', 'Organization for Economic Co-operation and Development', 'GPMT', 'Guinea Pigs Maximization Test', 'rpm', 'Revolutions Per Minute', 'SDS', 'Sodium Dodecyl Sulphate', 'Sign.', 'Signature', 'TIIS', 'Test Item Information Sheet', 'UV', 'Ultraviolet', 'false', 'Less than', 'LBPL-IAEC-019-04/2022', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '6', '10993-10:2021', 'In-house breed animals', '7- 13 Weeks (exact age will be provided in the report)', '4', '30 Male/Female (Female will be Nulliparous and Non-Pregnant)', '300-500g', '20 ± 3 °C and relative humidity of 30-70%', 'Cage size approximately Length 43 X Breadth 29 X Height 18 cm', 'Krishna Valley Agrotech LLP', 'The test item is irregularly shaped device hence, 0.2g/mL extraction ratio will be selected for extraction as per ISO 10993-12:2021 (Refer to Annexure 1). The test item contact period in clinically Prolonged Exposure, hence the extraction condition will be selected (50 ± 2) °C for (72 ± 2) hours. Similar extraction procedures will also be applicable for respective polar (0.9% w/v Sodium chloride) and non-polar (Sesame oil) vehicle control without test item.', 'Test Item extract with Vehicle Control (i.e., respective Vehicle Control and test item extract will be prepared separately) and will be applied on to each animal of intradermal region by topical application using Filter paper patches of approximately 2 cm X 4 cm = 8 cm2 loaded with 0.5 mL of respective Vehicle Control and test item extract as per Annexure 2, and It will be secured in position with hypoallergic tape around the torso. The details of treatment are as mentioned below.', '2', 'Filter paper loaded with 0.5 mL in Polar Vehicle Control', 'Filter paper loaded with 0.5 mL undiluted Polar Test Item Extract', 'Filter paper loaded with 0.5 mL Non-Polar Vehicle Control', 'Filter paper loaded with 0.5 mL Undiluted Non-Polar Test Item Extract', 'On Day 22, the filter paper patches approximate size of 8 cm2 (2 cm x 4 cm) will be loaded with 0.5 mL of the respective vehicle control and test item extract as per Annexure 3. The filter paper secured with hypoallergic tape group as below:', 'G1a', 'Anterior Right Flank', 'Polar Vehicle Control', 'Anterior Left Flank', 'Undiluted Polar Test Item Extract', 'G2a', 'Anterior Right Flank', 'Polar Vehicle Control ', 'Anterior Left Flank', 'Undiluted Polar Test Item Extract', 'G1b', 'Anterior Right Flank', 'Non-Polar Vehicle Control', 'Anterior Left Flank', 'Undiluted Non-Polar Test Item Extract', 'G2b', 'Anterior Right Flank', 'Non-Polar Vehicle Control ', 'Anterior Left Flank', 'Undiluted Non-Polar Test Item Extract', '4', '5', '9', '[(C (97)186/Final]', 'LBPL/G-2266 (TX)', 'XX/XX/2022', 'Mr. Rakesh P.Y', '', '', '', 'XXXXXXXXXXXXXXXXX', 'Dr. Mohan Krishnappa', '', 'Dr. Mohan Krishnappa', '', 2);

-- --------------------------------------------------------

--
-- Table structure for table `qa_login`
--

CREATE TABLE `qa_login` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `qa_login`
--

INSERT INTO `qa_login` (`id`, `username`, `password`) VALUES
(1, 'savitha', 'savitha123'),
(2, 'sushma', 'sushma123');

-- --------------------------------------------------------

--
-- Table structure for table `sd_login`
--

CREATE TABLE `sd_login` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sd_login`
--

INSERT INTO `sd_login` (`id`, `username`, `password`) VALUES
(1, 'rakesh', 'rakesh123'),
(2, 'zehra', 'zehra123'),
(3, 'ravi', 'ravi123'),
(4, 'iffath', 'iffath123'),
(5, 'sandhya', 'sandhya123');

-- --------------------------------------------------------

--
-- Table structure for table `security_add`
--

CREATE TABLE `security_add` (
  `id` int(255) NOT NULL,
  `article_name` tinytext NOT NULL,
  `mode` tinytext NOT NULL,
  `condition1` tinytext NOT NULL,
  `condition2` tinytext NOT NULL,
  `quantity` tinytext NOT NULL,
  `location` tinytext NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `security_add`
--

INSERT INTO `security_add` (`id`, `article_name`, `mode`, `condition1`, `condition2`, `quantity`, `location`, `timestamp`) VALUES
(1, 'Test Item', 'Courier', 'Ambient ( +19 to 25 deg C )', 'Deep Freeze ( -14 to -27 deg C )', '1 Box', 'TICO Barrier', '2022-11-21 01:52:09'),
(2, 'Test Item', 'Courier', 'Ambient ( +19 to 25 deg C )', 'Deep Freeze ( -14 to -27 deg C )', '1 Box', 'TICO Barrier', '2022-11-21 01:52:09'),
(4, 'Test Item', 'Courier', 'Deep Freeze ( -14 to -27 deg C )', 'Deep Freeze ( -14 to -27 deg C )', '1 Box', 'TICO Barrier', '2022-11-21 01:52:09'),
(5, 'Test Item', 'Courier', 'Deep Freeze ( -14 to -27 deg C )', 'Deep Freeze ( -14 to -27 deg C )', '1 Box', 'TICO Barrier', '2022-11-21 01:52:09'),
(8, 'Test Item ', 'Courier', 'Ambient ( +19 to 25 deg C )', 'Deep Freeze ( -14 to -27 deg C )', '1 Box', 'TICO Barrier', '2022-11-23 22:20:11'),
(9, 'Powder', 'Courier', 'Ambient ( +19 to 25 deg C )', 'Ambient ( +19 to 25 deg C )', '1', 'TICO Barrier', '2022-11-25 22:20:02'),
(10, 'Testram', 'Courier', 'Ambient ( +19 to 25 deg C )', 'Ambient ( +19 to 25 deg C )', '20gm', 'TICO Barrier', '2022-11-26 04:53:52');

-- --------------------------------------------------------

--
-- Table structure for table `security_login`
--

CREATE TABLE `security_login` (
  `id` int(255) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `security_login`
--

INSERT INTO `security_login` (`id`, `username`, `password`) VALUES
(1, 'security', 'security123');

-- --------------------------------------------------------

--
-- Table structure for table `study_data`
--

CREATE TABLE `study_data` (
  `id` int(11) NOT NULL,
  `study_no9` text NOT NULL,
  `room_no4` text NOT NULL,
  `month_year` text NOT NULL,
  `check1` text NOT NULL,
  `check2` text NOT NULL,
  `check3` text NOT NULL,
  `check4` text NOT NULL,
  `check5` text NOT NULL,
  `check6` text NOT NULL,
  `check7` text NOT NULL,
  `check8` text NOT NULL,
  `check9` text NOT NULL,
  `check10` text NOT NULL,
  `check11` text NOT NULL,
  `check12` text NOT NULL,
  `check13` text NOT NULL,
  `check14` text NOT NULL,
  `check15` text NOT NULL,
  `check16` text NOT NULL,
  `check17` text NOT NULL,
  `check18` text NOT NULL,
  `check19` text NOT NULL,
  `check20` text NOT NULL,
  `check21` text NOT NULL,
  `check22` text NOT NULL,
  `others1` text NOT NULL,
  `sign22` text NOT NULL,
  `marker` text NOT NULL,
  `others2` text NOT NULL,
  `sign23` text NOT NULL,
  `sign24` text NOT NULL,
  `study_no3` text NOT NULL,
  `species` text NOT NULL,
  `req_date` text NOT NULL,
  `age_male` text NOT NULL,
  `age_female` text NOT NULL,
  `no_male` text NOT NULL,
  `no_female` text NOT NULL,
  `wt_male` text NOT NULL,
  `wt_female` text NOT NULL,
  `sign9` text NOT NULL,
  `species1` text NOT NULL,
  `iaec` text NOT NULL,
  `req_date1` text NOT NULL,
  `age_male1` text NOT NULL,
  `age_female1` text NOT NULL,
  `dob_male` text NOT NULL,
  `dob_female` text NOT NULL,
  `no_male1` text NOT NULL,
  `no_female1` text NOT NULL,
  `wt_male1` text NOT NULL,
  `wt_female1` text NOT NULL,
  `sign10` text NOT NULL,
  `sign11` text NOT NULL,
  `sign12` text NOT NULL,
  `sign13` text NOT NULL,
  `date1` text NOT NULL,
  `study_no4` text NOT NULL,
  `species2` text NOT NULL,
  `no_male2` text NOT NULL,
  `no_female2` text NOT NULL,
  `from_date` text NOT NULL,
  `to_date` text NOT NULL,
  `sign14` text NOT NULL,
  `sign15` text NOT NULL,
  `room_no` text NOT NULL,
  `study_no5` text NOT NULL,
  `from_date1` text NOT NULL,
  `to_date1` text NOT NULL,
  `sign16` text NOT NULL,
  `sign17` text NOT NULL,
  `study_no6` text NOT NULL,
  `room_no1` text NOT NULL,
  `fum_date` text NOT NULL,
  `fum_result` text NOT NULL,
  `airsamp_date` text NOT NULL,
  `airsamp_result` text NOT NULL,
  `airflow_date` text NOT NULL,
  `airflow_result` text NOT NULL,
  `airpres_date` text NOT NULL,
  `airpres_result` text NOT NULL,
  `lux_date` text NOT NULL,
  `lux_result` text NOT NULL,
  `sound_date` text NOT NULL,
  `sound_result` text NOT NULL,
  `feed_no` text NOT NULL,
  `bedding_no` text NOT NULL,
  `others` text NOT NULL,
  `sign18` text NOT NULL,
  `remarks2` text NOT NULL,
  `study_no2` text NOT NULL,
  `study_code2` text NOT NULL,
  `sd2` text NOT NULL,
  `sign7` text NOT NULL,
  `date4` text NOT NULL,
  `name4` text NOT NULL,
  `desg4` text NOT NULL,
  `signn4` text NOT NULL,
  `date5` text NOT NULL,
  `name5` text NOT NULL,
  `desg5` text NOT NULL,
  `signn5` text NOT NULL,
  `date6` text NOT NULL,
  `name6` text NOT NULL,
  `desg6` text NOT NULL,
  `signn6` text NOT NULL,
  `date7` text NOT NULL,
  `name7` text NOT NULL,
  `desg7` text NOT NULL,
  `signn7` text NOT NULL,
  `date8` text NOT NULL,
  `name8` text NOT NULL,
  `desg8` text NOT NULL,
  `signn8` text NOT NULL,
  `study_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `study_data`
--

INSERT INTO `study_data` (`id`, `study_no9`, `room_no4`, `month_year`, `check1`, `check2`, `check3`, `check4`, `check5`, `check6`, `check7`, `check8`, `check9`, `check10`, `check11`, `check12`, `check13`, `check14`, `check15`, `check16`, `check17`, `check18`, `check19`, `check20`, `check21`, `check22`, `others1`, `sign22`, `marker`, `others2`, `sign23`, `sign24`, `study_no3`, `species`, `req_date`, `age_male`, `age_female`, `no_male`, `no_female`, `wt_male`, `wt_female`, `sign9`, `species1`, `iaec`, `req_date1`, `age_male1`, `age_female1`, `dob_male`, `dob_female`, `no_male1`, `no_female1`, `wt_male1`, `wt_female1`, `sign10`, `sign11`, `sign12`, `sign13`, `date1`, `study_no4`, `species2`, `no_male2`, `no_female2`, `from_date`, `to_date`, `sign14`, `sign15`, `room_no`, `study_no5`, `from_date1`, `to_date1`, `sign16`, `sign17`, `study_no6`, `room_no1`, `fum_date`, `fum_result`, `airsamp_date`, `airsamp_result`, `airflow_date`, `airflow_result`, `airpres_date`, `airpres_result`, `lux_date`, `lux_result`, `sound_date`, `sound_result`, `feed_no`, `bedding_no`, `others`, `sign18`, `remarks2`, `study_no2`, `study_code2`, `sd2`, `sign7`, `date4`, `name4`, `desg4`, `signn4`, `date5`, `name5`, `desg5`, `signn5`, `date6`, `name6`, `desg6`, `signn6`, `date7`, `name7`, `desg7`, `signn7`, `date8`, `name8`, `desg8`, `signn8`, `study_id`) VALUES
(14, '', '', '', 'day3', 'day4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 5);

-- --------------------------------------------------------

--
-- Table structure for table `study_personnel`
--

CREATE TABLE `study_personnel` (
  `id` int(11) NOT NULL,
  `personnel` text NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `study_personnel`
--

INSERT INTO `study_personnel` (`id`, `personnel`, `timestamp`) VALUES
(1, 'Ram', '2023-01-20 10:43:22');

-- --------------------------------------------------------

--
-- Table structure for table `tfm_login`
--

CREATE TABLE `tfm_login` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tfm_login`
--

INSERT INTO `tfm_login` (`id`, `username`, `password`) VALUES
(1, 'ramya', 'ramya123');

-- --------------------------------------------------------

--
-- Table structure for table `tico_add`
--

CREATE TABLE `tico_add` (
  `id` int(255) NOT NULL,
  `test_article_name` text NOT NULL,
  `name` text NOT NULL,
  `sponsor_name` text NOT NULL,
  `pack_details` text NOT NULL,
  `expiry_date1` text NOT NULL,
  `batch_no` text NOT NULL,
  `phy_app1` text NOT NULL,
  `balance_id1` text NOT NULL,
  `total_qty1` text NOT NULL,
  `condition1` text NOT NULL,
  `availability1` text NOT NULL,
  `transport1` text NOT NULL,
  `verify1` text NOT NULL,
  `details1` text NOT NULL,
  `details2` text NOT NULL,
  `details3` text NOT NULL,
  `details4` text NOT NULL,
  `expiry_date2` text NOT NULL,
  `phy_app2` text NOT NULL,
  `total_qty2` text NOT NULL,
  `balance_id2` text NOT NULL,
  `condition2` text NOT NULL,
  `availability2` text NOT NULL,
  `transport2` text NOT NULL,
  `verify2` text NOT NULL,
  `details5` text NOT NULL,
  `details6` text NOT NULL,
  `details7` text NOT NULL,
  `details8` text NOT NULL,
  `discrepancy2` text NOT NULL,
  `action2` text NOT NULL,
  `tico_sl` text NOT NULL,
  `tico_art_name` text NOT NULL,
  `tico_mode` text NOT NULL,
  `tico_storage` text NOT NULL,
  `tico_qty` text NOT NULL,
  `tico_remarks` text NOT NULL,
  `tico_key` int(11) NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tico_add`
--

INSERT INTO `tico_add` (`id`, `test_article_name`, `name`, `sponsor_name`, `pack_details`, `expiry_date1`, `batch_no`, `phy_app1`, `balance_id1`, `total_qty1`, `condition1`, `availability1`, `transport1`, `verify1`, `details1`, `details2`, `details3`, `details4`, `expiry_date2`, `phy_app2`, `total_qty2`, `balance_id2`, `condition2`, `availability2`, `transport2`, `verify2`, `details5`, `details6`, `details7`, `details8`, `discrepancy2`, `action2`, `tico_sl`, `tico_art_name`, `tico_mode`, `tico_storage`, `tico_qty`, `tico_remarks`, `tico_key`, `timestamp`) VALUES
(3, 'Test Item', 'Lorem Ipsum', 'Johnson', 'Good', '08-08-2024', '1245', 'Medial Device', '12345', '256 gm', 'Good', 'TIIS', 'Date of dispatch of Item', 'TIIS', 'NA', 'NA', 'NA', 'NA', '08-08-2024', 'Medial Device', '256 gm', '12345', 'Good', 'TIIS', 'Date of dispatch of Item', 'TIIS', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', '12', 'Test Item', 'Courier', 'Ambient ( +19 to 25 deg C )', '2 Boxes', 'NA', 2, '2023-01-23 02:39:06');

-- --------------------------------------------------------

--
-- Table structure for table `tico_add1`
--

CREATE TABLE `tico_add1` (
  `id` int(11) NOT NULL,
  `cont_weight1` text NOT NULL,
  `con_id1` text NOT NULL,
  `gross_wt1` text NOT NULL,
  `samp_id1` text NOT NULL,
  `bal_id1` text NOT NULL,
  `cont_weight2` text NOT NULL,
  `con_id2` text NOT NULL,
  `gross_wt2` text NOT NULL,
  `samp_id2` text NOT NULL,
  `bal_id2` text NOT NULL,
  `cont_weight3` text NOT NULL,
  `con_id3` text NOT NULL,
  `gross_wt3` text NOT NULL,
  `samp_id3` text NOT NULL,
  `bal_id3` text NOT NULL,
  `cont_weight4` text NOT NULL,
  `con_id4` text NOT NULL,
  `gross_wt4` text NOT NULL,
  `samp_id4` text NOT NULL,
  `bal_id4` text NOT NULL,
  `cont_weight5` text NOT NULL,
  `con_id5` text NOT NULL,
  `gross_wt5` text NOT NULL,
  `samp_id5` text NOT NULL,
  `bal_id5` text NOT NULL,
  `ticoadd_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tico_add1`
--

INSERT INTO `tico_add1` (`id`, `cont_weight1`, `con_id1`, `gross_wt1`, `samp_id1`, `bal_id1`, `cont_weight2`, `con_id2`, `gross_wt2`, `samp_id2`, `bal_id2`, `cont_weight3`, `con_id3`, `gross_wt3`, `samp_id3`, `bal_id3`, `cont_weight4`, `con_id4`, `gross_wt4`, `samp_id4`, `bal_id4`, `cont_weight5`, `con_id5`, `gross_wt5`, `samp_id5`, `bal_id5`, `ticoadd_id`) VALUES
(17, 'S1', '9.23 gm', '209.8 gm', 'S1/3', 'LBPL/INS-008.03', 'S1', '9.23 gm', '209.8 gm', 'S1/3', 'LBPL/INS-008.03', 'S1', '9.23 gm', '209.8 gm', 'S1/3', 'LBPL/INS-008.03', 'S1', '9.23 gm', '209.8 gm', 'S1/3', 'LBPL/INS-008.03', 'S1', '9.23 gm', '209.8 gm', 'S1/3', 'LBPL/INS-008.03', 3);

-- --------------------------------------------------------

--
-- Table structure for table `tico_login`
--

CREATE TABLE `tico_login` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tico_login`
--

INSERT INTO `tico_login` (`id`, `username`, `password`) VALUES
(1, 'lavanya', 'lavanya123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bd_add`
--
ALTER TABLE `bd_add`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bd_login`
--
ALTER TABLE `bd_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `draftast_plan`
--
ALTER TABLE `draftast_plan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ast_id` (`ast_id`);

--
-- Indexes for table `draftnzw_plan`
--
ALTER TABLE `draftnzw_plan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `irtnzw_id` (`irtnzw_id`);

--
-- Indexes for table `draft_plan`
--
ALTER TABLE `draft_plan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gpmt_id` (`gpmt_id`);

--
-- Indexes for table `qa_login`
--
ALTER TABLE `qa_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sd_login`
--
ALTER TABLE `sd_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `security_add`
--
ALTER TABLE `security_add`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `security_login`
--
ALTER TABLE `security_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `study_data`
--
ALTER TABLE `study_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `study_id` (`study_id`);

--
-- Indexes for table `study_personnel`
--
ALTER TABLE `study_personnel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tfm_login`
--
ALTER TABLE `tfm_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tico_add`
--
ALTER TABLE `tico_add`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tico_key` (`tico_key`);

--
-- Indexes for table `tico_add1`
--
ALTER TABLE `tico_add1`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ticoadd_id` (`ticoadd_id`);

--
-- Indexes for table `tico_login`
--
ALTER TABLE `tico_login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bd_add`
--
ALTER TABLE `bd_add`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bd_login`
--
ALTER TABLE `bd_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `draftast_plan`
--
ALTER TABLE `draftast_plan`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `draftnzw_plan`
--
ALTER TABLE `draftnzw_plan`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `draft_plan`
--
ALTER TABLE `draft_plan`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `qa_login`
--
ALTER TABLE `qa_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sd_login`
--
ALTER TABLE `sd_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `security_add`
--
ALTER TABLE `security_add`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `security_login`
--
ALTER TABLE `security_login`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `study_data`
--
ALTER TABLE `study_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `study_personnel`
--
ALTER TABLE `study_personnel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tfm_login`
--
ALTER TABLE `tfm_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tico_add`
--
ALTER TABLE `tico_add`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tico_add1`
--
ALTER TABLE `tico_add1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tico_login`
--
ALTER TABLE `tico_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `draftast_plan`
--
ALTER TABLE `draftast_plan`
  ADD CONSTRAINT `draftast_plan_ibfk_1` FOREIGN KEY (`ast_id`) REFERENCES `bd_add` (`id`);

--
-- Constraints for table `draftnzw_plan`
--
ALTER TABLE `draftnzw_plan`
  ADD CONSTRAINT `draftnzw_plan_ibfk_1` FOREIGN KEY (`irtnzw_id`) REFERENCES `bd_add` (`id`);

--
-- Constraints for table `draft_plan`
--
ALTER TABLE `draft_plan`
  ADD CONSTRAINT `draft_plan_ibfk_1` FOREIGN KEY (`gpmt_id`) REFERENCES `bd_add` (`id`);

--
-- Constraints for table `study_data`
--
ALTER TABLE `study_data`
  ADD CONSTRAINT `study_data_ibfk_1` FOREIGN KEY (`study_id`) REFERENCES `bd_add` (`id`);

--
-- Constraints for table `tico_add`
--
ALTER TABLE `tico_add`
  ADD CONSTRAINT `tico_add_ibfk_1` FOREIGN KEY (`tico_key`) REFERENCES `bd_add` (`id`);

--
-- Constraints for table `tico_add1`
--
ALTER TABLE `tico_add1`
  ADD CONSTRAINT `tico_add1_ibfk_1` FOREIGN KEY (`ticoadd_id`) REFERENCES `tico_add` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
