/**
 * QMS001 Quality Policy — SCORM Module Application
 * Handles slide navigation, quiz logic, language toggling, and SCORM communication.
 */
(function () {
  "use strict";

  /* ---- Module Data (embedded from Module1.json) ---- */
  const MODULE_DATA = {
    title: "IICI Activities SOP - Insect Infestation Control Improvement",
    description:
      "Standardized procedures for detecting, controlling, and eliminating tobacco beetle infestation through monitoring, cleaning, and chemical treatment.",
    passingScore: 80,
    orderIndex: 2,
    slides: [
      {
        title: "Learning Objectives",
        banglaTitle: "শেখার উদ্দেশ্য",
        orderIndex: 1,
        content:
          '<div><p><img src="Images/Slide 1.png" alt="JTI IICI Logo" style="max-width:400px; height:auto; display:block; margin: 0 auto 20px;" /></p><h3>Learners will be able to:</h3><ul><li>Explain the purpose and scope of IICI activities.</li><li>Describe the beetle trap monitoring system (classes, counting, and reporting).</li><li>Understand cleaning requirements, schedules, and audits.</li><li>Explain the beetle nest hunting process and 3D trap placement.</li><li>Identify treatment methods (fumigation, fogging) and Rewards & Recognition categories.</li></ul></div>',
        banglaContent:
          '<div><p><img src="Images/Slide 1.png" alt="JTI IICI Logo" style="max-width:400px; height:auto; display:block; margin: 0 auto 20px;" /></p><h3>অংশগ্রহণকারীরা সক্ষম হবেন:</h3><ul><li>IICI কার্যক্রমের উদ্দেশ্য এবং পরিধি ব্যাখ্যা করতে।</li><li>বিটল ট্র্যাপ পর্যবেক্ষণ ব্যবস্থা (শ্রেণি, গণনা এবং রিপোর্টিং) বর্ণনা করতে।</li><li>পরিষ্কারের প্রয়োজনীয়তা, সময়সূচি এবং অডিট বুঝতে।</li><li>বিটল বাসা অনুসন্ধান প্রক্রিয়া এবং 3D ট্র্যাপ স্থাপন ব্যাখ্যা করতে।</li><li>ট্রিটমেন্ট পদ্ধতি (ফিউমিগেশন, ফগিং) এবং পুরস্কার ও স্বীকৃতির বিভাগগুলো চিহ্নিত করতে।</li></ul></div>',
      },
      {
        title: "Introduction to IICI Monitoring",
        banglaTitle: "IICI পর্যবেক্ষণ পরিচিতি",
        orderIndex: 2,
        content:
          '<div>\n<p><video controls="controls" width="700" height="350"><source src="EN Intro (720p).mp4" type="video/mp4"></video></p>\n<p>Tobacco beetles are one of the most significant threats to product quality. The IICI programme detects and eliminates infestation through disciplined monitoring.</p><p>Beetles are counted each morning to gauge the infestation situation. A color banded logic is used to determine actions to be taken.</p><h3>The Colour-Banded System:</h3><ul><li><span style="color: green; font-weight: bold;">Green:</span> No action required.</li><li><span style="color: #cccc00; font-weight: bold;">Yellow:</span> Continued/Increased monitoring.</li><li><span style="color: red; font-weight: bold;">Red:</span> Take immediate action (Initiate IPS).</li></ul><p>Results are shared daily in the <strong>DDS (Daily Direction Setting)</strong> meeting.</p></div>',
        banglaContent:
          '<div>\n<p><video controls="controls" width="700" height="350"><source src="BN INTRO (720p).mp4" type="video/mp4"></video></p>\n<p>তামাক বিটল পণ্যের মানের জন্য সবচেয়ে বড় হুমকিগুলোর একটি। IICI কার্যক্রম সুশৃঙ্খল পর্যবেক্ষণের মাধ্যমে বিটল সংক্রমণ শনাক্ত ও নির্মূল করে।</p><p>সংক্রমণের পরিস্থিতি বোঝার জন্য প্রতিদিন সকালে বিটল গণনা করা হয়। ব্যবস্থা নেওয়ার জন্য একটি কালার ব্যান্ডেড লজিক ব্যবহার করা হয়।</p><h3>কালার-বান্ডেড সিস্টেম:</h3><ul><li><span style="color: green; font-weight: bold;">সবুজ:</span> কোনো ব্যবস্থা নেওয়ার প্রয়োজন নেই।</li><li><span style="color: #cccc00; font-weight: bold;">হলুদ:</span> পর্যবেক্ষণ অব্যাহত রাখুন/বাড়ান।</li><li><span style="color: red; font-weight: bold;">লাল:</span> তাৎক্ষণিক ব্যবস্থা নিন (IPS শুরু করুন)।</li></ul><p>প্রতিদিন সকালে <strong>DDS (Daily Direction Setting)</strong> সভায় এই ফলাফল শেয়ার করা হয়।</p></div>',
      },
      {
        title: "Regular Trap Categories",
        banglaTitle: "নিয়মিত ট্র্যাপ বিভাগ",
        orderIndex: 3,
        content:
          '<div><p>We use different trap classes depending on location and height requirements.</p><table class="table table-bordered"><thead><tr style="background-color: #f2f2f2;"><th>Regular Trap Category</th><th>Sub-category</th><th>Locus</th><th>Placement Frequency</th><th>Counting Frequency</th></tr></thead><tbody><tr><td>Permanent</td><td>-</td><td>Inside, man-height</td><td>Monthly</td><td>Daily</td></tr><tr><td>Temporary</td><td>Overhead</td><td>Inside, above 25 ft</td><td>Monthly</td><td>Bi-weekly</td></tr><tr><td>Perimeter</td><td>-</td><td>Outside buildings</td><td>Monthly</td><td>Daily</td></tr><tr><td>Mobile</td><td>-</td><td>Wherever applicable</td><td>As needed</td><td>As needed</td></tr></tbody></table><p><img src="Images/Slide 2 - Trap Types.jpg" alt="Trap Types Overview" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
        banglaContent:
          '<div><p>অবস্থান এবং উচ্চতার প্রয়োজনীয়তার উপর ভিত্তি করে আমরা বিভিন্ন শ্রেণির ট্র্যাপ ব্যবহার করি।</p><table class="table table-bordered"><thead><tr style="background-color: #f2f2f2;"><th>নিয়মিত ট্র্যাপ বিভাগ</th><th>উপ-বিভাগ</th><th>অবস্থান</th><th>স্থাপন ফ্রিকোয়েন্সি</th><th>গণনা ফ্রিকোয়েন্সি</th></tr></thead><tbody><tr><td>স্থায়ী</td><td>-</td><td>ভেতরে, মানব-উচ্চতায়</td><td>মাসিক</td><td>প্রতিদিন</td></tr><tr><td>অস্থায়ী</td><td>ওভারহেড</td><td>ভেতরে, ২৫ ফুটের উপরে</td><td>মাসিক</td><td>দ্বি-সাপ্তাহিক</td></tr><tr><td>পরিধি</td><td>-</td><td>ভবনের বাইরে</td><td>মাসিক</td><td>প্রতিদিন</td></tr><tr><td>মোবাইল</td><td>-</td><td>যেখানে প্রযোজ্য</td><td>প্রয়োজন অনুযায়ী</td><td>প্রয়োজন অনুযায়ী</td></tr></tbody></table><p><img src="Images/Slide 2 - Trap Types.jpg" alt="Trap Types Overview" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
      },
      {
        title: "Key Terms & Definitions",
        banglaTitle: "পরিভাষা ও সংজ্ঞা",
        orderIndex: 4,
        content:
          '<div><p>Hover over each card to explore the critical terminology used in IICI activities.</p><div class="commitments-grid"><div class="commitment-card"><div class="number">01</div><div class="title">IPS</div><div class="hover-icon">🖱 <span>Hover for details</span></div><div class="hover-tooltip">Initial Problem Solving: A structured rapid-response investigation triggered by specific beetle count thresholds.</div></div><div class="commitment-card"><div class="number">02</div><div class="title">REI</div><div class="hover-icon">🖱 <span>Hover for details</span></div><div class="hover-tooltip">Restricted Entry Interval: The mandatory waiting period after chemical treatment before re-entry is permitted.</div></div><div class="commitment-card"><div class="number">03</div><div class="title">HTR / SOC</div><div class="hover-icon">🖱 <span>Hover for details</span></div><div class="hover-tooltip">Hard to Read / Sources of Contamination: IWS defect-handling protocols targeting inaccessible or risky areas.</div></div></div></div>',
        banglaContent:
          '<div><p>IICI কার্যক্রমে ব্যবহৃত গুরুত্বপূর্ণ পরিভাষাগুলো জানতে কার্ডগুলোর ওপর মাউস রাখুন।</p><div class="commitments-grid"><div class="commitment-card"><div class="number">০১</div><div class="title">IPS</div><div class="hover-icon">🖱 <span>বিস্তারিত দেখুন</span></div><div class="hover-tooltip">Initial Problem Solving: বিটল গণনার নির্দিষ্ট সীমা অতিক্রম করলে শুরু হওয়া কাঠামোগত দ্রুত তদন্ত।</div></div><div class="commitment-card"><div class="number">০২</div><div class="title">REI</div><div class="hover-icon">🖱 <span>বিস্তারিত দেখুন</span></div><div class="hover-tooltip">Restricted Entry Interval: রাসায়নিক চিকিৎসার পর পুনরায় প্রবেশের আগে বাধ্যতামূলক অপেক্ষার সময়।</div></div><div class="commitment-card"><div class="number">০৩</div><div class="title">HTR / SOC</div><div class="hover-icon">🖱 <span>বিস্তারিত দেখুন</span></div><div class="hover-tooltip">Hard to Read / Sources of Contamination: দুর্গম বা ঝুঁকিপূর্ণ এলাকা চিহ্নিত ও নির্মূল করার প্রোটোকল।</div></div></div></div>',
      },
      {
        title: "IICI Cleaning: First Line of Defence",
        banglaTitle: "IICI পরিষ্কার: প্রথম প্রতিরক্ষা লাইন",
        orderIndex: 5,
        content:
          '<div>\n<p><video controls="controls" width="700" height="350"><source src="Cleaning, Nest Hunting & Chemical Treatment EN (720p).mp4" type="video/mp4"></video></p>\n<p>Cleaning is essential to remove beetle harborage spots such as covers, cavities, and cable trays.</p><h3>The Audit Process:</h3><ul><li><strong>In-process audit:</strong> Conducted during cleaning to verify methods and coverage.</li><li><strong>Final audit:</strong> Conducted after completion to verify effectiveness.</li><li><strong>Fogging Protocol:</strong> Deep cleaning before fogging; wet-cleaning of tobacco path after fogging (REI).</li></ul></div>',
        banglaContent:
          '<div>\n<p><video controls="controls" width="700" height="350"><source src="Cleaning, Nest Hunting & Chemical Treatment BN (720p).mp4" type="video/mp4"></video></p>\n<p>ঢাকনা, গহ্বর এবং কেবল ট্রে-র মতো বিটলের আশ্রয়স্থলগুলো অপসারণে পরিষ্কার করা অপরিহার্য।</p><h3>অডিট প্রক্রিয়া:</h3><ul><li><strong>ইন-প্রসেস অডিট:</strong> পদ্ধতি এবং কভারেজ যাচাই করতে পরিষ্কার চলাকালীন করা হয়।</li><li><strong>চূড়ান্ত অডিট:</strong> কার্যকারিতা যাচাই করতে কাজ শেষে করা হয়।</li><li><strong>ফগিং প্রোটোকল:</strong> ফগিং-এর আগে গভীর পরিষ্কার; ফগিং-এর পরে (REI শেষে) তামাকের পথ ভেজা পরিষ্কার।</li></ul></div>',
      },
      {
        title: "Beetle Nest Hunting (IPS)",
        banglaTitle: "বিটল বাসা অনুসন্ধান (IPS)",
        orderIndex: 6,
        content:
          '<div><h3>IPS Trigger Criteria:</h3><p>An IPS is triggered if:</p><ul><li>A trap remains <strong>Red for 3 consecutive days</strong>.</li><li>A single trap represents <strong>>15%</strong> of the total area count.</li></ul><h3>Nest Hunting Strategy:</h3><ol><li>Identify Top 3 Red traps.</li><li>Deploy <strong>3D Temporary Traps</strong> (floor, intermediate, and elevated levels).</li><li>Narrow boundary using proximity logic and airflow direction.</li><li>Verify eradication by leaving traps for 24 hours post-cleanup.</li></ol>\n<p><img src="3D Trap Placement Concept — Nest Hunting  3D ট্র্যাপ স্থাপন ধারণা — বাসা অনুসন্ধান.png" alt="3D Trap Placement Concept" style="max-width:100%; height:auto; border-radius:10px; margin: 12px auto; display:block; border: 1px solid var(--surface-border);" /></p>\n<p><img src="Airflow  Wind Direction in Narrowing Logic  সীমানা সংকোচনে বায়ুপ্রবাহ  বায়ুর দিক.png" alt="Airflow Wind Direction" style="max-width:100%; height:auto; border-radius:10px; margin: 12px auto; display:block; border: 1px solid var(--surface-border);" /></p>\n<p><img src="Proximity-Based Narrowing Down -নৈকট্য-ভিত্তিক সীমানা সংকোচন.png" alt="Proximity Based Narrowing Down" style="max-width:100%; height:auto; border-radius:10px; margin: 12px auto; display:block; border: 1px solid var(--surface-border);" /></p>\n\n</div>',
        banglaContent:
          '<div><h3>IPS ট্রিগারের মানদণ্ড:</h3><p>একটি IPS শুরু হয় যদি:</p><ul><li>কোনো ট্র্যাপ পরপর <strong>৩ দিন লাল</strong> থাকে।</li><li>একটি ট্র্যাপ এলাকার মোট গণনার <strong>১৫%-এর বেশি</strong> দখল করে।</li></ul><h3>বাসা অনুসন্ধান কৌশল:</h3><ol><li>শীর্ষ ৩টি লাল ট্র্যাপ চিহ্নিত করুন।</li><li><strong>3D অস্থায়ী ট্র্যাপ</strong> স্থাপন করুন (মেঝে, মধ্যবর্তী এবং উঁচু স্তর)।</li><li>নৈকট্য যুক্তি এবং বায়ুপ্রবাহের দিক ব্যবহার করে সীমানা সংকুচিত করুন।</li><li>পরিষ্কারের ২৪ ঘণ্টা পর ট্র্যাপ রেখে নির্মূল নিশ্চিত করুন।</li></ol>\n<p><img src="3D Trap Placement Concept — Nest Hunting  3D ট্র্যাপ স্থাপন ধারণা — বাসা অনুসন্ধান.png" alt="3D Trap Placement Concept" style="max-width:100%; height:auto; border-radius:10px; margin: 12px auto; display:block; border: 1px solid var(--surface-border);" /></p>\n<p><img src="Airflow  Wind Direction in Narrowing Logic  সীমানা সংকোচনে বায়ুপ্রবাহ  বায়ুর দিক.png" alt="Airflow Wind Direction" style="max-width:100%; height:auto; border-radius:10px; margin: 12px auto; display:block; border: 1px solid var(--surface-border);" /></p>\n<p><img src="Proximity-Based Narrowing Down -নৈকট্য-ভিত্তিক সীমানা সংকোচন.png" alt="Proximity Based Narrowing Down" style="max-width:100%; height:auto; border-radius:10px; margin: 12px auto; display:block; border: 1px solid var(--surface-border);" /></p>\n\n</div>',
      },
      {
        title: "Chemical and Physical Treatment",
        banglaTitle: "রাসায়নিক ও ভৌত চিকিৎসা",
        orderIndex: 7,
        content:
          '<div><h3>Treatment Types:</h3><ul><li><strong>Fumigation:</strong> Applied to leaf materials and stored tobacco.</li><li><strong>Spraying:</strong> Weekly application on surfaces.</li><li><strong>Fogging:</strong> Every two weeks (Thermal or ULV).</li></ul><h3>Safety Rules:</h3><ul><li>Full-face masks and gloves are mandatory.</li><li>Chemicals are rotated every two cycles to prevent resistance.</li><li><span class="hover-text" data-tooltip="Restricted Entry Interval">REI <i class="fas fa-info-circle text-muted"></i></span> must be strictly followed before re-entry.</li></ul><p><img src="Images/Slide 7 - Chemical & Physical Treatment.png" alt="Chemical Treatment Protocol" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
        banglaContent:
          '<div><h3>চিকিৎসার ধরন:</h3><ul><li><strong>ফিউমিগেশন:</strong> পাতার উপকরণ এবং সংরক্ষিত তামাকের জন্য প্রযোজ্য।</li><li><strong>স্প্রেয়িং:</strong> পৃষ্ঠতলে সাপ্তাহিক প্রয়োগ।</li><li><strong>ফগিং:</strong> প্রতি দুই সপ্তাহে (তাপীয় বা ULV)।</li></ul><h3>নিরাপত্তা নিয়ম:</h3><ul><li>ফিল্টারসহ ফুল-ফেস মাস্ক এবং গ্লাভস বাধ্যতামূলক।</li><li>প্রতিরোধক্ষমতা রোধে প্রতি দুই চক্রে রাসায়নিক পরিবর্তন করা হয়।</li><li>পুনরায় প্রবেশের আগে <span class="hover-text" data-tooltip="Restricted Entry Interval">REI <i class="fas fa-info-circle text-muted"></i></span> কঠোরভাবে পালন করতে হবে।</li></ul><p><img src="Images/Slide 7 - Chemical & Physical Treatment.png" alt="Chemical Treatment Protocol" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
      },
      {
        title: "Flowchart: Infestation Monitoring & Beetle Trap Management",
        banglaTitle: "\u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F: \u09B8\u0982\u0995\u09CD\u09B0\u09AE\u09A3 \u09AA\u09B0\u09CD\u09AF\u09AC\u09C7\u0995\u09CD\u09B7\u09A3 \u0993 \u09AC\u09BF\u099F\u09B2 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u09AC\u09CD\u09AF\u09AC\u09B8\u09CD\u09A5\u09BE\u09AA\u09A8\u09BE",
        orderIndex: 8,
        content:
          '<div><h3>Monitoring & Trap Management Process Flow</h3><p>This flowchart illustrates the complete end-to-end process for beetle trap monitoring \u2014 from initial map layout setup and inventory checks through daily counting, colour-band reporting in DDS, and the decision tree for Green / Yellow / Red status actions.</p><ul><li><strong>Setup:</strong> Verify Beetle Trap Map Layout \u2192 Check inventory \u2192 Order if stock &lt; 6 months.</li><li><strong>Daily Cycle:</strong> Install/Replace traps \u2192 Label (ID, Type, Month) \u2192 Count daily \u2192 Report in QIMS &amp; DDS.</li><li><strong>Action Based on Status:</strong> <span style="color:green;font-weight:bold;">Green</span> = continue \u00b7 <span style="color:#cccc00;font-weight:bold;">Yellow</span> = increased monitoring \u00b7 <span style="color:red;font-weight:bold;">Red</span> = action planning (cleaning, nest hunting, chemical treatment).</li><li><strong>Close-out:</strong> Trap reconciliation at month-end.</li></ul><p><img src="Images/Slide 8 (New) - Flowchart of Infestation Monitoring and Beetle Trap Management.png" alt="Flowchart \u2014 Infestation Monitoring &amp; Beetle Trap Management" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
        banglaContent:
          '<div><h3>\u09AA\u09B0\u09CD\u09AF\u09AC\u09C7\u0995\u09CD\u09B7\u09A3 \u0993 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u09AC\u09CD\u09AF\u09AC\u09B8\u09CD\u09A5\u09BE\u09AA\u09A8\u09BE \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09AA\u09CD\u09B0\u09AC\u09BE\u09B9</h3><p>\u098F\u0987 \u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F\u099F\u09BF \u09AC\u09BF\u099F\u09B2 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u09AA\u09B0\u09CD\u09AF\u09AC\u09C7\u0995\u09CD\u09B7\u09A3\u09C7\u09B0 \u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u099A\u09BF\u09A4\u09CD\u09B0\u09BF\u09A4 \u0995\u09B0\u09C7 \u2014 \u09AA\u09CD\u09B0\u09BE\u09A5\u09AE\u09BF\u0995 \u09AE\u09CD\u09AF\u09BE\u09AA \u09B2\u09C7\u0986\u0989\u099F \u09B8\u09C7\u099F\u0986\u09AA \u098F\u09AC\u0982 \u0987\u09A8\u09AD\u09C7\u09A8\u09CD\u099F\u09B0\u09BF \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09A5\u09C7\u0995\u09C7 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C7 \u09A6\u09C8\u09A8\u09BF\u0995 \u0997\u09A3\u09A8\u09BE, DDS-\u098F \u0995\u09BE\u09B2\u09BE\u09B0-\u09AC\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09B0\u09BF\u09AA\u09CB\u09B0\u09CD\u099F\u09BF\u0982 \u098F\u09AC\u0982 \u09B8\u09AC\u09C1\u099C / \u09B9\u09B2\u09C1\u09A6 / \u09B2\u09BE\u09B2 \u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u09B0 \u09B8\u09BF\u09A6\u09CD\u09A7\u09BE\u09A8\u09CD\u09A4 \u0997\u09BE\u099B \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4\u0964</p><ul><li><strong>\u09B8\u09C7\u099F\u0986\u09AA:</strong> \u09AC\u09BF\u099F\u09B2 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u09AE\u09CD\u09AF\u09BE\u09AA \u09B2\u09C7\u0986\u0989\u099F \u09AF\u09BE\u099A\u09BE\u0987 \u2192 \u0987\u09A8\u09AD\u09C7\u09A8\u09CD\u099F\u09B0\u09BF \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u2192 \u09B8\u09CD\u099F\u0995 \u09EC \u09AE\u09BE\u09B8\u09C7\u09B0 \u0995\u09AE \u09B9\u09B2\u09C7 \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u0964</li><li><strong>\u09A6\u09C8\u09A8\u09BF\u0995 \u099A\u0995\u09CD\u09B0:</strong> \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u0987\u09A8\u09B8\u09CD\u099F\u09B2/\u09AA\u09CD\u09B0\u09A4\u09BF\u09B8\u09CD\u09A5\u09BE\u09AA\u09A8 \u2192 \u09B2\u09C7\u09AC\u09C7\u09B2 (\u0986\u0987\u09A1\u09BF, \u09A7\u09B0\u09A8, \u09AE\u09BE\u09B8) \u2192 \u09A6\u09C8\u09A8\u09BF\u0995 \u0997\u09A3\u09A8\u09BE \u2192 QIMS \u0993 DDS-\u098F \u09B0\u09BF\u09AA\u09CB\u09B0\u09CD\u099F\u0964</li><li><strong>\u09B8\u09CD\u099F\u09CD\u09AF\u09BE\u099F\u09BE\u09B8 \u0985\u09A8\u09C1\u09AF\u09BE\u09AF\u09BC\u09C0 \u09AA\u09A6\u0995\u09CD\u09B7\u09C7\u09AA:</strong> <span style="color:green;font-weight:bold;">\u09B8\u09AC\u09C1\u099C</span> = \u099A\u09BE\u09B2\u09BF\u09AF\u09BC\u09C7 \u09AF\u09BE\u09A8 \u00b7 <span style="color:#cccc00;font-weight:bold;">\u09B9\u09B2\u09C1\u09A6</span> = \u09AC\u09B0\u09CD\u09A7\u09BF\u09A4 \u09AA\u09B0\u09CD\u09AF\u09AC\u09C7\u0995\u09CD\u09B7\u09A3 \u00b7 <span style="color:red;font-weight:bold;">\u09B2\u09BE\u09B2</span> = \u0995\u09B0\u09CD\u09AE \u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09A8\u09BE (\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0, \u09AC\u09BE\u09B8\u09BE \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8, \u09B0\u09BE\u09B8\u09BE\u09AF\u09BC\u09A8\u09BF\u0995 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE)\u0964</li><li><strong>\u09B8\u09AE\u09BE\u09AA\u09CD\u09A4\u09BF:</strong> \u09AE\u09BE\u09B8 \u09B6\u09C7\u09B7\u09C7 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u09B8\u09AE\u09A8\u09CD\u09AC\u09AF\u09BC\u0964</li></ul><p><img src="Images/Slide 8 (New) - Flowchart of Infestation Monitoring and Beetle Trap Management.png" alt="\u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F \u2014 \u09B8\u0982\u0995\u09CD\u09B0\u09AE\u09A3 \u09AA\u09B0\u09CD\u09AF\u09AC\u09C7\u0995\u09CD\u09B7\u09A3 \u0993 \u09AC\u09BF\u099F\u09B2 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u09AC\u09CD\u09AF\u09AC\u09B8\u09CD\u09A5\u09BE\u09AA\u09A8\u09BE" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
      },
      {
        title: "Flowchart: Infestation Prevention & Control \u2014 Cleaning",
        banglaTitle: "\u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F: \u09B8\u0982\u0995\u09CD\u09B0\u09AE\u09A3 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7 \u0993 \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3 \u2014 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0",
        orderIndex: 9,
        content:
          '<div><h3>Cleaning Process Flow</h3><p>This flowchart maps out the cleaning and nest-hunting workflow \u2014 from establishing equipment lists and schedules to executing deep cleaning, visual audits, and escalation paths for unsatisfactory results.</p><ul><li><strong>Preparation:</strong> Verify Comprehensive Equipment List \u2192 Create Cleaning Schedule \u2192 Ensure Checklists exist for all equipment.</li><li><strong>Execution:</strong> Perform Cleaning &amp; Nest Hunting \u2192 Deep Cleaning of equipment \u2192 Immediate Nest Cleaning when nests are found.</li><li><strong>Verification:</strong> Visual Audit of Cleaning \u2192 If unsatisfactory, re-clean with improvement scope \u2192 If nest spot is on checklist, audit using temporary traps (24 hrs).</li><li><strong>Escalation:</strong> If &gt;2 beetles found after audit \u2192 continue cycle \u00b7 If chemical/physical treatment is scheduled \u2192 Surface Cleaning (Tobacco Path) \u2192 Final satisfactory check.</li></ul><p><img src="Images/Slide 9 (New) - Flowchart of Infestation Prevention &amp; Control - Cleaning.png" alt="Flowchart \u2014 Cleaning Process" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
        banglaContent:
          '<div><h3>\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09AA\u09CD\u09B0\u09AC\u09BE\u09B9</h3><p>\u098F\u0987 \u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F\u099F\u09BF \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0993 \u09AC\u09BE\u09B8\u09BE \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09C7\u09B0 \u0995\u09B0\u09CD\u09AE\u09AA\u09CD\u09B0\u09AC\u09BE\u09B9 \u099A\u09BF\u09A4\u09CD\u09B0\u09BF\u09A4 \u0995\u09B0\u09C7 \u2014 \u09B8\u09B0\u099E\u09CD\u099C\u09BE\u09AE\u09C7\u09B0 \u09A4\u09BE\u09B2\u09BF\u0995\u09BE \u0993 \u09B8\u09AE\u09AF\u09BC\u09B8\u09C2\u099A\u09BF \u09A4\u09C8\u09B0\u09BF \u09A5\u09C7\u0995\u09C7 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C7 \u0997\u09AD\u09C0\u09B0 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0, \u09AD\u09BF\u099C\u09CD\u09AF\u09C1\u09AF\u09BC\u09BE\u09B2 \u0985\u09A1\u09BF\u099F \u098F\u09AC\u0982 \u0985\u09B8\u09A8\u09CD\u09A4\u09CB\u09B7\u099C\u09A8\u0995 \u09AB\u09B2\u09BE\u09AB\u09B2\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09AA\u09A6\u0995\u09CD\u09B7\u09C7\u09AA \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4\u0964</p><ul><li><strong>\u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4\u09BF:</strong> \u09AC\u09CD\u09AF\u09BE\u09AA\u0995 \u09B8\u09B0\u099E\u09CD\u099C\u09BE\u09AE\u09C7\u09B0 \u09A4\u09BE\u09B2\u09BF\u0995\u09BE \u09AF\u09BE\u099A\u09BE\u0987 \u2192 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0\u09C7\u09B0 \u09B8\u09AE\u09AF\u09BC\u09B8\u09C2\u099A\u09BF \u09A4\u09C8\u09B0\u09BF \u2192 \u09B8\u09AE\u09B8\u09CD\u09A4 \u09B8\u09B0\u099E\u09CD\u099C\u09BE\u09AE\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u099A\u09C7\u0995\u09B2\u09BF\u09B8\u09CD\u099F \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u0995\u09B0\u09C1\u09A8\u0964</li><li><strong>\u09AC\u09BE\u09B8\u09CD\u09A4\u09AC\u09BE\u09AF\u09BC\u09A8:</strong> \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u0993 \u09AC\u09BE\u09B8\u09BE \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8 \u2192 \u09B8\u09B0\u099E\u09CD\u099C\u09BE\u09AE\u09C7\u09B0 \u0997\u09AD\u09C0\u09B0 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u2192 \u09AC\u09BE\u09B8\u09BE \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u0997\u09C7\u09B2\u09C7 \u09A4\u09BE\u09CE\u0995\u09CD\u09B7\u09A3\u09BF\u0995 \u09AC\u09BE\u09B8\u09BE \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0\u0964</li><li><strong>\u09AF\u09BE\u099A\u09BE\u0987\u0995\u09B0\u09A3:</strong> \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0\u09C7\u09B0 \u09AD\u09BF\u099C\u09CD\u09AF\u09C1\u09AF\u09BC\u09BE\u09B2 \u0985\u09A1\u09BF\u099F \u2192 \u0985\u09B8\u09A8\u09CD\u09A4\u09CB\u09B7\u099C\u09A8\u0995 \u09B9\u09B2\u09C7 \u0989\u09A8\u09CD\u09A8\u09AF\u09BC\u09A8\u09C7\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u2192 \u09AC\u09BE\u09B8\u09BE\u09B0 \u09B8\u09CD\u09A5\u09BE\u09A8 \u099A\u09C7\u0995\u09B2\u09BF\u09B8\u09CD\u099F\u09C7 \u09A5\u09BE\u0995\u09B2\u09C7 \u0985\u09B8\u09CD\u09A5\u09BE\u09AF\u09BC\u09C0 \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u09A6\u09BF\u09AF\u09BC\u09C7 \u0985\u09A1\u09BF\u099F (\u09E8\u09EA \u0998\u09A3\u09CD\u099F\u09BE)\u0964</li><li><strong>\u0989\u09A4\u09CD\u09A4\u09B0\u09A3:</strong> \u0985\u09A1\u09BF\u099F\u09C7\u09B0 \u09AA\u09B0 \u09E8\u099F\u09BF\u09B0 \u09AC\u09C7\u09B6\u09BF \u09AC\u09BF\u099F\u09B2 \u09AA\u09BE\u0993\u09AF\u09BC\u09BE \u0997\u09C7\u09B2\u09C7 \u2192 \u099A\u0995\u09CD\u09B0 \u0985\u09AC\u09CD\u09AF\u09BE\u09B9\u09A4 \u00b7 \u09B0\u09BE\u09B8\u09BE\u09AF\u09BC\u09A8\u09BF\u0995/\u09AD\u09CC\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u09A8\u09BF\u09B0\u09CD\u09A7\u09BE\u09B0\u09BF\u09A4 \u09A5\u09BE\u0995\u09B2\u09C7 \u2192 \u09AA\u09C3\u09B7\u09CD\u09A0 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 (\u09A4\u09BE\u09AE\u09BE\u0995\u09C7\u09B0 \u09AA\u09A5) \u2192 \u099A\u09C2\u09A1\u09BC\u09BE\u09A8\u09CD\u09A4 \u09B8\u09A8\u09CD\u09A4\u09CB\u09B7\u099C\u09A8\u0995 \u09AF\u09BE\u099A\u09BE\u0987\u0964</li></ul><p><img src="Images/Slide 9 (New) - Flowchart of Infestation Prevention &amp; Control - Cleaning.png" alt="\u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F \u2014 \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0 \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
      },
      {
        title: "Flowchart: Infestation Prevention & Control \u2014 Chemical & Physical Treatment",
        banglaTitle: "\u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F: \u09B8\u0982\u0995\u09CD\u09B0\u09AE\u09A3 \u09AA\u09CD\u09B0\u09A4\u09BF\u09B0\u09CB\u09A7 \u0993 \u09A8\u09BF\u09AF\u09BC\u09A8\u09CD\u09A4\u09CD\u09B0\u09A3 \u2014 \u09B0\u09BE\u09B8\u09BE\u09AF\u09BC\u09A8\u09BF\u0995 \u0993 \u09AD\u09CC\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE",
        orderIndex: 10,
        content:
          '<div><h3>Chemical & Physical Treatment Process Flow</h3><p>This flowchart details the decision logic for selecting and executing chemical or physical treatments based on the trigger type \u2014 incoming leaf, regular treatment schedule, or special case scenarios.</p><ul><li><strong>Incoming Leaf:</strong> Monitor traps in incoming leaf \u2192 If beetle count exceeds threshold \u2192 Segregate &amp; Fumigate.</li><li><strong>Regular Treatment:</strong> Spraying every week, Fogging every two weeks \u2192 Rotate chemicals if used two consecutive times \u2192 Ensure PPE &amp; training \u2192 Execute on Machines (excl. tobacco path), Wall Structure, Overhead, and other HTR areas.</li><li><strong>Special Case:</strong> Dry Ice / CO\u2082 Treatment for targeted scenarios.</li><li><strong>Post-Treatment:</strong> Cleaning of all treated areas before resuming operations.</li></ul><p><img src="Images/Slide 10 (New) - Flowchart of Infestation Prevention &amp; Control - Chemical and Physical Treatment.png" alt="Flowchart \u2014 Chemical &amp; Physical Treatment" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
        banglaContent:
          '<div><h3>\u09B0\u09BE\u09B8\u09BE\u09AF\u09BC\u09A8\u09BF\u0995 \u0993 \u09AD\u09CC\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09AA\u09CD\u09B0\u09AC\u09BE\u09B9</h3><p>\u098F\u0987 \u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F\u099F\u09BF \u099F\u09CD\u09B0\u09BF\u0997\u09BE\u09B0\u09C7\u09B0 \u09A7\u09B0\u09A8\u09C7\u09B0 \u0989\u09AA\u09B0 \u09AD\u09BF\u09A4\u09CD\u09A4\u09BF \u0995\u09B0\u09C7 \u09B0\u09BE\u09B8\u09BE\u09AF\u09BC\u09A8\u09BF\u0995 \u09AC\u09BE \u09AD\u09CC\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0993 \u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u09A8\u09C7\u09B0 \u09B8\u09BF\u09A6\u09CD\u09A7\u09BE\u09A8\u09CD\u09A4 \u09AF\u09C1\u0995\u09CD\u09A4\u09BF \u09AC\u09BF\u09B6\u09A6\u09AD\u09BE\u09AC\u09C7 \u09AC\u09B0\u09CD\u09A3\u09A8\u09BE \u0995\u09B0\u09C7 \u2014 \u0986\u0997\u09A4 \u09AA\u09BE\u09A4\u09BE, \u09A8\u09BF\u09AF\u09BC\u09AE\u09BF\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u09B0 \u09B8\u09AE\u09AF\u09BC\u09B8\u09C2\u099A\u09BF, \u09AC\u09BE \u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7\u0964</p><ul><li><strong>\u0986\u0997\u09A4 \u09AA\u09BE\u09A4\u09BE:</strong> \u0986\u0997\u09A4 \u09AA\u09BE\u09A4\u09BE\u09AF\u09BC \u099F\u09CD\u09B0\u09CD\u09AF\u09BE\u09AA \u09AA\u09B0\u09CD\u09AF\u09AC\u09C7\u0995\u09CD\u09B7\u09A3 \u2192 \u09AC\u09BF\u099F\u09B2 \u0997\u09A3\u09A8\u09BE \u09B8\u09C0\u09AE\u09BE \u0985\u09A4\u09BF\u0995\u09CD\u09B0\u09AE \u0995\u09B0\u09B2\u09C7 \u2192 \u0986\u09B2\u09BE\u09A6\u09BE \u0995\u09B0\u09C1\u09A8 \u0993 \u09AB\u09BF\u0989\u09AE\u09BF\u0997\u09C7\u09B6\u09A8 \u0995\u09B0\u09C1\u09A8\u0964</li><li><strong>\u09A8\u09BF\u09AF\u09BC\u09AE\u09BF\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE:</strong> \u09AA\u09CD\u09B0\u09A4\u09BF \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7 \u09B8\u09CD\u09AA\u09CD\u09B0\u09C7\u09AF\u09BC\u09BF\u0982, \u09AA\u09CD\u09B0\u09A4\u09BF \u09A6\u09C1\u0987 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7 \u09AB\u0997\u09BF\u0982 \u2192 \u09AA\u09B0\u09AA\u09B0 \u09A6\u09C1\u0987\u09AC\u09BE\u09B0 \u09AC\u09CD\u09AF\u09AC\u09B9\u09C3\u09A4 \u09B9\u09B2\u09C7 \u09B0\u09BE\u09B8\u09BE\u09AF\u09BC\u09A8\u09BF\u0995 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u2192 PPE \u0993 \u09AA\u09CD\u09B0\u09B6\u09BF\u0995\u09CD\u09B7\u09A3 \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u0995\u09B0\u09C1\u09A8 \u2192 \u09AE\u09C7\u09B6\u09BF\u09A8 (\u09A4\u09BE\u09AE\u09BE\u0995\u09C7\u09B0 \u09AA\u09A5 \u09AC\u09BE\u09A6\u09C7), \u09A6\u09C7\u09AF\u09BC\u09BE\u09B2 \u0995\u09BE\u09A0\u09BE\u09AE\u09CB, \u0993\u09AD\u09BE\u09B0\u09B9\u09C7\u09A1 \u098F\u09AC\u0982 \u0985\u09A8\u09CD\u09AF\u09BE\u09A8\u09CD\u09AF HTR \u098F\u09B2\u09BE\u0995\u09BE\u09AF\u09BC \u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u09A8\u0964</li><li><strong>\u09AC\u09BF\u09B6\u09C7\u09B7 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0:</strong> \u09B2\u0995\u09CD\u09B7\u09CD\u09AF\u09AC\u09B8\u09CD\u09A4\u09C1 \u09AA\u09B0\u09BF\u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u09A1\u09CD\u09B0\u09BE\u0987 \u0986\u0987\u09B8 / CO\u2082 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE\u0964</li><li><strong>\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE-\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0:</strong> \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09AA\u09C1\u09A8\u09B0\u09BE\u09AF\u09BC \u09B6\u09C1\u09B0\u09C1\u09B0 \u0986\u0997\u09C7 \u09B8\u09AE\u09B8\u09CD\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BF\u09A4 \u098F\u09B2\u09BE\u0995\u09BE \u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0\u0964</li></ul><p><img src="Images/Slide 10 (New) - Flowchart of Infestation Prevention &amp; Control - Chemical and Physical Treatment.png" alt="\u09AB\u09CD\u09B2\u09CB\u099A\u09BE\u09B0\u09CD\u099F \u2014 \u09B0\u09BE\u09B8\u09BE\u09AF\u09BC\u09A8\u09BF\u0995 \u0993 \u09AD\u09CC\u09A4 \u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE" style="max-width:100%; height:auto; border-radius:10px; margin: 20px auto; display:block; border: 1px solid var(--surface-border);" /></p></div>',
      },
    ],
    quizzes: [
      {
        title: "IICI Module Assessment",
        questions: [
          {
            text: "What is the primary focus of the IICI programme at the factory?",
            banglaText: "কারখানায় IICI কার্যক্রমের প্রধান লক্ষ্য কী?",
            options: [
              {
                text: "A. Fire safety and emergency response",
                banglaText: "A. অগ্নি নিরাপত্তা ও জরুরি প্রতিক্রিয়া",
                isCorrect: false,
              },
              {
                text: "B. Detect, control, and eliminate tobacco beetle infestation in a standardized way",
                banglaText:
                  "B. মানসম্মতভাবে তামাক বিটল সংক্রমণ শনাক্ত, নিয়ন্ত্রণ ও নির্মূল করা",
                isCorrect: true,
              },
              {
                text: "C. Manage raw material procurement cycles",
                banglaText: "C. কাঁচামাল ক্রয় চক্র পরিচালনা করা",
                isCorrect: false,
              },
              {
                text: "D. Track employee attendance and overtime",
                banglaText: "D. কর্মীর উপস্থিতি ও ওভারটাইম ট্র্যাক করা",
                isCorrect: false,
              },
            ],
          },
          {
            text: "On the beetle trap colour-band map, what does a RED zone indicate?",
            banglaText:
              "বিটল ট্র্যাপ কালার-ব্যান্ড ম্যাপে লাল (RED) জোন কী নির্দেশ করে?",
            options: [
              {
                text: "A. No action required — situation is normal",
                banglaText: "A. কোনো ব্যবস্থার দরকার নেই — পরিস্থিতি স্বাভাবিক",
                isCorrect: false,
              },
              {
                text: "B. Continue increased monitoring only",
                banglaText: "B. শুধু পর্যবেক্ষণ বাড়িয়ে চলুন",
                isCorrect: false,
              },
              {
                text: "C. Take immediate action",
                banglaText: "C. তাৎক্ষণিক ব্যবস্থা নিন",
                isCorrect: true,
              },
              {
                text: "D. Replace the trap and resume normal schedule",
                banglaText:
                  "D. ট্র্যাপ প্রতিস্থাপন করুন এবং স্বাভাবিক সময়সূচিতে ফিরুন",
                isCorrect: false,
              },
            ],
          },
          {
            text: "How frequently are permanent beetle traps replaced and counted?",
            banglaText:
              "স্থায়ী বিটল ট্র্যাপ কত ঘন ঘন প্রতিস্থাপন ও গণনা করা হয়?",
            options: [
              {
                text: "A. Replaced weekly, counted bi-weekly",
                banglaText: "A. সাপ্তাহিক প্রতিস্থাপন, পাক্ষিক গণনা",
                isCorrect: false,
              },
              {
                text: "B. Replaced monthly, counted daily",
                banglaText: "B. মাসিক প্রতিস্থাপন, দৈনিক গণনা",
                isCorrect: true,
              },
              {
                text: "C. Replaced monthly, counted weekly",
                banglaText: "C. মাসিক প্রতিস্থাপন, সাপ্তাহিক গণনা",
                isCorrect: false,
              },
              {
                text: "D. Replaced bi-weekly, counted daily",
                banglaText: "D. পাক্ষিক প্রতিস্থাপন, দৈনিক গণনা",
                isCorrect: false,
              },
            ],
          },
          {
            text: "Which TWO conditions can independently trigger an IPS (Initial Problem Solving)?",
            banglaText:
              "কোন দুটি শর্ত স্বাধীনভাবে IPS (Initial Problem Solving) শুরু করতে পারে?",
            options: [
              {
                text: "A. A trap stays Yellow for 2 days OR the team leader requests it",
                banglaText:
                  "A. ট্র্যাপ ২ দিন হলুদ থাকলে অথবা টিম লিডার অনুরোধ করলে",
                isCorrect: false,
              },
              {
                text: "B. A trap stays Red for 3 consecutive days OR a single trap exceeds 15% of total area count",
                banglaText:
                  "B. ট্র্যাপ পরপর ৩ দিন লাল থাকলে অথবা একটি ট্র্যাপ মোট এলাকার গণনার ১৫%-এর বেশি হলে",
                isCorrect: true,
              },
              {
                text: "C. Monthly reconciliation is overdue OR a trap is not labelled",
                banglaText:
                  "C. মাসিক সমন্বয় মেয়াদোত্তীর্ণ হলে অথবা ট্র্যাপে লেবেল না থাকলে",
                isCorrect: false,
              },
              {
                text: "D. Fogging chemicals are depleted OR an overhead trap is missed",
                banglaText:
                  "D. ফগিং রাসায়নিক শেষ হয়ে গেলে অথবা ওভারহেড ট্র্যাপ মিস হলে",
                isCorrect: false,
              },
            ],
          },
          {
            text: "What is the key contamination risk if temporary/mobile traps are not properly logged and removed?",
            banglaText:
              "অস্থায়ী/মোবাইল ট্র্যাপ সঠিকভাবে লগ ও অপসারণ না করলে প্রধান দূষণের ঝুঁকি কী?",
            options: [
              {
                text: "A. Increased procurement costs for new traps",
                banglaText: "A. নতুন ট্র্যাপের জন্য ক্রয় খরচ বাড়বে",
                isCorrect: false,
              },
              {
                text: "B. Traps may enter the product path, creating a contamination risk",
                banglaText:
                  "B. ট্র্যাপ পণ্যের পথে প্রবেশ করে দূষণের ঝুঁকি তৈরি করতে পারে",
                isCorrect: true,
              },
              {
                text: "C. Audit scores will be reduced at the next inspection",
                banglaText: "C. পরবর্তী পরিদর্শনে অডিট স্কোর কমে যাবে",
                isCorrect: false,
              },
              {
                text: "D. DDS reporting will be delayed the next morning",
                banglaText: "D. পরের দিন সকালে DDS রিপোর্টিং বিলম্বিত হবে",
                isCorrect: false,
              },
            ],
          },
          {
            text: "Who is accountable for approving additional trap usage (number, placement, and duration) beyond the standard layout?",
            banglaText:
              "স্ট্যান্ডার্ড লেআউটের বাইরে অতিরিক্ত ট্র্যাপ ব্যবহার (সংখ্যা, স্থান ও সময়কাল) অনুমোদনের দায়িত্ব কার?",
            options: [
              {
                text: "A. Production Shift Manager",
                banglaText: "A. প্রোডাকশন শিফট ম্যানেজার",
                isCorrect: false,
              },
              {
                text: "B. Engineering Department",
                banglaText: "B. ইঞ্জিনিয়ারিং বিভাগ",
                isCorrect: false,
              },
              {
                text: "C. Quality Department",
                banglaText: "C. কোয়ালিটি বিভাগ",
                isCorrect: true,
              },
              {
                text: "D. Any senior technician on shift",
                banglaText: "D. শিফটের যেকোনো সিনিয়র টেকনিশিয়ান",
                isCorrect: false,
              },
            ],
          },
          {
            text: "According to the IICI SOP, what must happen BEFORE any fogging treatment is applied?",
            banglaText: "IICI SOP অনুযায়ী, যেকোনো ফগিং-এর আগে কী করতে হবে?",
            options: [
              {
                text: "A. All beetle traps must be removed and disposed",
                banglaText: "A. সমস্ত বিটল ট্র্যাপ অপসারণ করতে হবে",
                isCorrect: false,
              },
              {
                text: "B. A deep cleaning must be performed to expose beetles",
                banglaText: "B. বিটল বের করে আনতে ডীপ ক্লিনিং করতে হবে",
                isCorrect: true,
              },
              {
                text: "C. Production must be halted for at least 48 hours",
                banglaText: "C. উৎপাদন কমপক্ষে ৪৮ ঘণ্টার জন্য বন্ধ রাখতে হবে",
                isCorrect: false,
              },
              {
                text: "D. A new trap layout map must be approved by Quality",
                banglaText:
                  "D. কোয়ালিটি কর্তৃক একটি নতুন ট্র্যাপ লেআউট ম্যাপ অনুমোদন করতে হবে",
                isCorrect: false,
              },
            ],
          },
          {
            text: "After fogging and once the REI (Restricted Entry Interval) has passed, what specific action is required on the tobacco path?",
            banglaText:
              "ফগিং-এর পরে এবং REI শেষ হলে তামাকের পথে (tobacco path) কোন নির্দিষ্ট পদক্ষেপ প্রয়োজন?",
            options: [
              {
                text: "A. Apply a second round of dry chemical spraying",
                banglaText: "A. দ্বিতীয় দফায় শুকনো রাসায়নিক স্প্রে করুন",
                isCorrect: false,
              },
              {
                text: "B. Wet-clean the entire tobacco path with water to prevent product contamination",
                banglaText:
                  "B. পণ্য দূষণ রোধে পুরো তামাকের পথ পানি দিয়ে মুছে পরিষ্কার করুন",
                isCorrect: true,
              },
              {
                text: "C. Leave it for 24 hours with all fans off",
                banglaText: "C. সমস্ত ফ্যান বন্ধ রেখে ২৪ ঘণ্টা রেখে দিন",
                isCorrect: false,
              },
              {
                text: "D. Cover the path with plastic sheeting until the next shift",
                banglaText:
                  "D. পরবর্তী শিফট পর্যন্ত পথটি প্লাস্টিক দিয়ে ঢেকে রাখুন",
                isCorrect: false,
              },
            ],
          },
          {
            text: "Why are spraying chemicals rotated every two treatment cycles?",
            banglaText:
              "স্প্রেয়িং রাসায়নিক প্রতি দুই ট্রিটমেন্ট চক্রে পরিবর্তন করা হয় কেন?",
            options: [
              {
                text: "A. To reduce procurement costs through bulk buying",
                banglaText: "A. বাল্ক ক্রয়ের মাধ্যমে ক্রয় খরচ কমাতে",
                isCorrect: false,
              },
              {
                text: "B. To comply with annual government licensing requirements",
                banglaText:
                  "B. বার্ষিক সরকারি লাইসেন্সিং প্রয়োজনীয়তা মেনে চলতে",
                isCorrect: false,
              },
              {
                text: "C. To prevent beetles from developing resistance to a single chemical",
                banglaText:
                  "C. বিটলকে একটি রাসায়নিকের প্রতি প্রতিরোধ ক্ষমতা তৈরি করা থেকে বিরত রাখতে",
                isCorrect: true,
              },
              {
                text: "D. To match the seasonal availability of chemicals",
                banglaText: "D. রাসায়নিকের মৌসুমী প্রাপ্যতার সাথে মেলাতে",
                isCorrect: false,
              },
            ],
          },
          {
            text: "Spraying and fogging of chemicals is PROHIBITED in which area(s)?",
            banglaText: "কোন এলাকায় রাসায়নিক স্প্রেয়িং ও ফগিং নিষিদ্ধ?",
            options: [
              {
                text: "A. Primary production floor and electrical cabinet rooms",
                banglaText: "A. প্রাইমারি প্রডাকশন ও বৈদ্যতিক ক্যাবিনেট কক্ষ",
                isCorrect: false,
              },
              {
                text: "B. NTM (Non-Tobacco Material) and Finished Goods (FG) warehouses",
                banglaText:
                  "B. NTM (Non-Tobacco Material) ও চূড়ান্ত পণ্যের (FG) গুদাম",
                isCorrect: true,
              },
              {
                text: "C. Overhead areas above 25 feet",
                banglaText: "C. ২৫ ফুটের উপরের ওভারহেড এলাকা",
                isCorrect: false,
              },
              {
                text: "D. Areas adjacent to the main entrance/exit",
                banglaText: "D. মূল প্রবেশ/প্রস্থানের পার্শ্ববর্তী এলাকা",
                isCorrect: false,
              },
            ],
          },
          {
            text: "What PPE must workers wear when performing spraying or fogging operations?",
            banglaText:
              "স্প্রেয়িং বা ফগিং কার্যক্রম পরিচালনার সময় কর্মীদের কোন PPE পরতে হবে?",
            options: [
              {
                text: "A. Safety glasses and steel-toed boots only",
                banglaText: "A. শুধু সেফটি গ্লাস ও স্টিল-টোড বুট",
                isCorrect: false,
              },
              {
                text: "B. Hard hat and high-visibility vest",
                banglaText: "B. হার্ড হ্যাট ও হাই-ভিজিবিলিটি ভেস্ট",
                isCorrect: false,
              },
              {
                text: "C. Full-face mask with filters plus gloves",
                banglaText: "C. ফিল্টারসহ ফুল-ফেস মাস্ক ও গ্লাভস",
                isCorrect: true,
              },
              {
                text: "D. Dust mask and standard work uniform",
                banglaText: "D. ডাস্ট মাস্ক ও স্ট্যান্ডার্ড কাজের পোশাক",
                isCorrect: false,
              },
            ],
          },
          {
            text: "What action must be taken if the Quality final audit of a cleaned area returns a NEGATIVE finding?",
            banglaText:
              "পরিষ্কার করা এলাকার Quality চূড়ান্ত অডিটে নেতিবাচক ফলাফল আসলে কী পদক্ষেপ নিতে হবে?",
            options: [
              {
                text: "A. Log the finding in QIMS and wait for the next scheduled cleaning",
                banglaText:
                  "A. QIMS-এ ফাইন্ডিং লগ করুন এবং পরবর্তী নির্ধারিত পরিষ্কারের জন্য অপেক্ষা করুন",
                isCorrect: false,
              },
              {
                text: "B. Re-clean covering all affected checklist points and adjacent high-risk areas",
                banglaText:
                  "B. সমস্ত প্রভাবিত চেকলিস্ট পয়েন্ট ও সংলগ্ন উচ্চ-ঝুঁকি এলাকা কভার করে পুনরায় পরিষ্কার করুন",
                isCorrect: true,
              },
              {
                text: "C. Replace the nearest beetle trap immediately",
                banglaText:
                  "A. নিকটতম বিটল ট্র্যাপ তাৎক্ষণিকভাবে প্রতিস্থাপন করুন",
                isCorrect: false,
              },
              {
                text: "D. Notify Engineering and defer action to the next planned maintenance",
                banglaText:
                  "D. ইঞ্জিনিয়ারিংকে জানান এবং পরবর্তী পরিকল্পিত রক্ষণাবেক্ষণ পর্যন্ত পদক্ষেপ স্থগিত রাখুন",
                isCorrect: false,
              },
            ],
          },
          {
            text: "When incoming leaf from Leaf Processing arrives with beetle traps and the count EXCEEDS the defined threshold, what is the correct response?",
            banglaText:
              "Leaf Processing থেকে আসা পাতায় বিটল ট্র্যাপ থাকলে এবং গণনা নির্ধারিত সীমা অতিক্রম করলে সঠিক পদক্ষেপ কী?",
            options: [
              {
                text: "A. Accept the lot and continue routine daily monitoring",
                banglaText:
                  "A. লট গ্রহণ করুন এবং নিয়মিত দৈনিক পর্যবেক্ষণ চালিয়ে যান",
                isCorrect: false,
              },
              {
                text: "B. Reject the entire shipment and return it to Leaf Processing",
                banglaText:
                  "B. পুরো শিপমেন্ট প্রত্যাখ্যান করুন এবং Leaf Processing-এ ফেরত পাঠান",
                isCorrect: false,
              },
              {
                text: "C. Segregate the affected lot and fumigate it per D.3",
                banglaText:
                  "C. সংশ্লিষ্ট লট আলাদা করুন এবং D.3 অনুযায়ী ফিউমিগেশন করুন",
                isCorrect: true,
              },
              {
                text: "D. Increase permanent trap count in the storage area for 7 days",
                banglaText:
                  "D. ৭ দিনের জন্য স্টোরেজ এলাকায় স্থায়ী ট্র্যাপ সংখ্যা বাড়ান",
                isCorrect: false,
              },
            ],
          },
          {
            text: "The trap inventory record must be updated with what frequency to ensure no monitoring gap?",
            banglaText:
              "পর্যবেক্ষণে কোনো ফাঁক না রাখতে ট্র্যাপ ইনভেন্টরি রেকর্ড কত ঘন ঘন আপডেট করতে হবে?",
            options: [
              {
                text: "A. Daily, after every counting session",
                banglaText: "A. প্রতিটি গণনা সেশনের পরে দৈনিক",
                isCorrect: false,
              },
              {
                text: "B. Monthly, when traps are replaced",
                banglaText: "B. ট্র্যাপ প্রতিস্থাপনের সময় মাসিক",
                isCorrect: false,
              },
              {
                text: "C. Weekly, with a 6-month procurement cycle",
                banglaText: "C. সাপ্তাহিক, ৬-মাসের ক্রয় চক্র সহ",
                isCorrect: true,
              },
              {
                text: "D. Bi-weekly, aligned to overhead trap counting",
                banglaText:
                  "D. ওভারহেড ট্র্যাপ গণনার সাথে সামঞ্জস্য রেখে পাক্ষিক",
                isCorrect: false,
              },
            ],
          },
          {
            text: "Which department leads the DDS (Daily Direction Setting) response for Red-zone traps?",
            banglaText:
              "লাল জোন ট্র্যাপের জন্য DDS (Daily Direction Setting) প্রতিক্রিয়ার নেতৃত্ব কোন বিভাগ দেয়?",
            options: [
              {
                text: "A. Quality and Engineering jointly",
                banglaText: "A. কোয়ালিটি ও ইঞ্জিনিয়ারিং যৌথভাবে",
                isCorrect: false,
              },
              {
                text: "B. Production and MAS",
                banglaText: "B. প্রোডাকশন ও MAS",
                isCorrect: true,
              },
              {
                text: "C. Safety and Environment team",
                banglaText: "C. নিরাপত্তা ও পরিবেশ দল",
                isCorrect: false,
              },
              {
                text: "D. Logistics and Warehouse",
                banglaText: "D. লজিস্টিক্স ও গুদাম",
                isCorrect: false,
              },
            ],
          },
        ],
      },
    ],
  };

  /* ---- State ---- */
  let currentSlide = 0;
  let currentLang = "en"; // 'en' or 'bn'
  let phase = "slides"; // 'slides' | 'quiz' | 'results'
  let quizAnswers = {};
  let quizSubmitted = false;

  const totalSlides = MODULE_DATA.slides.length;

  /* ---- DOM Refs ---- */
  const slideArea = document.getElementById("slide-area");
  const quizArea = document.getElementById("quiz-area");
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  const progressLabel = document.getElementById("progress-label");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const slideCounter = document.getElementById("slide-counter");
  const langBtns = document.querySelectorAll(".lang-btn");
  const slideMenu = document.getElementById("slide-menu");

  /* ---- Initialization ---- */
  function init() {
    ScormAPI.init();

    // Try to restore state
    const savedLoc = ScormAPI.getLocation();
    if (savedLoc) {
      const loc = parseInt(savedLoc, 10);
      if (!isNaN(loc) && loc >= 0 && loc < totalSlides) {
        currentSlide = loc;
      }
    }

    const suspendData = ScormAPI.getSuspendData();
    if (suspendData) {
      try {
        const data = JSON.parse(suspendData);
        if (data.lang) currentLang = data.lang;
        if (data.phase) phase = data.phase;
        if (data.quizAnswers) quizAnswers = data.quizAnswers;
        if (data.quizSubmitted) quizSubmitted = data.quizSubmitted;
      } catch (e) {
        /* ignore */
      }
    }

    // Set language buttons
    updateLangButtons();
    bindLangToggle();
    renderMenu();

    if (phase === "quiz") {
      showQuiz();
    } else if (phase === "results") {
      showResults();
    } else {
      renderSlide();
    }

    // Bind nav
    btnPrev.addEventListener("click", prevSlide);
    btnNext.addEventListener("click", nextSlide);

    // Handle window close
    window.addEventListener("beforeunload", () => {
      saveState();

      // Determine exit status
      const status = ScormAPI.getValue("cmi.core.lesson_status");
      if (
        status !== "passed" &&
        status !== "failed" &&
        status !== "completed"
      ) {
        ScormAPI.setExit("suspend");
      } else {
        ScormAPI.setExit("");
      }

      ScormAPI.finish();
    });
  }

  /* ---- Save State ---- */
  function saveState() {
    ScormAPI.setLocation(String(currentSlide));
    ScormAPI.setSuspendData(
      JSON.stringify({
        lang: currentLang,
        phase: phase,
        quizAnswers: quizAnswers,
        quizSubmitted: quizSubmitted,
      }),
    );
  }

  /* ---- Language ---- */
  function updateLangButtons() {
    langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
  }

  function bindLangToggle() {
    langBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentLang = btn.dataset.lang;
        updateLangButtons();
        renderMenu();
        if (phase === "slides") renderSlide();
        else if (phase === "quiz") showQuiz();
        else if (phase === "results") showResults();
        saveState();
      });
    });
  }

  /* ---- Slide Menu ---- */
  function renderMenu() {
    if (!slideMenu) return;
    slideMenu.innerHTML = "";

    // Add slide links
    MODULE_DATA.slides.forEach((slide, idx) => {
      const btn = document.createElement("button");
      btn.className = "menu-item";
      if (phase === "slides" && currentSlide === idx) {
        btn.classList.add("active");
      }
      btn.textContent =
        currentLang === "bn" && slide.banglaTitle
          ? slide.banglaTitle
          : slide.title;
      btn.addEventListener("click", () => {
        phase = "slides";
        currentSlide = idx;
        renderSlide();
      });
      slideMenu.appendChild(btn);
    });
  }

  /* ---- Slide Rendering ---- */
  function renderSlide() {
    phase = "slides";
    slideArea.style.display = "flex";
    quizArea.style.display = "none";
    slideArea.classList.remove("fadeIn");
    void slideArea.offsetWidth; // trigger reflow
    slideArea.classList.add("fadeIn");

    const slide = MODULE_DATA.slides[currentSlide];
    const title =
      currentLang === "bn" && slide.banglaTitle
        ? slide.banglaTitle
        : slide.title;
    const content =
      currentLang === "bn" && slide.banglaContent
        ? slide.banglaContent
        : slide.content;

    document.getElementById("slide-title").textContent = title;
    document.getElementById("slide-content").innerHTML = content;

    // Update progress
    const pct = Math.round(((currentSlide + 1) / totalSlides) * 100);
    progressFill.style.width = pct + "%";
    progressText.textContent = pct + "%";
    progressLabel.textContent =
      currentLang === "bn"
        ? `স্লাইড ${currentSlide + 1} / ${totalSlides}`
        : `Slide ${currentSlide + 1} of ${totalSlides}`;

    // Counter
    slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;

    // Nav buttons
    btnPrev.disabled = currentSlide === 0;
    btnPrev.innerHTML = currentLang === "bn" ? "← পূর্ববর্তী" : "← Previous";
    if (currentSlide === totalSlides - 1) {
      btnNext.innerHTML =
        currentLang === "bn" ? "কুইজ শুরু করুন →" : "Start Quiz →";
      btnNext.classList.add("primary-btn");
    } else {
      btnNext.innerHTML = currentLang === "bn" ? "পরবর্তী →" : "Next →";
      btnNext.classList.remove("primary-btn");
    }
    btnNext.disabled = false;

    // Bind options-list interactive buttons
    bindScenarioButtons();

    ScormAPI.setStatus("incomplete");
    saveState();
    renderMenu();
  }

  function bindScenarioButtons() {
    const optBtns = slideArea.querySelectorAll(".option-btn");
    optBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // disable all
        const siblings =
          this.closest(".options-list").querySelectorAll(".option-btn");
        siblings.forEach((b) => {
          b.disabled = true;
          b.classList.remove("correct", "incorrect");
        });

        const isCorrect = this.dataset.correct === "true";
        this.classList.add(isCorrect ? "correct" : "incorrect");

        // Find feedback div
        const feedbackId = this.closest(".options-list").id.replace(
          "-options",
          "-feedback",
        );
        const feedbackDiv = document.getElementById(feedbackId);
        if (feedbackDiv) {
          feedbackDiv.textContent = isCorrect
            ? this.dataset.smsg
            : this.dataset.emsg;
          feedbackDiv.className =
            "feedback-msg show " + (isCorrect ? "success" : "error");
        }
      });
    });
  }

  /* ---- Navigation ---- */
  function nextSlide() {
    if (phase === "slides") {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        renderSlide();
      } else {
        showQuiz();
      }
    }
  }

  function prevSlide() {
    if (phase === "slides" && currentSlide > 0) {
      currentSlide--;
      renderSlide();
    } else if (phase === "quiz") {
      currentSlide = totalSlides - 1;
      phase = "slides";
      renderSlide();
    }
  }

  /* ---- Quiz ---- */
  function showQuiz() {
    phase = "quiz";
    slideArea.style.display = "none";
    quizArea.style.display = "block";

    const quiz = MODULE_DATA.quizzes[0];

    // Progress
    progressFill.style.width = "100%";
    progressText.textContent = "100%";
    progressLabel.textContent =
      currentLang === "bn" ? "কুইজ" : "Knowledge Check";
    slideCounter.textContent = currentLang === "bn" ? "কুইজ" : "Quiz";

    btnPrev.disabled = false;
    btnPrev.innerHTML =
      currentLang === "bn" ? "← স্লাইডে ফিরুন" : "← Back to Slides";
    btnNext.disabled = true;
    btnNext.innerHTML = "";
    btnNext.classList.remove("primary-btn");

    let html = `
      <div class="quiz-header">
        <h2>${currentLang === "bn" ? "জ্ঞান যাচাই" : quiz.title}</h2>
        <p class="quiz-subtitle">${
          currentLang === "bn"
            ? `পাস করার জন্য ${MODULE_DATA.passingScore}% প্রয়োজন`
            : `You need ${MODULE_DATA.passingScore}% to pass`
        }</p>
      </div>
    `;

    quiz.questions.forEach((q, qi) => {
      const qText =
        currentLang === "bn" && q.banglaText ? q.banglaText : q.text;
      html += `<div class="quiz-question-card">
        <div class="question-number">${
          currentLang === "bn" ? `প্রশ্ন ${qi + 1}` : `Question ${qi + 1}`
        }</div>
        <div class="question-text">${qText}</div>
        <ul class="quiz-options">`;

      q.options.forEach((opt, oi) => {
        const oText =
          currentLang === "bn" && opt.banglaText ? opt.banglaText : opt.text;
        const selected = quizAnswers[qi] === oi ? "selected" : "";
        const disabled = quizSubmitted ? "disabled" : "";

        let extraClass = "";
        if (quizSubmitted && quizAnswers[qi] === oi) {
          if (opt.isCorrect) extraClass = "correct-answer";
          else extraClass = "wrong-answer";
        }

        html += `<li><button type="button" class="quiz-option-btn ${selected} ${extraClass}" ${disabled}
          data-qi="${qi}" data-oi="${oi}">${oText}</button></li>`;
      });

      html += `</ul></div>`;
    });

    if (!quizSubmitted) {
      html += `<div class="quiz-submit-area">
        <button type="button" class="nav-btn primary-btn" id="btn-submit-quiz">${
          currentLang === "bn" ? "জমা দিন" : "Submit Quiz"
        }</button>
      </div>`;
    } else {
      html += `<div class="quiz-submit-area">
        <button type="button" class="nav-btn primary-btn" id="btn-retake-quiz-review">${
          currentLang === "bn" ? "আবার চেষ্টা করুন" : "Retake Quiz"
        }</button>
      </div>`;
    }

    quizArea.innerHTML = html;

    // Bind quiz option clicks
    if (!quizSubmitted) {
      quizArea.querySelectorAll(".quiz-option-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const qi = parseInt(this.dataset.qi);
          const oi = parseInt(this.dataset.oi);
          quizAnswers[qi] = oi;
          // Update selection visuals
          const card = this.closest(".quiz-question-card");
          card
            .querySelectorAll(".quiz-option-btn")
            .forEach((b) => b.classList.remove("selected"));
          this.classList.add("selected");
          saveState();
        });
      });

      const submitBtn = document.getElementById("btn-submit-quiz");
      if (submitBtn) {
        submitBtn.addEventListener("click", submitQuiz);
      }
    } else {
      const retakeBtn = document.getElementById("btn-retake-quiz-review");
      if (retakeBtn) {
        retakeBtn.addEventListener("click", retakeQuiz);
      }
    }

    saveState();
    renderMenu();
  }

  function submitQuiz() {
    const quiz = MODULE_DATA.quizzes[0];
    const totalQs = quiz.questions.length;

    // Ensure all questions answered
    const answered = Object.keys(quizAnswers).length;
    if (answered < totalQs) {
      alert(
        currentLang === "bn"
          ? "অনুগ্রহ করে সকল প্রশ্নের উত্তর দিন।"
          : "Please answer all questions before submitting.",
      );
      return;
    }

    quizSubmitted = true;

    // Calculate score
    let correct = 0;
    quiz.questions.forEach((q, qi) => {
      const selectedIdx = quizAnswers[qi];
      if (selectedIdx !== undefined && q.options[selectedIdx].isCorrect) {
        correct++;
      }
    });

    const score = Math.round((correct / totalQs) * 100);
    ScormAPI.complete(score, MODULE_DATA.passingScore);
    saveState();
    showResults(score, correct, totalQs);
  }

  function showResults(score, correct, total) {
    phase = "results";
    slideArea.style.display = "none";
    quizArea.style.display = "block";

    // Recalculate if not provided
    if (score === undefined) {
      const quiz = MODULE_DATA.quizzes[0];
      total = quiz.questions.length;
      correct = 0;
      quiz.questions.forEach((q, qi) => {
        const sel = quizAnswers[qi];
        if (sel !== undefined && q.options[sel].isCorrect) correct++;
      });
      score = Math.round((correct / total) * 100);
    }

    const passed = score >= MODULE_DATA.passingScore;

    progressLabel.textContent = currentLang === "bn" ? "ফলাফল" : "Results";
    slideCounter.textContent = currentLang === "bn" ? "ফলাফল" : "Results";

    btnPrev.disabled = false;
    btnPrev.innerHTML = currentLang === "bn" ? "← কুইজ দেখুন" : "← Review Quiz";
    btnNext.disabled = true;
    btnNext.innerHTML = "";
    btnPrev.onclick = () => {
      quizSubmitted = true;
      showQuiz();
      btnPrev.onclick = prevSlide;
    };

    quizArea.innerHTML = `
      <div class="results-card">
        <div class="score-circle ${passed ? "passed" : "failed"}">
          ${score}%
          <span>${currentLang === "bn" ? "স্কোর" : "Score"}</span>
        </div>
        <h2>${
          passed
            ? currentLang === "bn"
              ? "🎉 অভিনন্দন! আপনি পাস করেছেন!"
              : "🎉 Congratulations! You Passed!"
            : currentLang === "bn"
              ? "❌ দুঃখিত, আপনি পাস করতে পারেননি।"
              : "❌ Sorry, You Did Not Pass."
        }</h2>
        <p class="result-status">
          ${
            currentLang === "bn"
              ? `আপনি ${total} টি প্রশ্নের মধ্যে ${correct} টি সঠিক উত্তর দিয়েছেন। পাসের জন্য ${MODULE_DATA.passingScore}% প্রয়োজন ছিল।`
              : `You answered ${correct} out of ${total} questions correctly. Passing score was ${MODULE_DATA.passingScore}%.`
          }
        </p>
        <div class="results-actions">
          <button type="button" class="nav-btn primary-btn" id="btn-retake-quiz">
            ${currentLang === "bn" ? "আবার চেষ্টা করুন" : "Retake Quiz"}
          </button>
        </div>
      </div>
    `;

    const retakeBtn = document.getElementById("btn-retake-quiz");
    if (retakeBtn) {
      retakeBtn.addEventListener("click", retakeQuiz);
    }

    saveState();
    renderMenu();
  }

  function retakeQuiz() {
    quizAnswers = {};
    quizSubmitted = false;
    phase = "quiz";
    currentSlide = MODULE_DATA.slides.length - 1;
    saveState();
    showQuiz();
  }

  /* ---- Bootstrap ---- */
  document.addEventListener("DOMContentLoaded", init);
})();
