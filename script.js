const whatsappNumber = "201009694831";

// 👑 تهيئة سوبابيز بالمفاتيح الخاصة بك (استبدل القيم دي بمفاتيح مشروعك)
const SUPABASE_URL = "https://xpcyddifuekknohywuqf.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwY3lkZGlmdWVra25vaHl3dXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5Nzg1NTcsImV4cCI6MjA5OTU1NDU1N30.7nYwBcui4r6Xbyrr7LIkBTMwh-hoFP6FDzbMix-dHUs";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let finalTemplateUrl = "";

// 1️⃣ مُبدل الثيمات (Light / Dark Mode) المطور
const themeToggle = document.getElementById('themeToggle');
const bodyElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = bodyElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    bodyElement.setAttribute('data-theme', newTheme);
    themeToggle.querySelector('.icon').textContent = newTheme === 'dark' ? '🌓' : '☀️';
});

// 2️⃣ نظام العناصر الطائرة (Floating Elements) في الخلفية
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('floatingContainer');
    const shapes = ['❤️', '✨', '🎈', '🎵', '✦', '🌸'];

    function createShape() {
        if (!container) return;
        const element = document.createElement('div');
        element.className = 'floating-element';
        
        element.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        element.style.left = Math.random() * 100 + 'vw';
        
        const size = Math.random() * 12 + 14;
        element.style.fontSize = size + 'px';
        const duration = Math.random() * 5 + 6; 
        element.style.animationDuration = duration + 's';
        
        container.appendChild(element);

        setTimeout(() => {
            element.remove();
        }, duration * 1000);
    }

    setInterval(createShape, 600);
});

