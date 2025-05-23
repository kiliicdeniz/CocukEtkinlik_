/*
  # Add more activities

  1. New Activities
    - Adds several new educational and creative activities:
      - Sayı Öğrenme Oyunu (Number Learning Game)
      - Doğal Boya Yapımı (Natural Paint Making)
      - Kukla Tiyatrosu (Puppet Theater)
      - Bahçe Keşfi (Garden Exploration)
      - Renk Karıştırma Deneyi (Color Mixing Experiment)
      - Mini Bowling (Mini Bowling Game)

  2. Changes
    - All activities are linked to the system user
    - Some activities are marked as featured
*/

DO $$
BEGIN
  INSERT INTO games (
    title, description, category, age_range, materials, instructions, 
    image_url, time_required, difficulty, featured, user_id
  ) VALUES
    (
      'Sayı Öğrenme Oyunu',
      'Eğlenceli bir şekilde sayıları öğrenmek için interaktif oyun.',
      'educational',
      ARRAY['3-5', '6-8'],
      ARRAY['Karton', 'Renkli kağıtlar', 'Yapıştırıcı', 'Makas', 'Mandal'],
      ARRAY[
        'Kartona 1''den 10''a kadar sayıları yazın.',
        'Her sayı için o sayı kadar nesne resmi çizin.',
        'Çocuğunuzdan mandalları doğru sayılara yerleştirmesini isteyin.',
        'Sayıları ve nesneleri eşleştirmesini sağlayın.'
      ],
      'https://images.pexels.com/photos/4473927/pexels-photo-4473927.jpeg',
      '40 dakika',
      'Easy',
      false,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Doğal Boya Yapımı',
      'Sebze ve meyvelerden doğal boyalar yaparak resim yapın.',
      'nature',
      ARRAY['3-5', '6-8', '9-12'],
      ARRAY['Pancar', 'Havuç', 'Ispanak', 'Su', 'Resim kağıdı', 'Fırça'],
      ARRAY[
        'Sebzeleri küçük parçalara ayırın.',
        'Her sebzeyi ayrı kaplarda haşlayın.',
        'Suları süzüp soğumaya bırakın.',
        'Doğal boyalarla resim yapın.',
        'Kuruması için bekleyin.'
      ],
      'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg',
      '60 dakika',
      'Medium',
      true,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Kukla Tiyatrosu',
      'Çoraplardan kukla yapıp mini bir tiyatro gösterisi hazırlayın.',
      'crafts',
      ARRAY['3-5', '6-8', '9-12'],
      ARRAY['Eski çoraplar', 'Düğmeler', 'İplik', 'Keçe', 'Yapıştırıcı', 'Karton kutu'],
      ARRAY[
        'Çoraplara düğmelerden göz yapın.',
        'Keçeden ağız ve diğer detayları ekleyin.',
        'Karton kutudan sahne hazırlayın.',
        'Bir hikaye yazın veya bildiğiniz bir masalı uyarlayın.',
        'Gösteriyi sergileyin.'
      ],
      'https://images.pexels.com/photos/5623677/pexels-photo-5623677.jpeg',
      '90 dakika',
      'Medium',
      true,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Bahçe Keşfi',
      'Bahçede mini bir keşif turu yaparak doğayı tanıyın.',
      'nature',
      ARRAY['3-5', '6-8'],
      ARRAY['Büyüteç', 'Not defteri', 'Kalem', 'Toplama kabı', 'Fotoğraf makinesi (isteğe bağlı)'],
      ARRAY[
        'Bahçede farklı yapraklar toplayın.',
        'Böcekleri büyüteçle inceleyin.',
        'Gördüğünüz kuşları not edin.',
        'Toplanan yaprakları not defterine yapıştırın.',
        'Gözlemlerinizi resimleyin.'
      ],
      'https://images.pexels.com/photos/5623761/pexels-photo-5623761.jpeg',
      '45 dakika',
      'Easy',
      false,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Renk Karıştırma Deneyi',
      'Ana renklerden yeni renkler oluşturarak renk bilgisi öğrenin.',
      'educational',
      ARRAY['3-5', '6-8'],
      ARRAY['Su', 'Gıda boyası (kırmızı, mavi, sarı)', 'Şeffaf bardaklar', 'Pipet', 'Kağıt'],
      ARRAY[
        'Bardaklara su doldurun.',
        'Her bardağa farklı renk gıda boyası ekleyin.',
        'Pipet yardımıyla renkleri karıştırın.',
        'Oluşan yeni renkleri not edin.',
        'Deney sonuçlarını resimleyin.'
      ],
      'https://images.pexels.com/photos/5623741/pexels-photo-5623741.jpeg',
      '30 dakika',
      'Easy',
      true,
      '00000000-0000-0000-0000-000000000000'
    ),
    (
      'Mini Bowling',
      'Geri dönüşüm malzemelerinden mini bowling oyunu yapın.',
      'crafts',
      ARRAY['3-5', '6-8', '9-12'],
      ARRAY['Pet şişeler', 'Top', 'Boya', 'Kum veya su', 'Renkli kağıtlar'],
      ARRAY[
        'Pet şişeleri temizleyin.',
        'İçlerine biraz kum veya su koyun.',
        'Şişeleri boyayın ve süsleyin.',
        'Bowling pistini hazırlayın.',
        'Puanlama sistemi oluşturun.'
      ],
      'https://images.pexels.com/photos/5623789/pexels-photo-5623789.jpeg',
      '40 dakika',
      'Easy',
      false,
      '00000000-0000-0000-0000-000000000000'
    );
END $$;