# 👶 Çocuk Etkinlik Uygulaması

Çocuklar için çeşitli etkinliklerin, oyunların ve aktivitelerin sunulduğu modern bir web uygulamasıdır. Aileler ve eğitimciler, çocukların gelişimini destekleyecek etkinlikleri kolayca bulabilir ve uygulayabilir.

## ✨ Özellikler

- Çocuklara uygun etkinlik ve oyun listeleri
- Kategorilere göre filtreleme ve arama
- Modern, mobil uyumlu ve hızlı kullanıcı arayüzü
- Güvenli kullanıcı yönetimi ve Supabase ile veri depolama
- Tailwind CSS ile esnek ve özelleştirilebilir tasarım

## ⚡️ Kurulum

Projeyi çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

### 🛠 Gereksinimler

- Node.js (v18 ve üzeri önerilir)
- npm veya yarn paket yöneticisi

### 🚀 Adımlar

1. **Depoyu klonlayın:**
   ```sh
   git clone https://github.com/kiliicdeniz/CocukEtkinlik_.git
   cd CocukEtkinlik_/project
   ```

2. **Bağımlılıkları yükleyin:**
   ```sh
   npm install
   # veya
   yarn install
   ```

3. **Gerekli çevresel değişkenleri ayarlayın:**
   - Supabase ve diğer servisler için `.env` dosyasını oluşturup bilgilerinizi girin.

4. **Uygulamayı başlatın:**
   ```sh
   npm run dev
   # veya
   yarn dev
   ```
   - Uygulama genellikle `http://localhost:5173` adresinde çalışacaktır.

## 🧩 Kullanılan Teknolojiler

- **[Vite](https://vitejs.dev/):** Modern, hızlı geliştirme sunucusu ve build aracı
- **TypeScript:** Güvenli ve ölçeklenebilir JavaScript
- **Tailwind CSS:** Yardımcı sınıf tabanlı CSS framework'ü
- **Supabase:** Açık kaynaklı backend servisi (veritabanı ve kimlik doğrulama)
- **PostCSS & ESLint:** Kod kalitesini ve modern CSS'i desteklemek için

## 🗂 Proje Yapısı

```
project/
├── .bolt/
├── src/
├── supabase/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── ...
```

- `src/`: Uygulama kaynak kodları
- `supabase/`: Supabase yapılandırmaları
- `index.html`: Ana HTML dosyası
- `package.json`: Bağımlılıklar ve scriptler

Daha fazla dosya ve klasörü [buradan görüntüleyebilirsiniz.](https://github.com/kiliicdeniz/CocukEtkinlik_/tree/main/project)

## 📄 Lisans

Bu proje MIT lisansı ile lisanslanmıştır. Ayrıntılar için `LICENSE` dosyasına bakabilirsiniz.

---

Herhangi bir sorunuz veya öneriniz varsa, lütfen iletişime geçin veya bir issue açın!
