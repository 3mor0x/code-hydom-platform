const whatsappNumber = "201009694831";
let finalWhatsappUrl = "";

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

// 3️⃣ ربط كروت المناسبات بجمل تسويقية فورية وموجهة لشات الواتساب
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
            customMsg = "عايز أجهز موقع ويب تهنئة وبداية مميزة مع شريكي للسنة الجديدة 🎆";
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

// 6️⃣ مراقبة وحصر عدد الصور المرفوعة محلياً
const imageInput = document.getElementById('imageFiles');
const imageStatus = document.getElementById('imageStatus');
const songLinkInput = document.getElementById('songLink');

imageInput.addEventListener('change', () => {
    const count = imageInput.files.length;
    if (count > 0) {
        if (count > 20) {
            alert('أقصى عدد مسموح به هو 20 صورة فقط للباقة!');
            imageInput.value = '';
            imageStatus.textContent = 'ولم يتم ربط ملفات بعد';
            imageStatus.className = 'widget-status';
        } else {
            imageStatus.textContent = `✅ تم حصر ${count} صور جاهزة للإرسال`;
            imageStatus.className = 'widget-status active';
        }
    } else {
        imageStatus.textContent = 'ولم يتم ربط ملفات بعد';
        imageStatus.className = 'widget-status';
    }
});

// 7️⃣ معالجة إرسال الفورم وحفظ البيانات للواتساب المباشر
const form = document.getElementById('whatsappForm');
const successModal = document.getElementById('successModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pkg = form.elements['packageSelection'].value;
    const name = form.elements['clientName'].value;
    const partner = form.elements['partnerName'].value;
    const passcode = form.elements['passcode'].value;
    const msg = form.elements['message'].value;

    let imageText = "❌ لم يتم حصر صور";
    if (imageInput.files.length > 0) {
        imageText = `📸 *الصور الجاهزة:* (${imageInput.files.length} صور) سأرسلها لك حالاً في الشات...`;
    }

    let musicText = "❌ لم يتم تحديد ملفات صوتية";
    if (songLinkInput.value.trim() !== "") {
        musicText = `🔗 *رابط الأغنية المعتمد:* ${songLinkInput.value.trim()}`;
    }

    const waText = `👋 *طلب حجز جديد من منصة كود هيدوم* \n\n` +
                   `📦 *الباقة المعتمدة:* ${pkg}\n` +
                   `👤 *اسم العميل:* ${name}\n` +
                   `❤️ *اسم الطرف الثاني:* ${partner}\n` +
                   `🔑 *كود البوابة السري:* ${passcode}\n\n` +
                   `🖼 *الملفات:* ${imageText}\n\n` +
                   `🎵 *الموسيقى والأغاني:* ${musicText}\n\n` +
                   `📝 *الرسالة والملاحظات:*\n"${msg}"\n\n` +
                   `✨ _تأكيد نقل البيانات الآمن، بانتظار إرفاق ملفات الميديا بالشات._`;

    finalWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;
    
    successModal.classList.add('active');
});

modalCloseBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
    form.reset();
    imageStatus.textContent = 'ولم يتم ربط ملفات بعد';
    imageStatus.className = 'widget-status';
    window.open(finalWhatsappUrl, '_blank');
});