// 3️⃣ ربط كروت المناسبات بجمل تسويقية موجهة للواتساب
function sendOccasionWA(occasionType) {
    let customMsg = "";

    switch(occasionType) {
        case 'للمخطوبين':
            customMsg = "عايز تصميم موقع ويب مخصص لخطوبتنا يحسب أيامنا وصورنا سوا ✨";
            break;
        case 'للكابلز':
            customMsg = "عايز أعمل صفحة ويب ذكريات تفاعلية شيك جداً كهدية مميزة لحبيبتي 💖";
            break;
        case 'عيد ميلاد':
            customMsg = "عايز موقع ويب مفاجأة بمناسبة عيد ميلاد بيفصل الأغاني والصور السحرية 🎂";
            break;
        case 'عيد جوازكم':
            customMsg = "عايز أصمم بوابة ويب فخمة للاحتفال بعيد جوازنا وتوثيق ذكريات السنين 🥂";
            break;
        case 'تصالح حبيبك':
            customMsg = "كنت عايز فكرة هدية رقمية وموقع ويب مخصوص عشان أصالح بيه حبيبتي وتشوف رسايلنا سوا 🥺";
            break;
        case 'سنة جديدة':
            customMsg = "عايز أجمع موقع ويب تهنئة وبداية مميزة مع شريكي للسنة الجديدة 🎆";
            break;
        case 'فكرة مجنونة':
            customMsg = "عندي فكرة موقع ويب ومؤثرات برمجية مجنونة ومختلفة وعايز أطبقها معاكم هنا 💡";
            break;
        case 'هدية رمضان':
            customMsg = "عايز أصمم بوابة رمضانية مخصصة لتهنئة شريك حياتي بأجواء مميزة وموسيقى هادئة 🌙";
            break;
        default:
            customMsg = "كنت حابب أستفسر عن تفاصيل تصميم المواقع والهدية الرقمية المخصصة منكم.";
    }

    const fullWaUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('👋 أهلاً كود هيدوم،\n' + customMsg)}`;
    window.open(fullWaUrl, '_blank');
}

// 4️⃣ نظام عداد الأرقام التفاعلي الانسيابي
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const increment = target / 40;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = "+" + Math.ceil(current).toLocaleString();
                setTimeout(updateCounter, 25);
            } else {
                counter.textContent = "+" + target.toLocaleString();
            }
        };
        updateCounter();
    });
});

// 5️⃣ ربط أزرار الباقات بالفورم السفلي تلقائياً
document.querySelectorAll('.select-pkg-btn').forEach(button => {
    button.addEventListener('click', () => {
        const pkg = button.getAttribute('data-package');
        const packageSelection = document.getElementById('packageSelection');
        if (pkg === "الجيل الصاعد (10-17 سنة)") {
            packageSelection.value = "باقة الجيل الصاعد 10-17 سنة (150 ج.م)";
        } else if (pkg === "الرومانسية (17-22 سنة)") {
            packageSelection.value = "الباقة الرومانسية 17-22 سنة (250 ج.م)";
        } else {
            packageSelection.value = "الباقة الفخمة 22+ سنة (300 ج.م)";
        }
    });
});

// 6️⃣ مراقبة وحصر عدد الصور المرفوعة
const imageInput = document.getElementById('imageFiles');
const imageStatus = document.getElementById('imageStatus');
const songLinkInput = document.getElementById('songLink');

imageInput.addEventListener('change', () => {
    const count = imageInput.files.length;
    if (count > 0) {
        if (count > 20) {
            alert('أقصى عدد مسموح به هو 20 صورة فقط!');
            imageInput.value = '';
            imageStatus.textContent = 'ولم يتم ربط ملفات بعد';
            imageStatus.className = 'widget-status';
        } else {
            imageStatus.textContent = `✅ تم اختيار ${count} صور`;
            imageStatus.className = 'widget-status active';
        }
    } else {
        imageStatus.textContent = 'ولم يتم ربط ملفات بعد';
        imageStatus.className = 'widget-status';
    }
});

// 7️⃣ معالجة إرسال الفورم ورفع الصور التلقائي لـ Supabase Storage والـ Database
const form = document.getElementById('whatsappForm');
const successModal = document.getElementById('successModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // تغيير حالة الزرار أثناء الرفع منعاً للضغط المزدوج
    submitBtn.innerText = "جاري رفع الصور وتشفير البيانات... ⏳";
    submitBtn.disabled = true;

    const pkg = form.elements['packageSelection'].value;
    const name = form.elements['clientName'].value;
    const partner = form.elements['partnerName'].value;
    const passcode = form.elements['passcode'].value;
    const msg = form.elements['message'].value;
    const songLink = songLinkInput.value.trim();

    let uploadedImageUrls = [];

    // 🎇 حلقة رفع الصور الفورية لـ Supabase Storage Bucket
    if (imageInput.files.length > 0) {
        for (let i = 0; i < imageInput.files.length; i++) {
            const file = imageInput.files[i];
            // توليد اسم فريد لكل صورة لتفادي التكرار
            const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}_${file.name}`;
            
            const { data, error } = await supabase.storage
                .from('love-images')
                .upload(fileName, file);

            if (error) {
                console.error("خطأ في رفع الصورة:", error.message);
            } else {
                // استخراج رابط الصورة المباشر والـ Public
                const { data: publicUrlData } = supabase.storage
                    .from('love-images')
                    .getPublicUrl(fileName);
                
                uploadedImageUrls.push(publicUrlData.publicUrl);
            }
        }
    }

    // 💾 حفظ كامل الداتا في جدول Database Table
    const { data, error } = await supabase
        .from('orders')
        .insert([
            {
                package_selection: pkg,
                client_name: name,
                partner_name: partner,
                passcode: passcode,
                song_link: songLink,
                message: msg,
                image_urls: uploadedImageUrls
            }
        ]);

    if (error) {
        alert("حصل مشكلة في حفظ البيانات السحابية: " + error.message);
        submitBtn.innerText = "يلا نطلب دلوقتي 🚀";
        submitBtn.disabled = false;
        return;
    }

    // تجهيز رسالة الواتساب البسيطة كإشعار إضافي ليك
    const waText = `👋 *طلب حجز جديد اتحفظ في السحاب!* \n\n` +
                   `📦 *الباقة:* ${pkg}\n` +
                   `👤 *العميل:* ${name}\n` +
                   `❤️ *الطرف الثاني:* ${partner}\n\n` +
                   `✅ _الصور والرسايل بالكامل اترفعوا على سوبابيز، وجاهز لتأكيد الدفع وشغل الموقع!_`;

    finalTemplateUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;
    
    // فتح البوب اب للمستخدم لإعلامه بالنجاح
    successModal.classList.add('active');
});

modalCloseBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
    form.reset();
    submitBtn.innerText = "إرسال الطلب وحفظ المفاجأة 🚀";
    submitBtn.disabled = false;
    imageStatus.textContent = 'ولم يتم ربط ملفات بعد';
    imageStatus.className = 'widget-status';
    window.open(finalTemplateUrl, '_blank');
});