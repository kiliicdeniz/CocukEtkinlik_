/*
  # Add system user and games

  1. New Data
    - Create system user for games
    - Add initial set of games with activities
  
  2. Changes
    - Insert system user into auth.users
    - Insert games linked to system user
*/

-- Create system user first
INSERT INTO auth.users (id, email)
VALUES ('00000000-0000-0000-0000-000000000000', 'system@example.com')
ON CONFLICT (id) DO NOTHING;

DO $$
BEGIN
  -- Insert activities with system user ID
  INSERT INTO games (
    title, description, category, age_range, materials, instructions, 
    image_url, time_required, difficulty, featured, user_id
  ) VALUES
    (
      'Renkli Şişe Çalkalayıcılar',
      'Çocukların motor becerilerini geliştiren ve renkleri öğrenmelerine yardımcı olan eğlenceli sensory şişeler.',
      'sensory',
      ARRAY['1-3', '3-5'],
      ARRAY['Boş plastik şişeler', 'Su', 'Sıvı gıda boyası', 'Simler', 'Küçük boncuklar'],
      ARRAY[
        'Boş plastik şişeyi temizleyin ve kurutun.',
        'Şişeyi 3/4 oranında su ile doldurun.',
        'Birkaç damla gıda boyası ekleyin.',
        'Sim ve küçük boncukları şişeye ekleyin.',
        'Şişenin kapağını sıkıca kapatın ve güvenlik için yapıştırıcı ile sabitleyin.',
        'Çocuğunuzun şişeyi çalkalayarak içindeki nesnelerin hareketini izlemesini sağlayın.'
      ],
      'https://images.pexels.com/photos/6157230/pexels-photo-6157230.jpeg',
      '15 dakika',
      'Easy',
      true,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'El Yapımı Oyun Hamuru',
      'Evde kolayca hazırlayabileceğiniz, doğal ve güvenli oyun hamuru tarifi.',
      'crafts',
      ARRAY['3-5', '6-8'],
      ARRAY['2 su bardağı un', '1/2 su bardağı tuz', '2 yemek kaşığı sıvı yağ', '1 su bardağı su', 'Gıda boyası (isteğe bağlı)'],
      ARRAY[
        'Un ve tuzu bir kapta karıştırın.',
        'Sıvı yağı ekleyin ve karıştırmaya devam edin.',
        'Yavaş yavaş su ekleyerek hamur kıvamına gelene kadar yoğurun.',
        'İsteğe bağlı olarak hamuru bölüp her birine farklı renk gıda boyası ekleyebilirsiniz.',
        'Hava almayacak şekilde saklayın, buzdolabında 2-3 hafta dayanabilir.'
      ],
      'https://images.pexels.com/photos/8612929/pexels-photo-8612929.jpeg',
      '20 dakika',
      'Easy',
      true,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Duyusal Kum Havuzu',
      'Evde yapabileceğiniz kinetik kum ile duyusal oyun deneyimi.',
      'sensory',
      ARRAY['1-3', '3-5', '6-8'],
      ARRAY['8 su bardağı un', '1 su bardağı mısır nişastası', '1 su bardağı sıvı yağ', 'Gıda boyası (isteğe bağlı)', 'Geniş bir kap'],
      ARRAY[
        'Un ve mısır nişastasını geniş bir kapta karıştırın.',
        'Yavaş yavaş sıvı yağı ekleyerek karıştırın.',
        'İsteğe bağlı olarak gıda boyası ekleyebilirsiniz.',
        'Kumu elle yoğurarak istenen kıvama getirin.',
        'Geniş bir tepside oynamak için hazırlayın.'
      ],
      'https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg',
      '25 dakika',
      'Easy',
      true,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Geometrik Şekil Bulmaca',
      'Renkli kartonlardan geometrik şekiller yaparak eğitici bir bulmaca oyunu oluşturun.',
      'educational',
      ARRAY['3-5', '6-8'],
      ARRAY['Renkli kartonlar', 'Makas', 'Cetvel', 'Kalem', 'Yapıştırıcı'],
      ARRAY[
        'Kartonlardan çeşitli geometrik şekiller çizin ve kesin.',
        'Her şeklin bir kopyasını daha yapın.',
        'Bir karton üzerine şekillerin gölgelerini çizin.',
        'Çocuğunuzdan şekilleri eşleştirmesini isteyin.'
      ],
      'https://images.pexels.com/photos/3933239/pexels-photo-3933239.jpeg',
      '35 dakika',
      'Medium',
      false,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Müzik Aletleri Yapımı',
      'Geri dönüşüm malzemeleriyle eğlenceli müzik aletleri yapın.',
      'crafts',
      ARRAY['3-5', '6-8', '9-12'],
      ARRAY['Boş konserve kutuları', 'Balonlar', 'Pirinç/Mercimek', 'Karton rulolar', 'Lastik bantlar', 'Boyalar'],
      ARRAY[
        'Konserve kutularını temizleyin ve keskin kenarları bantla kapatın.',
        'İçlerine pirinç veya mercimek koyun.',
        'Balonun ağız kısmını kesin ve kutuların üzerine gerin.',
        'Karton rulolara lastik bantlar gerin.',
        'Aletleri boyalarla süsleyin.'
      ],
      'https://images.pexels.com/photos/8469409/pexels-photo-8469409.jpeg',
      '50 dakika',
      'Medium',
      false,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Origami Hayvanlar',
      'Kağıt katlama sanatıyla sevimli hayvan figürleri yapın.',
      'paper-crafts',
      ARRAY['6-8', '9-12'],
      ARRAY['Origami kağıtları', 'Keçeli kalemler', 'Yapıştırıcı'],
      ARRAY[
        'Kağıdı ortadan ikiye katlayın.',
        'Köşeleri merkeze doğru katlayın.',
        'Kulaklar için üst köşeleri katlayın.',
        'Yüz detaylarını çizin.',
        'İsteğe bağlı olarak süslemeler ekleyin.'
      ],
      'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg',
      '30 dakika',
      'Hard',
      false,
      '00000000-0000-0000-0000-000000000000'
    );
END $$;