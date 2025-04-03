# Among Us Klonu

![Among Us Logo](/public/images/screenshot.png)

## Proje Linki
[Among Us Klonu](https://among-us-react.netlify.app/)

- [Among Us UI Design by Aniketh](https://www.figma.com/community/file/1185451992736171881) - Bu proje, Aniketh tarafından oluşturulan Figma tasarım şablonu temel alınarak geliştirilmiştir.

## Proje Hakkında

Bu proje, popüler çok oyunculu Among Us'un bir web klonudur. Projenin amacı, Among Us'un eğlenceli ve heyecan verici oyun deneyimini web platformuna taşımaktır.

## Teknolojiler

Bu proje aşağıdaki teknolojiler kullanılarak geliştirilmiştir: 

- **React** - Kullanıcı arayüzü geliştirme kütüphanesi
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Hızlı geliştirme ortamı ve derleme aracı
- **React Router** - Sayfa yönlendirme ve navigasyon
- **React Icons** - İkon kütüphanesi
- **FSLightbox** - Görsel galerisi için lightbox bileşeni
- **DaisyUI** - Tailwind CSS bileşen kütüphanesi

## Özellikler

- **Duyarlı Tasarım**: Mobil, tablet ve masaüstü cihazlarda sorunsuz çalışan duyarlı arayüz
- **Oyun Sayfası**: Farklı platformlarda (PC, Mobil, VR) oyun deneyimi hakkında bilgiler
- **Haberler**: Oyun güncellemeleri, etkinlikler ve işbirliklerine dair haberler
- **Hakkında Sayfası**: Oyun ve geliştirici ekibi hakkında bilgiler
- **Nasıl Oynanır**: Oyun mekanikleri ve kuralları hakkında açıklamalar
- **Ödüller**: Oyunun kazandığı ödüller ve başarılar

## Proje Yapısı

```
├── public/            # Statik dosyalar (görseller, fontlar)
├── src/               # Kaynak kodları
│   ├── components/    # Yeniden kullanılabilir bileşenler
│   ├── pages/         # Sayfa bileşenleri
│   ├── App.jsx        # Ana uygulama bileşeni
│   ├── main.jsx       # Uygulama giriş noktası
│   └── index.css      # Global CSS stilleri
├── index.html         # HTML şablonu
└── package.json       # Proje bağımlılıkları ve komutları
```

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Projeyi klonlayın
git clone https://github.com/kullaniciadi/among-us.git
cd among-us

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Geliştirme sunucusu varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## Katkıda Bulunma

Projeye katkıda bulunmak isterseniz:

1. Bu depoyu forklayın
2. Yeni bir özellik dalı oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`)
4. Dalınıza push yapın (`git push origin yeni-ozellik`)
5. Bir Pull Request açın
