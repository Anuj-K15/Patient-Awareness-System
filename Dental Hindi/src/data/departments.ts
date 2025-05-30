import { Bluetooth as Tooth, Baby, Smile, Syringe, Microscope, Brain, Bone, Timer } from 'lucide-react';

export interface Service {
  name: string;
  price: number;
  // description: string;
  
}

export interface Department {
  id: string;
  name: string;
  
  description: string;
  longDescription?: string;
  services: Service[];
}

export const departments: Department[] = [
  {
    "id": "Oral-Medicine-&-Radiology",
    "name": "मुख चिकित्सा एवं रेडियोलॉजी",
    "description": "मुख चिकित्सा एवं रेडियोलॉजी दंत चिकित्सा की एक विशिष्ट शाखा है जो मौखिक और मैक्सिलोफेशियल क्षेत्र को प्रभावित करने वाले रोगों के निदान और चिकित्सा प्रबंधन पर केंद्रित है।",
    "longDescription": "मुख चिकित्सा एवं रेडियोलॉजी दंत चिकित्सा की एक विशिष्ट शाखा है जो मौखिक और मैक्सिलोफेशियल क्षेत्र को प्रभावित करने वाले रोगों के निदान, चिकित्सा प्रबंधन और रेडियोग्राफिक मूल्यांकन पर केंद्रित है। यह विशेषता दंत चिकित्सा और चिकित्सा के बीच की खाई को पाटती है, प्रणालीगत रोगों, पूर्व-कैंसर की स्थिति, ओरोफेशियल दर्द सिंड्रोम और टेम्पोरोमैंडिबुलर संयुक्त (टीएमजे) विकारों की मौखिक अभिव्यक्तियों को संबोधित करती है।",
    "services": [
      {
        "name": "केस पेपर",
        "price": 10
      },
      {
        "name": "आईओपीए रेडियोग्राफ",
        "price": 50
      },
      {
        "name": "बाइटविंग एक्स-रे",
        "price": 50
      },
      {
        "name": "बच्चों का आईओपीए",  // More natural: "Bachchon ka IOPA"
        "price": 50
      },
      {
        "name": "ओपीजी प्रिंट",
        "price": 300
      },
      {
        "name": "लेटरल सिफेलोग्राम प्रिंट",
        "price": 300
      },
      {
        "name": "बच्चों का आईओपीए", // More natural: "Bachchon ka IOPA"
        "price": 50
      },
      {
        "name": "ओक्लूजल एक्स-रे",
        "price": 150
      },
      {
        "name": "जबड़े का जोड़ (टीएमजे) व्यू पॉइंट", // More natural: "Jabde ka jod (TMJ) View Point"
        "price": 300
      },
      {
        "name": "खोपड़ी/सिर का एक्स-रे प्रिंट", // More natural: "Khopdi/Sir ka X-ray Print"
        "price": 300
      },
      {
        "name": "डिजिटल रेडियोग्राफ सीडी",
        "price": 150
      },
      {
        "name": "डिजिटल रेडियोग्राफ सीडी और प्रिंट",
        "price": 350
      },
      {
        "name": "आरवीजी",
        "price": 50
      },
      {
        "name": "टेन्स थेरेपी",
        "price": 50
      },
      {
        "name": "इंट्रालेसियोनल इंजेक्शन",
        "price": 50
      },
      {
        "name": "सीबीसीटी फुल माउथ विथ टीएमजे/एयरवे",
        "price": 2000
      },
      {
        "name": "सीबीसीटी दोनों जबड़े", // More natural: "Donon Jabde"
        "price": 1700
      },
      {
        "name": "सीबीसीटी एक जबड़ा", // More natural: "Ek Jabda"
        "price": 1000
      },
      {
        "name": "सीबीसीटी क्वाड्रेंट", // More natural: "Ek Jabda"
        "price": 600
      },
      {
        "name": "चेहरा स्कैन",
        "price": 300
      }
    ]
  },
  {
    "id": "pediatric-dentistry-preventive-dentistry",
    "name": "बाल चिकित्सा दंत चिकित्सा और निवारक दंत चिकित्सा",
    "description": "बाल चिकित्सा दंत चिकित्सा और निवारक दंत चिकित्सा दंत चिकित्सा की एक विशिष्ट शाखा है जो शिशुओं, बच्चों और किशोरों की मौखिक स्वास्थ्य देखभाल पर केंद्रित है, जिनमें विशेष स्वास्थ्य देखभाल की ज़रूरत वाले लोग भी शामिल हैं।",
    "longDescription": "बाल चिकित्सा दंत चिकित्सा और निवारक दंत चिकित्सा दंत चिकित्सा की एक विशिष्ट शाखा है जो शिशुओं, बच्चों और किशोरों की मौखिक स्वास्थ्य देखभाल के लिए समर्पित है, जिनमें विशेष स्वास्थ्य देखभाल की ज़रूरत वाले लोग भी शामिल हैं। यह क्षेत्र बच्चों में दंत समस्याओं की रोकथाम, निदान और उपचार पर केंद्रित है, जिससे शैशवावस्था से लेकर किशोरावस्था तक उनकी समग्र मौखिक स्वास्थ्य सुनिश्चित होती है।",
    "services": [
      {
        "name": "रूट कैनाल उपचार - अगला दाँत", // "अग्र" is a bit formal, "अगला" is more common
        "price": 300
      },
      {
        "name": "रूट कैनाल उपचार - पिछला दाँत", // "पश्च" is a bit formal, "पिछला" is more common
        "price": 400
      },
      {
        "name": "पल्पेक्टोमी",
        "price": 150
      },
      {
        "name": "स्टेनलेस स्टील क्राउन - दूध का दाँत", // "प्राथमिक" is too technical, "दूध का दाँत" is clearer
        "price": 150
      },
      {
        "name": "स्टेनलेस स्टील क्राउन - स्थायी दाँत", // "स्थायी" is fine
        "price": 200
      },
      {
        "name": "पल्पोटॉमी - दूध का दाँत", // Again, "दूध का दाँत" is better
        "price": 150
      },
      {
        "name": "पल्पोटॉमी - स्थायी दाँत",
        "price": 200
      },
      {
        "name": "अप्रत्यक्ष पल्प कैपिंग - सीए(ओएच)", // This is fine, as abbreviations are common
        "price": 50
      },
      {
        "name": "अप्रत्यक्ष पल्प कैपिंग - एमटीए",
        "price": 1000
      },
      {
        "name": "ग्लास आयनोमर सीमेंट",
        "price": 50
      },
      {
        "name": "राल संशोधित जीआईसी",
        "price": 100
      },
      {
        "name": "समग्र बहाली", // "समग्र" is okay, it's a commonly understood term
        "price": 150
      },
      {
        "name": "स्ट्रिप क्राउन कम्पोजिट",
        "price": 200
      },
      {
        "name": "एक्रिलिक अस्थायी क्राउन",
        "price": 150
      },
      {
        "name": "पिट और फिशर सीलेंट / पीआरआर - जीआईसी", // Abbreviations are okay here
        "price": 50
      },
      {
        "name": "पिट और फिशर सीलेंट / पीआरआर - आरएमजीआईसी / राल", // Abbreviations are okay here
        "price": 1000
      },
      {
        "name": "मौखिक प्रोफिलैक्सिस + फ्लोराइड एप्लीकेशन जेल",
        "price": 50
      },
      {
        "name": "मौखिक प्रोफिलैक्सिस + फ्लोराइड एप्लीकेशन वार्निश",
        "price": 150
      },
      {
        "name": "निष्कर्षण - दूध का दाँत", // Again, "दूध का दाँत" is better
        "price": 50
      },
      {
        "name": "निष्कर्षण - स्थायी दाँत",
        "price": 100
      },
      {
        "name": "इंट्रा ओरल पेरियापिकल रेडियोग्राफ",
        "price": 100
      },
      {
        "name": "स्पेस मेनटेनर - एक तरफ", // "एकतरफा" is a bit formal, "एक तरफ" is more common
        "price": 150
      },
      {
        "name": "स्पेस मेनटेनर - दोनों तरफ", // "द्विपक्षीय" is too technical, "दोनों तरफ" is clearer
        "price": 250
      },
      {
        "name": "आदत तोड़ने वाला उपकरण",
        "price": 300
      },
      {
        "name": "हटाने योग्य आंशिक डेन्चर",
        "price": 300
      },
      {
        "name": "सर्जिकल निष्कर्षण",
        "price": 200
      },
      {
        "name": "पोस्ट और कोर भरने के साथ",
        "price": 300
      },
      {
        "name": "स्प्लिनलिंग",
        "price": 300
      },
      {
        "name": "माइनर सर्जिकल प्रक्रिया बिना लेजर के",
        "price": 300
      },
      {
        "name": "लेजर के साथ माइनर सर्जिकल प्रक्रिया",
        "price": 1000
      },
      {
        "name": "माइनर ऑर्थोडोंटिक प्रक्रिया हटाने योग्य",
        "price": 300
      },
      {
        "name": "माइनर ऑर्थोडोंटिक प्रक्रिया फिक्स्ड",
        "price": 500
      },
      {
        "name": "एमटीए से जुड़ी प्रक्रिया",
        "price": 150
      },
      {
        "name": "आपातकालीन पहुंच खोलना",
        "price": 150
      },
      {
        "name": "2x4 उपकरण",
        "price": 1000
      },
      {
        "name": "ओरल स्क्रीन",
        "price": 3500
      },
      {
        "name": "ट्विन ब्लॉक",
        "price": 3500
      },
      {
        "name": "मायोफंक्शन उपकरण",
        "price": 3500
      },
      {
        "name": "एसडीएफ (प्रति विज़िट)",
        "price": 150
      },
      {
        "name": "ज़िरकोनिया क्राउन",
        "price": 1500
      }
    ]
  },
  {
    "id": "conservative-dentistry-endodontics",
    "name": "संरक्षी दंत चिकित्सा और एंडोडॉन्टिक्स",
    "description": "संरक्षी दंत चिकित्सा और एंडोडॉन्टिक्स दंत चिकित्सा की एक विशिष्ट शाखा है जो दंत क्षय, क्षतिग्रस्त दांतों और दंत पल्प और पेरियापिकल ऊतकों के रोगों के निदान, रोकथाम और उपचार पर केंद्रित है।",
    "longDescription": "संरक्षी दंत चिकित्सा और एंडोडॉन्टिक्स दंत चिकित्सा की एक विशिष्ट शाखा है जो दंत क्षय, संरचनात्मक दांतों की क्षति और पल्प और पेरियापिकल ऊतकों को प्रभावित करने वाले रोगों के निदान, रोकथाम और उपचार के लिए समर्पित है। इस क्षेत्र का प्राथमिक ध्यान प्राकृतिक दांतों को संरक्षित करना, उनके कार्य और सौंदर्यशास्त्र को बहाल करना और उन्नत दंत तकनीकों का उपयोग करके और गिरावट को रोकना है।",
    "services": [
      {
        "name": "अस्थायी भराई", // Common term
        "price": 50
      },
      {
        "name": "सिल्वर अमलगम (कक्षा I)", // Okay as is
        "price": 150
      },
      {
        "name": "सिल्वर अमलगम (कक्षा II)", // Okay as is
        "price": 150
      },
      {
        "name": "सिल्वर अमलगम (एमओडी)", // Okay as is
        "price": 150
      },
      {
        "name": "जीआईएस बहाली (कक्षा I)", // Okay as is
        "price": 150
      },
      {
        "name": "जीआईएस बहाली (कक्षा II)", // Okay as is
        "price": 150
      },
      {
        "name": "जीआईएस बहाली (कक्षा III)", // Okay as is
        "price": 150
      },
      {
        "name": "मिरेकल मिक्स (कक्षा I)", // Okay as is
        "price": 150
      },
      {
        "name": "मिरेकल मिक्स (कक्षा II)", // Okay as is
        "price": 150
      },
      {
        "name": "मिरेकल मिक्स (कक्षा V)", // Okay as is
        "price": 150
      },
      {
        "name": "मिरेकल मिक्स (एमओडी)", // Okay as is
        "price": 150
      },
      {
        "name": "कम्पोजिट (कक्षा I)", // Okay as is
        "price": 250
      },
      {
        "name": "कम्पोजिट (कक्षा II)", // Okay as is
        "price": 250
      },
      {
        "name": "कम्पोजिट (कक्षा V)", // Okay as is
        "price": 150
      },
      {
        "name": "कम्पोजिट (एमओडी)", // Okay as is
        "price": 250
      },
      {
        "name": "प्रत्यक्ष/अप्रत्यक्ष पल्प कैपिंग (भराई को छोड़कर)", // "भरने को छोड़कर" is more natural than "filling ko chhodkar"
        "price": 500
      },
      {
        "name": "पोस्ट और कोर (भराई को छोड़कर)", // "भराई को छोड़कर" is more natural
        "price": 500
      },
      {
        "name": "दाँत का विरंजन", // "विरंजन" is okay, but "दाँत का विरंजन" is more explicit
        "price": 1800
      },
      {
        "name": "रूट कैनाल उपचार (भराई को छोड़कर)", // "भराई को छोड़कर" is more natural
        "price": 600
      },
      {
        "name": "प्रत्यक्ष/अप्रत्यक्ष पल्प कैपिंग (भराई को छोड़कर)", // "भराई को छोड़कर" is more natural
        "price": 500
      },
      {
        "name": "री-रूट कैनाल उपचार (भराई को छोड़कर)", // "भराई को छोड़कर" is more natural
        "price": 750
      },
      {
        "name": "एंडोडोंटिक सर्जरी (भराई को छोड़कर)", // "भराई को छोड़कर" is more natural
        "price": 20000
      },
      {
        "name": "स्प्लिंटिंग", // Okay as is
        "price": 2000
      },
      {
        "name": "लिबास (कम्पोजिट)", // Okay as is
        "price": 500
      },
      {
        "name": "लिबास (सिरेमिक)", // Okay as is
        "price": 2500
      },
      {
        "name": "इन्ले (धातु)", // Okay as is
        "price": 250
      },
      {
        "name": "इन्ले (सिरेमिक)", // Okay as is
        "price": 2500
      },
      {
        "name": "ऑनले (धातु)", // Okay as is
        "price": 500
      },
      {
        "name": "ऑनले (सिरेमिक)", // Okay as is
        "price": 3500
      },
      {
        "name": "एंडोक्राउन", // Okay as is
        "price": 3500
      },
      {
        "name": "पीएफएम क्राउन", // Okay as is
        "price": 1200
      },
      {
        "name": "आरवीजी", // Okay as is
        "price": 50
      },
      {
        "name": "क्राउन लंबा करना (प्रति दांत)", // Okay as is
        "price": 400
      }
    ]
  },
  {
    "id": "department-of-oral-and-maxillofacial-surgery",
    "name": "मौखिक और मैक्सिलोफेशियल सर्जरी",
    "description": "मौखिक और मैक्सिलोफेशियल सर्जरी (ओएमएफएस) दंत चिकित्सा की एक विशिष्ट शाखा है जो मुंह, जबड़े, चेहरे और गर्दन को प्रभावित करने वाले रोगों, चोटों और दोषों के निदान, शल्य चिकित्सा उपचार और प्रबंधन पर केंद्रित है।",
    "longDescription": "मौखिक और मैक्सिलोफेशियल सर्जरी (ओएमएफएस) दंत चिकित्सा की एक विशिष्ट शाखा है जो मुंह, जबड़े, चेहरे और खोपड़ी को प्रभावित करने वाले रोगों, चोटों और दोषों के शल्य चिकित्सा निदान और उपचार पर केंद्रित है। यह क्षेत्र जटिल मौखिक स्वास्थ्य स्थितियों का प्रबंधन करने, कार्य को बहाल करने और सौंदर्यशास्त्र में सुधार करने के लिए दंत चिकित्सा, चिकित्सा और शल्य चिकित्सा विशेषज्ञता को जोड़ता है।",
    "services": [
      {
        "name": "सरल निष्कर्षण (दांत)", // Okay
        "price": 150
      },
      {
        "name": "रूट कैनाल उपचारित दांत का निष्कर्षण", // Okay
        "price": 500
      },
      {
        "name": "तीसरा दाढ़ निष्कर्षण (गैर शल्य चिकित्सा)", // Okay
        "price": 500
      },
      {
        "name": "तीसरा दाढ़ निष्कर्षण (शल्य चिकित्सा)", // Okay
        "price": 1000
      },
      {
        "name": "ऑर्थो निष्कर्षण", // Okay
        "price": 250
      },
      {
        "name": "एल्वोलोप्लास्टी (चतुर्थांश)", // Okay
        "price": 500
      },
      {
        "name": "इंसीजनल बायोप्सी", // Okay
        "price": 500
      },
      {
        "name": "एक्सिसनल बायोप्सी", // Okay
        "price": 1000
      },
      {
        "name": "एपिकोएक्टोमी (सामग्री लागत)", // Okay
        "price": 1000
      },
      {
        "name": "कैनाइन एक्सपोजर", // Okay
        "price": 1000
      },
      {
        "name": "पुटी एन्यूक्लिएशन", // Okay
        "price": 1500
      },
      {
        "name": "इम्प्लांट (प्लेसमेंट) (बायोलाइन/एडिन)", // Okay
        "price": 5000
      },
      {
        "name": "इम्प्लांट (प्लेसमेंट) (बायोहोरिजन)", // Okay
        "price": 10000
      },
      {
        "name": "साइनस लिफ्ट (प्रत्यक्ष)", // Okay
        "price": 3500
      },
      {
        "name": "इम्प्लांट क्राउन", // Okay
        "price": 3000
      },
      {
        "name": "बंद कमी (आईएमएफ)", // Okay
        "price": 5000
      },
      {
        "name": "प्रमुख सर्जरी", // Okay
        "price": 7500
      }
    ]
  },
  {
    "id": "department-of-prosthodontics-crown-and-bridge",
    "name": "प्रोस्थोडोंटिक्स क्राउन और ब्रिज",
    "description": "प्रोस्थोडोंटिक्स दंत चिकित्सा की एक विशिष्ट शाखा है जो मौखिक कार्य, सौंदर्यशास्त्र और समग्र दंत स्वास्थ्य को बेहतर बनाने के लिए लापता या क्षतिग्रस्त दांतों की बहाली और प्रतिस्थापन पर केंद्रित है।",
    "longDescription": "प्रोस्थोडोंटिक्स दंत चिकित्सा की एक विशिष्ट शाखा है जो मौखिक कार्य, सौंदर्यशास्त्र और समग्र स्वास्थ्य को बढ़ाने के लिए लापता या क्षतिग्रस्त दांतों की बहाली और प्रतिस्थापन पर केंद्रित है। प्रोस्थोडोंटिक्स के भीतर, मुकुट और पुल सड़े हुए, टूटे हुए या लापता दांतों को बहाल करने में महत्वपूर्ण भूमिका निभाते हैं, जबकि काटने के प्राकृतिक संरेखण और कार्य को बनाए रखते हैं।",
    "services": [
      {
        "name": "पूरा डेन्चर (प्रति आर्क)", // Okay
        "price": 250
      },
      {
        "name": "डेन्चर मरम्मत (प्रति आर्क)", // Okay
        "price": 100
      },
      {
        "name": "डेन्चर की रीलाइनिंग/रिबेसिंग (प्रति आर्क)", // Okay
        "price": 200
      },
      {
        "name": "एक्रिलिक हटाने योग्य आंशिक डेन्चर (प्रति आर्क)", // Okay
        "price": 200
      },
      {
        "name": "रिबेसिंग / रीलाइनिंग (प्रति आर्क)", // Okay
        "price": 200
      },
      {
        "name": "बेहतर गुणवत्ता वाला डेन्चर", // Okay
        "price": 2000
      },
      {
        "name": "कास्ट आंशिक डेन्चर (प्रति आर्क)", // Okay
        "price": 12000
      },
      {
        "name": "फ्लेक्सिबल डेन्चर (प्रति आर्क)", // Okay
        "price": 4500
      },
      {
        "name": "सॉफ्ट लाइनर - रीलाइनिंग (प्रति आर्क)", // Okay
        "price": 500
      },
      {
        "name": "धातु मुकुट (प्रति यूनिट)", // Okay
        "price": 1000
      },
      {
        "name": "पीएफएम क्राउन (प्रति यूनिट)", // Okay
        "price": 1200
      },
      {
        "name": "सभी सिरेमिक क्राउन (प्रति यूनिट)", // Okay
        "price": 3500
      },
      {
        "name": "अस्थायी मुकुट (एक्रिलिक) (प्रति यूनिट)", // Okay
        "price": 100
      },
      {
        "name": "कैड/कैम अस्थायी मुकुट (प्रति यूनिट)", // Okay
        "price": 500
      },
      {
        "name": "वैक्स मॉक अप (प्रति यूनिट)", // Okay
        "price": 200
      },
      {
        "name": "क्राउन निष्कासन (प्रति यूनिट)", // Okay
        "price": 150
      },
      {
        "name": "कास्ट पोस्ट और कोर (प्रति पोस्ट)", // Okay
        "price": 500
      },
      {
        "name": "फाइबर पोस्ट और कोर (प्रति पोस्ट)", // Okay
        "price": 500
      },
      {
        "name": "पूर्व निर्मित धातु पोस्ट और कोर (प्रति पोस्ट)", // Okay
        "price": 500
      },
      {
        "name": "रीसेमेंटेशन (प्रति यूनिट)", // Okay
        "price": 150
      }
    ]
  },
  {
    "id": "department-of-orthodontics",
    "name": "ऑर्थोडॉन्टिक्स विभाग",
    "description": "ऑर्थोडॉन्टिक्स दंत चिकित्सा की एक विशिष्ट शाखा है जो गलत संरेखित दांतों और जबड़ों के निदान, रोकथाम और सुधार पर केंद्रित है।",
    "longDescription": "ऑर्थोडॉन्टिक्स विभाग दंत और चेहरे की अनियमितताओं, जिनमें मैलोक्लूज़न (गलत संरेखित काटने), भीड़भाड़ वाले या अलग-अलग दांत और जबड़े की विसंगतियां शामिल हैं, के निदान, रोकथाम और उपचार में माहिर है। दंत चिकित्सा की यह शाखा दंत कार्य, वाक् स्पष्टता और सौंदर्यशास्त्र में सुधार करने के साथ-साथ रोगी के समग्र मौखिक स्वास्थ्य को बढ़ाने में महत्वपूर्ण भूमिका निभाती है।",
    "services": [
      {
        "name": "फिक्स्ड ट्रीटमेंट बेग",
        "price": 4500
      },
      {
        "name": "फिक्स्ड ट्रीटमेंट पीईए",
        "price": 7000
      },
      {
        "name": "नाइट गार्ड उपकरण",
        "price": 1500
      },
      {
        "name": "सीएलसीपी के लिए फीडिंग उपकरण",
        "price": 2000
      },
      {
        "name": "मायोफंक्शनल उपकरण",
        "price": 3500
      },
      {
        "name": "मरम्मत",
        "price": 600
      },
      {
        "name": "एसिक्स रिटेनर (प्रति आर्क)",
        "price": 1200
      },
      {
        "name": "हॉलीज़ रिटेनर (प्रति आर्क)",
        "price": 1000
      },
      {
        "name": "हेडगियर/चिनकप/फेसमास्क",
        "price": 3500
      },
      {
        "name": "फिक्स्ड अप्लायंस ट्रीटमेंट (सिरेमिक)",
        "price": 14000
      },
      {
        "name": "लिंगुअल बिना सेटअप के",
        "price": 15000
      },
      {
        "name": "सेटअप के साथ लिंगुअल",
        "price": 1500
      },
      {
        "name": "सेल्फ लिगेटिंग मेटल",
        "price": 20000
      },
      {
        "name": "सेल्फ लिगेटिंग सिरेमिक",
        "price": 30000
      },
      {
        "name": "माइक्रोइम्प्लांट (प्रत्येक)",
        "price": 2000
      },
      {
        "name": "फोर्सस",
        "price": 7500
      },
      {
        "name": "हैरेक्स/आरपीई",
        "price": 3500
      },
      {
        "name": "क्लियर एलाइनर (लैब चार्जिंग)",
        "price": 7000
      },
      {
        "name": "ब्रेकेजेस (बेग - ब्रैकेट)",
        "price": 200
      },
      {
        "name": "ब्रेकेजेस (पीईए)",
        "price": 300
      },
      {
        "name": "ब्रेकेजेस (सेल्फ लिगेटिंग मेटल)",
        "price": 500
      },
      {
        "name": "ब्रेकेजेस (सिरेमिक)",
        "price": 500
      },
      {
        "name": "ब्रेकेजेस (सेल्फ लिगेटिंग सिरेमिक)",
        "price": 1000
      },
      {
        "name": "ब्रेकेजेस (लिंगुअल)",
        "price": 1000
      }
    ]
  },
  {
    "id": "department-of-prosthodontics-crown-and-bridge",
    "name": "प्रोस्थोडोंटिक्स क्राउन और ब्रिज",
    "description": "प्रोस्थोडोंटिक्स दंत चिकित्सा की एक विशिष्ट शाखा है जो लापता या अपर्याप्त दांतों और मौखिक ऊतकों वाले रोगियों के लिए मौखिक कार्य, आराम और सौंदर्यशास्त्र के निदान, उपचार योजना, पुनर्वास और रखरखाव पर केंद्रित है।",
    "longDescription": "इनमें से, मुकुट और पुल आमतौर पर इस्तेमाल किए जाने वाले फिक्स्ड डेंटल रेस्टोरेशन हैं जो चबाने की क्षमता, भाषण और मुस्कान सौंदर्यशास्त्र को बढ़ाने के लिए डिज़ाइन किए गए हैं, जबकि आगे दंत क्षय को रोकते हैं।",
    "services": [
      {
        "name": "टीएमजे स्प्लिंट (हार्ड स्प्लिंट)",
        "price": 1500
      },
      {
        "name": "टीएमजे स्प्लिंट (सॉफ्ट स्प्लिंट)",
        "price": 800
      },
      {
        "name": "मैक्सिलोफेशियल प्रोस्थेसिस (प्रति केस)",
        "price": 1000
      },
      {
        "name": "एडिन / बायोलाइन इम्प्लांट (प्रति इम्प्लांट)",
        "price": 5000
      },
      {
        "name": "बायोहोरिजन इम्प्लांट (प्रति इम्प्लांट)",
        "price": 10000
      },
      {
        "name": "इम्प्लांट क्राउन (प्रति यूनिट) (पीएफएम)",
        "price": 3000
      },
      {
        "name": "इम्प्लांट क्राउन (प्रति यूनिट) (सिरेमिक)",
        "price": 4500
      },
      {
        "name": "स्क्रू रिटेन्ड क्राउन (प्रति यूनिट) (पीएफएम)",
        "price": 5000
      },
      {
        "name": "स्क्रू रिटेन्ड क्राउन (प्रति यूनिट) (सिरेमिक)",
        "price": 6000
      },
      {
        "name": "ऑल-ऑन-4/6 प्रोस्थेसिस (प्रति आर्क) (पारंपरिक एबटमेंट्स के साथ)",
        "price": 60000
      },
      {
        "name": "ऑल-ऑन-4/6 प्रोस्थेसिस (प्रति आर्क) (मल्टी-यूनिट एबटमेंट्स के साथ)",
        "price": 100000
      }
    ]
  },
  {
    "id": "department-of-oral-pathology-and-microbiology",
    "name": "मौखिक विकृति विज्ञान और माइक्रोबायोलॉजी",
    "description": "मौखिक विकृति विज्ञान और माइक्रोबायोलॉजी दंत चिकित्सा की एक विशिष्ट शाखा है जो मौखिक और मैक्सिलोफेशियल क्षेत्रों को प्रभावित करने वाले रोगों के निदान, अध्ययन और प्रबंधन पर केंद्रित है।",
    "longDescription": "मौखिक विकृति विज्ञान और माइक्रोबायोलॉजी दंत चिकित्सा की एक विशिष्ट शाखा है जो मौखिक और मैक्सिलोफेशियल क्षेत्रों को प्रभावित करने वाले रोगों के अध्ययन, निदान और समझने के लिए समर्पित है। यह मौखिक गुहा में प्रकट होने वाले संक्रमणों, ट्यूमर, ऑटोइम्यून बीमारियों और प्रणालीगत स्थितियों की पहचान करने में महत्वपूर्ण भूमिका निभाता है। यह क्षेत्र सटीक रोग पहचान और प्रभावी उपचार योजना सुनिश्चित करने के लिए हिस्टोपैथोलॉजी, माइक्रोबायोलॉजी और आणविक निदान को एकीकृत करता है।",
    "services": [
      {
        "name": "हिस्टोपैथोलॉजी रिपोर्ट",
        "price": 250
      },
      {
        "name": "एक्सफोलिएटिव साइटोलॉजी",
        "price": 30
      },
      {
        "name": "एफएनएसी",
        "price": 100
      },
      {
        "name": "कम्पलीट ब्लड काउंट (सीबीसी)",
        "price": 70
      },
      {
        "name": "रैंडम ब्लड शुगर (आरबीएस)",
        "price": 50
      },
      {
        "name": "ब्लीडिंग टाइम, क्लॉटिंग टाइम",
        "price": 50
      }
    ]
  },
  {
    "id": "department-of-periodontology",
    "name": "पीरियडोंटोलॉजी विभाग",
    "description": "पीरियडोंटोलॉजी दांतों के आसपास की संरचनाओं, जैसे मसूढ़े, हड्डी, लिगामेंट वगैरह, को प्रभावित करने वाली बीमारियों की रोकथाम, पहचान और इलाज में माहिर है।",
    "longDescription": "पीरियडोंटोलॉजी दंत चिकित्सा की एक खास शाखा है जो दांतों को सहारा देने वाली चीजों, जैसे मसूढ़े, पीरियोडोंटल लिगामेंट, हड्डी और सीमेंटम,  से जुड़ी बीमारियों की रोकथाम, पहचान और इलाज पर ध्यान देती है। ये मुंह को स्वस्थ रखने और दांतों को गिरने से बचाने में बहुत ज़रूरी है, क्योंकि पीरियोडोंटल बीमारियाँ दुनिया भर में दांतों की समस्याओं की बड़ी वजहों में से एक हैं।",
    "services": [
      {
        "name": "मैनुअल स्केलिंग और रूट प्लानिंग",
        "price": 50
      },
      {
        "name": "अल्ट्रा सोनिक स्केलिंग और रूट प्लानिंग",
        "price": 100
      },
      {
        "name": "स्प्लिंटिंग (प्रति क्वाड्रेंट)",
        "price": 800
      },
      {
        "name": "सब जिंजाइवल क्यूरेटेज (प्रति क्वाड्रेंट)",
        "price": 250
      },
      {
        "name": "जिंजिवोप्लास्टी / जिंजिवेctomy (प्रति क्वाड्रेंट)",
        "price": 250
      },
      {
        "name": "फ्रेनेक्टोमी (प्रति क्वाड्रेंट)",
        "price": 250
      },
      {
        "name": "फ्लैप सर्जरी (प्रति क्वाड्रेंट)",
        "price": 400
      },
      {
        "name": "क्राउन लम्बाई (प्रति प्रक्रिया)",
        "price": 250
      },
      {
        "name": "ऑपरकुलेक्टोमी / एपुलिस एक्सिशन",
        "price": 250
      },
      {
        "name": "डिपिग्मेंटेशन (प्रति क्वाड्रेंट) लेजर के अलावा",
        "price": 250
      },
      {
        "name": "म्यूकोगिंगिवल प्रक्रियाएं (पीरियोडोंटल प्लास्टिक सर्जरी) (प्रति प्रक्रिया)",
        "price": 500
      },
      {
        "name": "फोड़े का जल निकासी (प्रति प्रक्रिया)",
        "price": 250
      },
      {
        "name": "रिज ऑग्मेंटेशन (प्रति प्रक्रिया)",
        "price": 250
      },
      {
        "name": "रिसेक्टिव ओसियस सर्जरी (प्रति प्रक्रिया)",
        "price": 250
      },
      {
        "name": "निष्कर्षण और सॉकेट संरक्षण (यदि आवश्यक हो तो ग्राफ्ट सहित)",
        "price": 150
      },
      {
        "name": "लेजर सर्जरी का उपयोग करके उन्नत सर्जिकल प्रक्रियाएं",
        "price": 1000
      },
      {
        "name": "पिएज़ोसर्जरी-माइक्रो सर्जरी-इलेक्ट्रो कॉटरी (प्रति प्रक्रिया)",
        "price": 1000
      },
      {
        "name": "हड्डी ग्राफ्ट सर्जिकल प्रक्रिया (0.5 ग्राम के लिए)",
        "price": 2500
      },
      {
        "name": "निर्देशित ऊतक पुनर्जनन (जीटीआर) झिल्ली (प्रति झिल्ली)",
        "price": 2500
      },
      {
        "name": "डेंटल इम्प्लांट सर्जरी (एडिन इम्प्लांट)",
        "price": 5000
      },
      {
        "name": "डेंटल इम्प्लांट सर्जरी (बायोलाइन इम्प्लांट)",
        "price": 250
      },
      {
        "name": "डेंटल इम्प्लांट सर्जरी (ओस्टेम बायोहोरिजन इम्प्लांट)",
        "price": 250
      },
      {
        "name": "डेंटल इम्प्लांट सर्जरी (यदि आवश्यक हो तो बोन ग्राफ्ट (जीटीआर ग्राफ्ट) (प्रति 0.5 ग्राम))",
        "price": 2500
      },
      {
        "name": "अप्रत्यक्ष साइनस लिफ्ट प्रक्रिया",
        "price": 0
      },
      {
        "name": "प्रत्यक्ष साइनस लिफ्ट प्रक्रिया",
        "price": 3500
      },
      {
        "name": "इम्प्लांट प्रोस्थेसिस (पीएफएम इम्प्लांट क्राउन)",
        "price": 3000
      },
      {
        "name": "इम्प्लांट प्रोस्थेसिस (सभी सिरेमिक क्राउन)",
        "price": 4500
      },
      {
        "name": "इम्प्लांट प्रोस्थेसिस (स्क्रू रिटेन्ड क्राउन)",
        "price": 6000
      },
      {
        "name": "इम्प्लांट प्रोस्थेसिस (स्क्रू रिटेन्ड ऑल सिरेमिक)",
        "price": 6000
      },
      {
        "name": "इम्प्लांट प्रोस्थेसिस (अस्थायी क्राउन)",
        "price": 100
      },
      {
        "name": "इम्प्लांट प्रोस्थेसिस (ऑल ऑन 4/6 प्रोस्थेसिस (फ्रेमवर्क))",
        "price": 3000
      },
      {
        "name": "इम्प्लांट प्रोस्थेसिस (ऑल ऑन 4/6 प्रोस्थेसिस (मल्टी-यूनिट एबटमेंट्स के साथ फ्रेमवर्क))",
        "price": 100000
      },
      {
        "name": "स्थानीय दवा वितरण (प्रति दांत)",
        "price": 300
      },
      {
        "name": "रूट बायोमॉडिफिकेशन (प्रति दांत)",
        "price": 150
      }
    ]
  },
  {
    "id": "department-of-public-health-dentistry",
    "name": "सार्वजनिक स्वास्थ्य दंत चिकित्सा विभाग",
    "description": "सार्वजनिक स्वास्थ्य दंत चिकित्सा दंत चिकित्सा की एक विशिष्ट शाखा है जो केवल व्यक्तिगत उपचार के बजाय सामुदायिक स्तर पर दंत रोगों को रोकने और नियंत्रित करने पर केंद्रित है।",
    "longDescription": "सार्वजनिक स्वास्थ्य दंत चिकित्सा दंत चिकित्सा का एक विशिष्ट क्षेत्र है जो केवल व्यक्तियों के इलाज के बजाय सामुदायिक स्तर पर मौखिक स्वास्थ्य मुद्दों की रोकथाम, नियंत्रण और प्रबंधन पर केंद्रित है। दंत चिकित्सा की यह शाखा सार्वजनिक स्वास्थ्य सिद्धांतों को दंत चिकित्सा देखभाल के साथ एकीकृत करती है, जिसका उद्देश्य मौखिक स्वास्थ्य जागरूकता को बढ़ावा देना, बीमारियों को रोकना और बड़ी आबादी के लिए सुलभ और किफायती दंत चिकित्सा सेवाएं सुनिश्चित करना है।",
    "services": [
      {
        "name": "फ्लोराइड (एपीएफ) एप्लीकेशन",
        "price": 50
      },
      {
        "name": "पिट और फिशर सीलेंट एप्लीकेशन",
        "price": 150
      },
      {
        "name": "एटraumैटिक रेस्टोरेटिव टेक्निक (एआरटी)",
        "price": 50
      }
    ]
  }
];

export function getDepartmentById(id: string): Department | undefined {
  return departments.find(dept => dept.id === id);
}