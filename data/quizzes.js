/**
 * IICI Activities — Quiz Definitions
 * Each quiz has: title, and an array of questions with bilingual text and options.
 * Edit quiz questions here without touching the application logic.
 */
window.MODULE_QUIZZES = [
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
];
