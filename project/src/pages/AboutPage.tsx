import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Mail, Heart, Star, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-[#1A759F] hover:text-[#F77F00] mb-6 transition-colors">
          <ChevronLeft size={20} className="mr-1" />
          Ana Sayfaya Dön
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-[#1A759F] to-[#06D6A0] flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Hakkımızda
            </h1>
          </div>

          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Misyonumuz
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                ÇocukEtkinlik olarak misyonumuz, ebeveynlere ve eğitimcilere çocukların yaratıcılığını, 
                problem çözme becerilerini ve motor gelişimlerini destekleyecek kaliteli, erişilebilir 
                ve uygulanabilir etkinlik içerikleri sunmaktır. Her çocuğun benzersiz potansiyelini 
                keşfetmesine yardımcı olacak ilham verici kaynaklar sağlamayı amaçlıyoruz.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Hikayemiz
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                ÇocukEtkinlik, iki çocuk annesi ve deneyimli bir anaokulu öğretmeni olan Ayşe Yılmaz 
                tarafından 2022 yılında kuruldu. Ayşe, hem kendi çocuklarıyla hem de sınıfındaki 
                öğrencileriyle çeşitli etkinlikler yaparken, ebeveynlerin ve diğer öğretmenlerin bu 
                tür içeriklere erişimde yaşadığı zorlukları fark etti.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Bu platformu, çocuklarla yapılabilecek etkinlikler konusunda herkesin kolayca 
                ulaşabileceği, güvenilir ve ilham verici bir kaynak olması amacıyla oluşturdu. 
                Bugün ÇocukEtkinlik, Türkiye'nin dört bir yanından ebeveynlere, öğretmenlere ve 
                bakıcılara hizmet veren büyük bir topluluk haline geldi.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <Heart size={32} className="text-[#EF476F]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Sevgi Dolu</h3>
                  <p className="text-gray-600">Her etkinliğimizin temelinde çocuklara ve öğrenmeye olan sevgimiz var.</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <Star size={32} className="text-[#FCBF49]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Kaliteli</h3>
                  <p className="text-gray-600">Tüm içeriklerimiz eğitimciler tarafından dikkatle hazırlanır ve test edilir.</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <Clock size={32} className="text-[#1A759F]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Pratik</h3>
                  <p className="text-gray-600">Kolay bulunabilir malzemeler ve açık talimatlarla herkes yapabilir.</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                İletişim
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex items-center mb-8">
                <Mail size={20} className="text-[#1A759F] mr-2" />
                <a href="mailto:iletisim@cocuketkinlik.com" className="text-[#1A759F] hover:text-[#F77F00] transition-colors">
                  iletisim@cocuketkinlik.com
                </a>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-gray-600 text-center">
                  &copy; {new Date().getFullYear()} ÇocukEtkinlik. Tüm hakları saklıdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;