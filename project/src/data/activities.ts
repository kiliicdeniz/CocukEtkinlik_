import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Renkli Şişe Çalkalayıcılar',
    description: 'Çocukların motor becerilerini geliştiren ve renkleri öğrenmelerine yardımcı olan eğlenceli sensory şişeler.',
    category: 'sensory',
    ageRange: ['1-3', '3-5'],
    materials: ['Boş plastik şişeler', 'Su', 'Sıvı gıda boyası', 'Simler', 'Küçük boncuklar'],
    instructions: [
      'Boş plastik şişeyi temizleyin ve kurutun.',
      'Şişeyi 3/4 oranında su ile doldurun.',
      'Birkaç damla gıda boyası ekleyin.',
      'Sim ve küçük boncukları şişeye ekleyin.',
      'Şişenin kapağını sıkıca kapatın ve güvenlik için yapıştırıcı ile sabitleyin.',
      'Çocuğunuzun şişeyi çalkalayarak içindeki nesnelerin hareketini izlemesini sağlayın.'
    ],
    imageUrl: 'https://images.pexels.com/photos/6157230/pexels-photo-6157230.jpeg',
    timeRequired: '15 dakika',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: '2',
    title: 'El Yapımı Oyun Hamuru',
    description: 'Evde kolayca hazırlayabileceğiniz, doğal ve güvenli oyun hamuru tarifi.',
    category: 'crafts',
    ageRange: ['3-5', '6-8'],
    materials: ['2 su bardağı un', '1/2 su bardağı tuz', '2 yemek kaşığı sıvı yağ', '1 su bardağı su', 'Gıda boyası (isteğe bağlı)'],
    instructions: [
      'Un ve tuzu bir kapta karıştırın.',
      'Sıvı yağı ekleyin ve karıştırmaya devam edin.',
      'Yavaş yavaş su ekleyerek hamur kıvamına gelene kadar yoğurun.',
      'İsteğe bağlı olarak hamuru bölüp her birine farklı renk gıda boyası ekleyebilirsiniz.',
      'Hava almayacak şekilde saklayın, buzdolabında 2-3 hafta dayanabilir.'
    ],
    imageUrl: 'https://images.pexels.com/photos/8612929/pexels-photo-8612929.jpeg',
    timeRequired: '20 dakika',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: '3',
    title: 'Kağıt Uçaklar',
    description: 'Çeşitli kağıt uçak modelleri yapmayı öğrenin ve çocuğunuzla uçuş yarışmaları düzenleyin.',
    category: 'paper-crafts',
    ageRange: ['6-8', '9-12'],
    materials: ['A4 kağıt', 'Renkli kalemler (süslemek için)'],
    instructions: [
      'A4 kağıdı uzunlamasına ikiye katlayın ve açın.',
      'Üst köşeleri orta çizgiye doğru katlayın.',
      'Oluşan üçgen şekli tekrar ortaya doğru katlayın.',
      'Kağıdın alt kısmını üst üçgenin hizasında yukarı katlayın.',
      'Ters çevirin ve diğer tarafta da aynı işlemi yapın.',
      'Kanatları orta çizgiden dışa doğru katlayın.',
      'İsteğe bağlı olarak renkli kalemlerle süsleyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg',
    timeRequired: '10 dakika',
    difficulty: 'Medium'
  },
  {
    id: '4',
    title: 'Doğa Kolajı',
    description: 'Doğadan toplanan malzemelerle sanat eseri yaratın.',
    category: 'nature',
    ageRange: ['3-5', '6-8', '9-12'],
    materials: ['Karton', 'Yapıştırıcı', 'Yapraklar', 'Çiçekler', 'Taşlar', 'Dallar'],
    instructions: [
      'Çocuğunuzla birlikte dışarı çıkın ve ilginç yapraklar, çiçekler, taşlar toplayın.',
      'Toplanan malzemeleri düzenleyin ve hangi deseni oluşturmak istediğinize karar verin.',
      'Kartonu hazırlayın.',
      'Yapıştırıcı kullanarak doğal malzemeleri kartona yerleştirin.',
      'Tamamlanan kolajın kurumasını bekleyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/5622938/pexels-photo-5622938.jpeg',
    timeRequired: '45 dakika',
    difficulty: 'Easy'
  },
  {
    id: '5',
    title: 'Mini Bahçe',
    description: 'Eski bir kaba mini bir bahçe yaparak çocuğunuza bitki yetiştirmeyi öğretin.',
    category: 'nature',
    ageRange: ['3-5', '6-8', '9-12'],
    materials: ['Eski bir kap veya saksı', 'Toprak', 'Küçük bitkiler veya tohumlar', 'Küçük taşlar', 'Sulama kabı'],
    instructions: [
      'Kabın altına drenaj için küçük taşlar yerleştirin.',
      'Üzerine toprak ekleyin.',
      'Çocuğunuzun bitkileri veya tohumları yerleştirmesine yardımcı olun.',
      'Hafifçe sulayın.',
      'Çocuğunuza günlük bakım sorumluluklarını öğretin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/4505167/pexels-photo-4505167.jpeg',
    timeRequired: '30 dakika',
    difficulty: 'Medium',
    featured: true
  },
  {
    id: '6',
    title: 'Kumaş Parmak Kuklaları',
    description: 'Basit malzemelerle eğlenceli parmak kuklaları yapın ve hikayeler anlatın.',
    category: 'crafts',
    ageRange: ['3-5', '6-8'],
    materials: ['Keçe veya kumaş parçaları', 'İğne ve iplik (veya yapıştırıcı)', 'Düğmeler', 'Renkli ipler', 'Makas'],
    instructions: [
      'Kumaşı parmağa geçecek boyutta dikdörtgen şeklinde kesin.',
      'Kumaşı ortadan ikiye katlayın ve yanlarını dikin veya yapıştırın.',
      'Düğme, ip ve diğer malzemeleri kullanarak yüz özellikleri ekleyin.',
      'Kuruduktan sonra parmağınıza geçirip kukla gösterisi yapın.'
    ],
    imageUrl: 'https://images.pexels.com/photos/8325135/pexels-photo-8325135.jpeg',
    timeRequired: '40 dakika',
    difficulty: 'Medium'
  },
  {
    id: '7',
    title: 'Duyusal Kum Havuzu',
    description: 'Evde yapabileceğiniz kinetik kum ile duyusal oyun deneyimi.',
    category: 'sensory',
    ageRange: ['1-3', '3-5', '6-8'],
    materials: ['8 su bardağı un', '1 su bardağı mısır nişastası', '1 su bardağı sıvı yağ', 'Gıda boyası (isteğe bağlı)', 'Geniş bir kap'],
    instructions: [
      'Un ve mısır nişastasını geniş bir kapta karıştırın.',
      'Yavaş yavaş sıvı yağı ekleyerek karıştırın.',
      'İsteğe bağlı olarak gıda boyası ekleyebilirsiniz.',
      'Kumu elle yoğurarak istenen kıvama getirin.',
      'Geniş bir tepside oynamak için hazırlayın.'
    ],
    imageUrl: 'https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg',
    timeRequired: '25 dakika',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: '8',
    title: 'Geometrik Şekil Bulmaca',
    description: 'Renkli kartonlardan geometrik şekiller yaparak eğitici bir bulmaca oyunu oluşturun.',
    category: 'educational',
    ageRange: ['3-5', '6-8'],
    materials: ['Renkli kartonlar', 'Makas', 'Cetvel', 'Kalem', 'Yapıştırıcı'],
    instructions: [
      'Kartonlardan çeşitli geometrik şekiller çizin ve kesin.',
      'Her şeklin bir kopyasını daha yapın.',
      'Bir karton üzerine şekillerin gölgelerini çizin.',
      'Çocuğunuzdan şekilleri eşleştirmesini isteyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/3933239/pexels-photo-3933239.jpeg',
    timeRequired: '35 dakika',
    difficulty: 'Medium'
  },
  {
    id: '9',
    title: 'Müzik Aletleri Yapımı',
    description: 'Geri dönüşüm malzemeleriyle eğlenceli müzik aletleri yapın.',
    category: 'crafts',
    ageRange: ['3-5', '6-8', '9-12'],
    materials: ['Boş konserve kutuları', 'Balonlar', 'Pirinç/Mercimek', 'Karton rulolar', 'Lastik bantlar', 'Boyalar'],
    instructions: [
      'Konserve kutularını temizleyin ve keskin kenarları bantla kapatın.',
      'İçlerine pirinç veya mercimek koyun.',
      'Balonun ağız kısmını kesin ve kutuların üzerine gerin.',
      'Karton rulolara lastik bantlar gerin.',
      'Aletleri boyalarla süsleyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/8469409/pexels-photo-8469409.jpeg',
    timeRequired: '50 dakika',
    difficulty: 'Medium'
  },
  {
    id: '10',
    title: 'Origami Hayvanlar',
    description: 'Kağıt katlama sanatıyla sevimli hayvan figürleri yapın.',
    category: 'paper-crafts',
    ageRange: ['6-8', '9-12'],
    materials: ['Origami kağıtları', 'Keçeli kalemler', 'Yapıştırıcı'],
    instructions: [
      'Kağıdı ortadan ikiye katlayın.',
      'Köşeleri merkeze doğru katlayın.',
      'Kulaklar için üst köşeleri katlayın.',
      'Yüz detaylarını çizin.',
      'İsteğe bağlı olarak süslemeler ekleyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg',
    timeRequired: '30 dakika',
    difficulty: 'Hard'
  },
  {
    id: '11',
    title: 'Sayı Öğrenme Oyunu',
    description: 'Eğlenceli bir şekilde sayıları öğrenmek için interaktif oyun.',
    category: 'educational',
    ageRange: ['3-5', '6-8'],
    materials: ['Karton', 'Renkli kağıtlar', 'Yapıştırıcı', 'Makas', 'Mandal'],
    instructions: [
      'Kartona 1\'den 10\'a kadar sayıları yazın.',
      'Her sayı için o sayı kadar nesne resmi çizin.',
      'Çocuğunuzdan mandalları doğru sayılara yerleştirmesini isteyin.',
      'Sayıları ve nesneleri eşleştirmesini sağlayın.'
    ],
    imageUrl: 'https://images.pexels.com/photos/4473927/pexels-photo-4473927.jpeg',
    timeRequired: '40 dakika',
    difficulty: 'Easy'
  },
  {
    id: '12',
    title: 'Doğal Boya Yapımı',
    description: 'Sebze ve meyvelerden doğal boyalar yaparak resim yapın.',
    category: 'nature',
    ageRange: ['3-5', '6-8', '9-12'],
    materials: ['Pancar', 'Havuç', 'Ispanak', 'Su', 'Resim kağıdı', 'Fırça'],
    instructions: [
      'Sebzeleri küçük parçalara ayırın.',
      'Her sebzeyi ayrı kaplarda haşlayın.',
      'Suları süzüp soğumaya bırakın.',
      'Doğal boyalarla resim yapın.',
      'Kuruması için bekleyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg',
    timeRequired: '60 dakika',
    difficulty: 'Medium',
    featured: true
  },
  {
    id: '13',
    title: 'Kukla Tiyatrosu',
    description: 'Çoraplardan kukla yapıp mini bir tiyatro gösterisi hazırlayın.',
    category: 'crafts',
    ageRange: ['3-5', '6-8', '9-12'],
    materials: ['Eski çoraplar', 'Düğmeler', 'İplik', 'Keçe', 'Yapıştırıcı', 'Karton kutu'],
    instructions: [
      'Çoraplara düğmelerden göz yapın.',
      'Keçeden ağız ve diğer detayları ekleyin.',
      'Karton kutudan sahne hazırlayın.',
      'Bir hikaye yazın veya bildiğiniz bir masalı uyarlayın.',
      'Gösteriyi sergileyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/5623677/pexels-photo-5623677.jpeg',
    timeRequired: '90 dakika',
    difficulty: 'Medium',
    featured: true
  },
  {
    id: '14',
    title: 'Bahçe Keşfi',
    description: 'Bahçede mini bir keşif turu yaparak doğayı tanıyın.',
    category: 'nature',
    ageRange: ['3-5', '6-8'],
    materials: ['Büyüteç', 'Not defteri', 'Kalem', 'Toplama kabı', 'Fotoğraf makinesi (isteğe bağlı)'],
    instructions: [
      'Bahçede farklı yapraklar toplayın.',
      'Böcekleri büyüteçle inceleyin.',
      'Gördüğünüz kuşları not edin.',
      'Toplanan yaprakları not defterine yapıştırın.',
      'Gözlemlerinizi resimleyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/5623761/pexels-photo-5623761.jpeg',
    timeRequired: '45 dakika',
    difficulty: 'Easy'
  },
  {
    id: '15',
    title: 'Renk Karıştırma Deneyi',
    description: 'Ana renklerden yeni renkler oluşturarak renk bilgisi öğrenin.',
    category: 'educational',
    ageRange: ['3-5', '6-8'],
    materials: ['Su', 'Gıda boyası (kırmızı, mavi, sarı)', 'Şeffaf bardaklar', 'Pipet', 'Kağıt'],
    instructions: [
      'Bardaklara su doldurun.',
      'Her bardağa farklı renk gıda boyası ekleyin.',
      'Pipet yardımıyla renkleri karıştırın.',
      'Oluşan yeni renkleri not edin.',
      'Deney sonuçlarını resimleyin.'
    ],
    imageUrl: 'https://images.pexels.com/photos/5623741/pexels-photo-5623741.jpeg',
    timeRequired: '30 dakika',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: '16',
    title: 'Mini Bowling',
    description: 'Geri dönüşüm malzemelerinden mini bowling oyunu yapın.',
    category: 'crafts',
    ageRange: ['3-5', '6-8', '9-12'],
    materials: ['Pet şişeler', 'Top', 'Boya', 'Kum veya su', 'Renkli kağıtlar'],
    instructions: [
      'Pet şişeleri temizleyin.',
      'İçlerine biraz kum veya su koyun.',
      'Şişeleri boyayın ve süsleyin.',
      'Bowling pistini hazırlayın.',
      'Puanlama sistemi oluşturun.'
    ],
    imageUrl: 'https://images.pexels.com/photos/5623789/pexels-photo-5623789.jpeg',
    timeRequired: '40 dakika',
    difficulty: 'Easy'
  }
];