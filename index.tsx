

document.addEventListener('DOMContentLoaded', () => {
    const isArabic = document.documentElement.lang === 'ar';

    const translations = {
        en: {
            nameRequired: 'Name is required.',
            companyRequired: 'Company is required.',
            schoolRequired: 'School/Institution is required.',
            organizationRequired: 'Organization is required.',
            emailRequired: 'Email is required.',
            invalidEmail: 'Please enter a valid email address.',
            phoneRequired: 'Mobile number is required.',
            invalidPhone: 'Please enter a valid phone number.',
            positionRequired: 'Position is required.',
            designationRequired: 'Designation is required.',
            jobTitleRequired: 'Job Title is required.',
            websiteRequired: 'Website is required.',
            invalidWebsite: 'Please enter a valid website URL.',
            headshotRequired: 'A professional headshot is required.',
            invalidFileType: 'Invalid file type. Please upload a JPG, PNG, or WEBP image.',
            fileTooLarge: 'File is too large. Maximum size is 10 MB.',
            fieldRequired: 'This field is required.',
            selectionRequired: 'Please make a selection.',
            studentCountRequired: 'Please enter a valid number of students.',
            gradeLevelRequired: 'Please specify the grade level(s).',
            dobRequired: 'Date of birth is required.',
            consentRequired: 'You must provide consent to register.',
            interestRequired: 'Please select at least one area of interest.',
            specifyInterest: 'Please specify your area of interest.',
            sessionRequired: 'Please select at least one session from Day 1 or Day 2.',
            optionRequired: 'Please select an option.',
            submitting: 'Submitting...',
            submitInquiry: 'Submit Inquiry',
            registerNow: 'Register Now',
            submitRegistration: 'Submit Registration',
            submitApplication: 'Submit Application',
            submitGroupRegistration: 'Submit Group Registration',
            downloadNow: 'Download Now',
            noFileChosen: 'No file chosen',
            eventHasStarted: 'The event has started!',
            earlyBirdEnded: 'The early bird offer has ended!',
            bookABooth: 'Book a Booth',
            sponsorNow: 'Sponsor Now',
            submissionErrorInquiry: 'Sorry, there was a problem with your inquiry. Please check your network connection and try again. Error: ',
            submissionErrorRegistration: 'Sorry, there was a problem with your registration. Please check your network connection and try again. If the problem persists, contact support. Error: ',
            submissionErrorApplication: 'Sorry, there was a problem with your application. Please check your network and try again. Error: ',
            submissionErrorRequest: 'Sorry, there was a problem submitting your request. Please try again. Error: '
        },
        ar: {
            nameRequired: 'الاسم مطلوب.',
            companyRequired: 'اسم الشركة مطلوب.',
            schoolRequired: 'اسم المدرسة/المؤسسة مطلوب.',
            organizationRequired: 'اسم المنظمة مطلوب.',
            emailRequired: 'البريد الإلكتروني مطلوب.',
            invalidEmail: 'الرجاء إدخال عنوان بريد إلكتروني صالح.',
            phoneRequired: 'رقم الجوال مطلوب.',
            invalidPhone: 'الرجاء إدخال رقم هاتف صالح.',
            positionRequired: 'المنصب مطلوب.',
            designationRequired: 'المسمى الوظيفي مطلوب.',
            jobTitleRequired: 'المسمى الوظيفي مطلوب.',
            websiteRequired: 'الموقع الإلكتروني مطلوب.',
            invalidWebsite: 'الرجاء إدخال عنوان موقع إلكتروني صالح.',
            headshotRequired: 'صورة شخصية احترافية مطلوبة.',
            invalidFileType: 'نوع الملف غير صالح. يرجى تحميل صورة بصيغة JPG, PNG, أو WEBP.',
            fileTooLarge: 'الملف كبير جدًا. الحجم الأقصى هو 10 ميجابايت.',
            fieldRequired: 'هذا الحقل مطلوب.',
            selectionRequired: 'الرجاء الاختيار.',
            studentCountRequired: 'الرجاء إدخال عدد صالح من الطلاب.',
            gradeLevelRequired: 'الرجاء تحديد المستوى (المستويات) الدراسي.',
            dobRequired: 'تاريخ الميلاد مطلوب.',
            consentRequired: 'يجب تقديم الموافقة للتسجيل.',
            interestRequired: 'الرجاء اختيار مجال اهتمام واحد على الأقل.',
            specifyInterest: 'الرجاء تحديد مجال اهتمامك.',
            sessionRequired: 'الرجاء اختيار جلسة واحدة على الأقل من اليوم الأول أو اليوم الثاني.',
            optionRequired: 'الرجاء اختيار خيار.',
            submitting: 'جارٍ الإرسال...',
            submitInquiry: 'إرسال الاستفسار',
            registerNow: 'سجل الآن',
            submitRegistration: 'إرسال التسجيل',
            submitApplication: 'إرسال الطلب',
            submitGroupRegistration: 'إرسال تسجيل المجموعة',
            downloadNow: 'حمّل الآن',
            noFileChosen: 'لم يتم اختيار ملف',
            eventHasStarted: 'لقد بدأ الحدث!',
            earlyBirdEnded: 'لقد انتهى عرض الحجز المبكر!',
            bookABooth: 'احجز جناحك',
            sponsorNow: 'كن راعيًا',
            submissionErrorInquiry: 'عذرًا، حدثت مشكلة في استفسارك. يرجى التحقق من اتصالك بالشبكة والمحاولة مرة أخرى. خطأ: ',
            submissionErrorRegistration: 'عذرًا، حدثت مشكلة في تسجيلك. يرجى التحقق من اتصالك بالشبكة والمحاولة مرة أخرى. إذا استمرت المشكلة، يرجى الاتصال بالدعم. خطأ: ',
            submissionErrorApplication: 'عذرًا، حدثت مشكلة في طلبك. يرجى التحقق من اتصالك بالشبكة والمحاولة مرة أخرى. خطأ: ',
            submissionErrorRequest: 'عذرًا، حدثت مشكلة في إرسال طلبك. يرجى المحاولة مرة أخرى. خطأ: '
        }
    };
    
    const t = isArabic ? translations.ar : translations.en;


    // --- Reusable Form Validation Helpers ---
    const showError = (input: HTMLElement, message: string) => {
        const formGroup = input.closest('.form-group, .form-group-consent, .interest-group-container');
        if (!formGroup) return;
        const errorElement = formGroup.querySelector('.error-message') as HTMLElement;
        if (errorElement) {
            errorElement.innerText = message;
            errorElement.style.display = 'block';
        }
        // FIX: Cast `input` to `HTMLInputElement` to safely access the 'type' property.
        if (input.tagName.toLowerCase() !== 'div' && (input as HTMLInputElement).type !== 'file' && !input.closest('.consent-group')) {
            input.classList.add('invalid');
        }
    };

    const clearError = (input: HTMLElement) => {
        const formGroup = input.closest('.form-group, .form-group-consent, .interest-group-container');
         if (!formGroup) return;
        const errorElement = formGroup.querySelector('.error-message') as HTMLElement;
        if (errorElement) {
            errorElement.innerText = '';
            errorElement.style.display = 'none';
        }
        // FIX: Cast `input` to `HTMLInputElement` to safely access the 'type' property.
         if (input.tagName.toLowerCase() !== 'div' && (input as HTMLInputElement).type !== 'file' && !input.closest('.consent-group')) {
            input.classList.remove('invalid');
        }
    };

    /**
     * Converts a file to a Base64 encoded string, resizing and compressing it first.
     * This is crucial to prevent "Failed to fetch" errors when sending large image
     * data to Google Apps Script, which has payload size limits.
     * @param file The file to convert.
     * @returns A promise that resolves with the Base64 string of the processed JPEG image.
     */
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const maxWidth = 800; // Max width for the resized image
                    let { width, height } = img;

                    if (width > maxWidth) {
                        const ratio = maxWidth / width;
                        width = maxWidth;
                        height = height * ratio;
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        return reject(new Error('Could not get canvas context'));
                    }
                    ctx.drawImage(img, 0, 0, width, height);

                    // Get the data URL for the resized image as a compressed JPEG
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    
                    // Strip the prefix "data:image/jpeg;base64,"
                    const base64 = dataUrl.split(',')[1];
                    resolve(base64);
                };
                img.onerror = (error) => reject(error);
            };
            reader.onerror = (error) => reject(error);
        });
    };

    // --- Universal Real-Time Validator ---
    const validateField = (field: HTMLElement): boolean => {
        if (!field) return true;
        let isValid = true;
        const input = field as HTMLInputElement;
        const select = field as HTMLSelectElement;
        const checkbox = field as HTMLInputElement;
        const textarea = field as HTMLTextAreaElement;

        const value = input.value?.trim();
        clearError(field);

        switch (field.id) {
            case 'form-name':
            case 'form-booth-name':
            case 'form-student-name':
            case 'form-sponsor-name':
            case 'form-speaker-name':
            case 'deck-form-name':
            case 'form-school-contact-name':
            case 'form-hackathon-name':
                if (value === '') {
                    showError(field, t.nameRequired);
                    isValid = false;
                }
                break;
            
            case 'form-organization':
            case 'form-booth-company':
            case 'form-student-school':
            case 'form-sponsor-company':
            case 'form-speaker-job-org':
            case 'deck-form-organization':
            case 'form-school-name':
            case 'form-hackathon-school':
                if (value === '') {
                    let fieldName = '';
                    if (field.id.includes('booth') || field.id.includes('sponsor')) {
                        fieldName = isArabic ? 'الشركة' : 'Company';
                    } else if (field.id.includes('student') || field.id.includes('school') || field.id.includes('hackathon')) {
                        fieldName = isArabic ? 'المدرسة/المؤسسة' : 'School/Institution';
                    } else {
                        fieldName = isArabic ? 'المنظمة' : 'Organization';
                    }
                    showError(field, `${fieldName} ${isArabic ? 'مطلوبة.' : 'is required.'}`);
                    isValid = false;
                }
                break;
                
            case 'form-email':
            case 'form-booth-email':
            case 'form-student-email':
            case 'form-sponsor-email':
            case 'form-speaker-email':
            case 'deck-form-email':
            case 'form-school-email':
            case 'form-hackathon-email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value === '') {
                    showError(field, t.emailRequired);
                    isValid = false;
                } else if (!emailRegex.test(value)) {
                    showError(field, t.invalidEmail);
                    isValid = false;
                }
                break;
            
            case 'form-phone':
            case 'form-student-phone':
            case 'form-booth-phone':
            case 'form-sponsor-phone':
            case 'form-speaker-phone':
            case 'deck-form-phone':
            case 'form-school-phone':
            case 'form-hackathon-phone':
                const phoneRegex = /^\+?[\d\s()-]+$/;
                 if ((field.hasAttribute('required') && value === '')) {
                    showError(field, t.phoneRequired);
                    isValid = false;
                } else if (value !== '' && !phoneRegex.test(value)) {
                    showError(field, t.invalidPhone);
                    isValid = false;
                }
                break;

            case 'form-booth-title':
            case 'form-sponsor-title':
            case 'deck-form-designation':
                 if (value === '') {
                    const fieldName = (field.id === 'form-sponsor-title') ? (isArabic ? 'المنصب' : 'Position') : (field.id === 'deck-form-designation') ? (isArabic ? 'المسمى الوظيفي' : 'Designation') : (isArabic ? 'المسمى الوظيفي' : 'Job Title');
                    showError(field, `${fieldName} ${isArabic ? 'مطلوب.' : 'is required.'}`);
                    isValid = false;
                }
                break;
            
            case 'form-booth-website':
            case 'form-sponsor-website':
            case 'form-speaker-linkedin':
                const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/i;
                if (field.hasAttribute('required') && value === '') {
                     showError(field, t.websiteRequired);
                     isValid = false;
                } else if (value !== '' && !urlRegex.test(value)) {
                    showError(field, t.invalidWebsite);
                    isValid = false;
                }
                break;

            case 'form-speaker-headshot-upload':
                const files = input.files;
                if (!files || files.length === 0) {
                    showError(field, t.headshotRequired);
                    isValid = false;
                } else {
                    const file = files[0];
                    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
                    const maxSize = 10 * 1024 * 1024; // 10 MB

                    if (!allowedTypes.includes(file.type)) {
                        showError(field, t.invalidFileType);
                        isValid = false;
                    } else if (file.size > maxSize) {
                        showError(field, t.fileTooLarge);
                        isValid = false;
                    }
                }
                break;

            case 'form-sponsor-message':
            case 'form-speaker-why':
            case 'form-speaker-bio':
                if (textarea.value.trim() === '') {
                    showError(field, t.fieldRequired);
                    isValid = false;
                }
                break;
            
            case 'form-interest':
            case 'form-booth-package':
            case 'form-booth-source':
            case 'form-student-nationality':
            case 'form-student-grade':
            case 'form-student-source':
            case 'form-booth-country':
            case 'form-booth-company-field':
            case 'form-sponsor-country':
            case 'form-sponsor-company-field':
            case 'form-speaker-country':
            case 'form-school-country':
            case 'form-school-visit-date':
            case 'form-hackathon-grade':
                if (select.value === '') {
                    showError(field, t.selectionRequired);
                    isValid = false;
                }
                break;
            
            case 'form-school-student-count':
                if (value === '' || parseInt(value) < 1) {
                    showError(field, t.studentCountRequired);
                    isValid = false;
                }
                break;
            case 'form-school-grade-level':
                if (value === '') {
                    showError(field, t.gradeLevelRequired);
                    isValid = false;
                }
                break;

            case 'form-student-dob':
            case 'form-hackathon-dob':
                if (input.value === '') {
                     showError(field, t.dobRequired);
                     isValid = false;
                }
                break;
            
            case 'form-booth-consent':
            case 'form-student-consent':
            case 'form-sponsor-consent':
            case 'form-school-consent':
            case 'form-hackathon-consent':
                if (!checkbox.checked) {
                    showError(checkbox, t.consentRequired);
                    isValid = false;
                }
                break;
        }
        return isValid;
    }


    // --- Active Nav Link Highlighting ---
    function highlightActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || (isArabic ? 'index-ar.html' : 'index.html');
        const navLinks = document.querySelectorAll('#main-nav a.nav-link');

        navLinks.forEach(link => {
            const linkPage = (link as HTMLAnchorElement).href.split('/').pop();

            if (linkPage === currentPage) {
                link.classList.add('active');
                
                // For dropdowns, also highlight the parent
                const parentDropdown = link.closest('.has-dropdown');
                if (parentDropdown) {
                    parentDropdown.querySelector('a.nav-link')?.classList.add('active');
                }
            }
        });
    }


    // --- Mobile Navigation Logic ---
    function initializeMobileNav() {
        const header = document.getElementById('main-header');
        const navToggle = document.querySelector('.nav-toggle') as HTMLButtonElement;
        const mainNav = document.getElementById('main-nav');

        if (!header || !navToggle || !mainNav) return;
        
        // --- Inject mobile header language switcher ---
        if (header && navToggle && !header.querySelector('.mobile-header-lang-switcher')) {
            const mobileHeaderLangSwitcher = document.createElement('div');
            mobileHeaderLangSwitcher.classList.add('mobile-header-lang-switcher');
            const langLink = document.createElement('a');
            const langText = document.createElement('span');
            const flagImg = document.createElement('img');
            flagImg.className = 'lang-flag';

            if (isArabic) {
                const currentPage = window.location.pathname.split('/').pop() || 'index-ar.html';
                const englishPage = currentPage.replace('-ar.html', '.html');
                langLink.href = englishPage;
                langLink.hreflang = 'en';
                langLink.setAttribute('aria-label', 'Switch to English');
                langText.textContent = 'English';
                flagImg.src = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/flags/4x3/gb.svg';
                flagImg.alt = 'UK Flag';
            } else {
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                const arabicPage = currentPage.replace('.html', '-ar.html');
                langLink.href = arabicPage;
                langLink.hreflang = 'ar';
                langLink.setAttribute('aria-label', 'التحويل إلى العربية');
                langText.textContent = 'العربية';
                flagImg.src = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/flags/4x3/qa.svg';
                flagImg.alt = 'Qatar Flag';
            }

            langLink.appendChild(langText);
            langLink.appendChild(flagImg);
            mobileHeaderLangSwitcher.appendChild(langLink);
            
            // Insert before the nav toggle button
            navToggle.parentNode?.insertBefore(mobileHeaderLangSwitcher, navToggle);
        }

        // --- Inject mobile nav header and footer if they don't exist ---
        if (!mainNav.querySelector('.mobile-nav-header')) {
            const mobileNavHeader = document.createElement('div');
            mobileNavHeader.classList.add('mobile-nav-header');
    
            const logoLink = document.createElement('a');
            logoLink.href = isArabic ? "index-ar.html" : "index.html";
            logoLink.classList.add('mobile-nav-logo');
            const logoImg = document.createElement('img');
            logoImg.src = "https://res.cloudinary.com/dj3vhocuf/image/upload/f_auto,q_auto/v1761210698/logo500x250_i8opbv.webp";
            logoImg.alt = "Qatar Education Expo 2026 Logo";
            logoLink.appendChild(logoImg);
    
            mobileNavHeader.appendChild(logoLink);

            mainNav.prepend(mobileNavHeader);
        }

        if (!mainNav.querySelector('.mobile-nav-ctas')) {
            const mobileNavCtas = document.createElement('div');
            mobileNavCtas.classList.add('mobile-nav-ctas');
            
            const boothBtn = document.createElement('a');
            boothBtn.href = isArabic ? "booth-registration-ar.html" : "booth-registration.html";
            boothBtn.className = "btn btn-primary";
            boothBtn.textContent = t.bookABooth;

            const sponsorBtn = document.createElement('a');
            sponsorBtn.href = isArabic ? "sponsorship-registration-ar.html" : "sponsorship-registration.html";
            sponsorBtn.className = "btn btn-primary";
            sponsorBtn.textContent = t.sponsorNow;

            mobileNavCtas.appendChild(boothBtn);
            mobileNavCtas.appendChild(sponsorBtn);
            mainNav.appendChild(mobileNavCtas);
        }

        navToggle.addEventListener('click', () => {
        header.classList.toggle('nav-open');
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        
        if (header.classList.contains('nav-open')) {
            (mainNav.querySelector('a') as HTMLAnchorElement)?.focus();
        } else {
            navToggle.focus();
        }
        });

        // Close menu when a link is clicked
        mainNav.addEventListener('click', (e) => {
            const link = (e.target as HTMLElement).closest('a');
            if (!link) return;
            
            // If it's a dropdown toggle, the dropdown logic will handle it, so we don't close the main nav.
            if (link.parentElement?.classList.contains('has-dropdown') && window.innerWidth <= 992) {
                // Check if it's the main link of the dropdown, not a sub-link
                if(link.classList.contains('nav-link')) {
                    return; 
                }
            }

            // If it's a regular link inside the mobile nav, close it.
            if (header.classList.contains('nav-open')) {
                header.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
    }
    
    // --- Dropdown Navigation Logic ---
    function initializeDropdowns() {
        const dropdowns = document.querySelectorAll('.has-dropdown');

        dropdowns.forEach((dropdown, index) => {
            const toggle = dropdown.querySelector('a.nav-link') as HTMLAnchorElement;
            const menu = dropdown.querySelector('.dropdown-menu') as HTMLElement;
            // FIX: Use querySelector with a generic type parameter (<HTMLElement>) to ensure the 'icon' constant
            // is correctly typed as 'HTMLElement | null'. This allows safe access to the 'style' property
            // within the 'if (icon)' block, resolving the "Property 'style' does not exist on type 'Element'" error.
            const icon = toggle.querySelector<HTMLElement>('i.fa-angle-down');

            if (!toggle || !menu) return;

            const menuId = `dropdown-menu-${index}`;
            toggle.setAttribute('aria-haspopup', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            menu.id = menuId;
            toggle.setAttribute('aria-controls', menuId);
            
            const handleToggle = (e: Event) => {
                e.preventDefault();
                const isCurrentlyOpen = dropdown.classList.contains('dropdown-open');

                document.querySelectorAll('.has-dropdown.dropdown-open').forEach(openDropdown => {
                    if (openDropdown !== dropdown) {
                        openDropdown.classList.remove('dropdown-open');
                        openDropdown.querySelector('a')?.setAttribute('aria-expanded', 'false');
                    }
                });

                if (isCurrentlyOpen) {
                    dropdown.classList.remove('dropdown-open');
                    toggle.setAttribute('aria-expanded', 'false');
                } else {
                    dropdown.classList.add('dropdown-open');
                    toggle.setAttribute('aria-expanded', 'true');
                }
            };

            // "Split button" behavior on mobile
            if (window.innerWidth <= 992) {
                if(icon) {
                    // Make the icon a separate, larger tap target
                    icon.style.padding = '0.5rem';
                    icon.style.margin = '-0.5rem';

                    // Clicking the icon only toggles
                    icon.addEventListener('click', handleToggle);
                    
                    // Clicking the main link should still navigate, so we don't add a listener to the `toggle` itself
                } else {
                     // Fallback for dropdowns without icons (if any)
                    toggle.addEventListener('click', handleToggle);
                }

            } else {
                // Standard click-to-toggle behavior on desktop
                toggle.addEventListener('click', handleToggle);
            }
        });
        
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;

            // Do not close if the click is on the dropdown toggle itself (either link or icon)
            if (target.closest('.has-dropdown > a.nav-link')) {
                return;
            }
            
            // Close all dropdowns if clicking anywhere else
            document.querySelectorAll('.has-dropdown.dropdown-open').forEach(openDropdown => {
                openDropdown.classList.remove('dropdown-open');
                openDropdown.querySelector('a')?.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- Countdown Timer Logic ---
    function initializeMainCountdown() {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const countdownContainer = document.getElementById('countdown-timer');

        if (daysEl && hoursEl && minutesEl && secondsEl && countdownContainer) {
            const countdownDate = new Date('2026-04-19T08:00:00').getTime();

            const triggerUpdateAnimation = (element: HTMLElement | null) => {
                if (!element) return;
                const parentUnit = element.closest('.timer-unit');
                if (parentUnit) {
                    parentUnit.classList.add('updated');
                    parentUnit.addEventListener('animationend', () => {
                        parentUnit.classList.remove('updated');
                    }, { once: true });
                }
            };

            const timerInterval = setInterval(() => {
                const now = new Date().getTime();
                const distance = countdownDate - now;

                if (distance < 0) {
                    clearInterval(timerInterval);
                    countdownContainer.innerHTML = `<h4>${t.eventHasStarted}</h4>`;
                    return;
                }

                const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
                const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
                const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
                const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
                
                if (daysEl.textContent !== days) {
                    daysEl.textContent = days;
                    triggerUpdateAnimation(daysEl);
                }
                if (hoursEl.textContent !== hours) {
                    hoursEl.textContent = hours;
                    triggerUpdateAnimation(hoursEl);
                }
                if (minutesEl.textContent !== minutes) {
                    minutesEl.textContent = minutes;
                    triggerUpdateAnimation(minutesEl);
                }
                if (secondsEl.textContent !== seconds) {
                    secondsEl.textContent = seconds;
                    triggerUpdateAnimation(secondsEl);
                }
            }, 1000);
        }
    }
    
    // --- Early Bird Countdown Timer ---
    function initializeEarlyBirdCountdown() {
        const countdownContainer = document.getElementById('early-bird-countdown');
        if (!countdownContainer) return;

        const daysEl = document.getElementById('eb-days');
        const hoursEl = document.getElementById('eb-hours');
        const minutesEl = document.getElementById('eb-minutes');
        const secondsEl = document.getElementById('eb-seconds');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        // The early bird offer ends on the morning of Nov 20, 2025.
        const countdownDate = new Date('2025-11-20T08:00:00').getTime();

        const timerInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(timerInterval);
                countdownContainer.innerHTML = `<h4>${t.earlyBirdEnded}</h4>`;
                return;
            }

            const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
            const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
            
            daysEl.textContent = days;
            hoursEl.textContent = hours;
            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;

        }, 1000);
    }


    // --- Form Initializers ---
    function initializeContactForm() {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        const successMessage = document.getElementById('form-success-message');
        if (!form || !successMessage) return;

        const inputs: HTMLElement[] = Array.from(form.querySelectorAll('[required]'));
        inputs.forEach(input => {
            const eventType = input.tagName.toLowerCase() === 'select' ? 'change' : 'input';
            input.addEventListener(eventType, () => validateField(input));
        });

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const isFormValid = inputs.map(input => validateField(input)).every(Boolean);

            if (isFormValid) {
                const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = t.submitting;
                }

                const googleSheetWebAppUrl = 'https://script.google.com/macros/s/AKfycbxUS76iFHL00oqCytiDjvpPfY9wONwwttdI00R6nhhoAkyED2ogZviUb3yXXRDAqAs7tg/exec';
                const basinEndpoint = 'https://usebasin.com/f/8b6d8aeec167';

                try {
                    const formData = new FormData(form);
                    
                    const googleSheetResponse = await fetch(googleSheetWebAppUrl, {
                        method: 'POST',
                        body: new URLSearchParams(formData as any)
                    });

                    if (!googleSheetResponse.ok) {
                        throw new Error(`Google Sheets submission failed. Status: ${googleSheetResponse.status}`);
                    }

                    const result = await googleSheetResponse.json();
                    if (result.result !== 'success') {
                        throw new Error(result.error || 'The script returned an unknown error. Please check the sheet name and headers.');
                    }

                    fetch(basinEndpoint, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    }).catch(err => {
                        console.error('Basin form submission failed:', err);
                    });

                    // --- Trigger download AFTER successful submission ---
                    if ((form.querySelector('#form-interest') as HTMLSelectElement)?.value === 'exhibiting') {
                        const link = document.createElement('a');
                        link.href = '/assets/EduExpoQatar2026-Sponsorship-Deck.pdf';
                        link.download = 'EduExpoQatar2026-Sponsorship-Deck.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }

                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                    window.scrollTo(0, 0);

                } catch (error) {
                    console.error('Submission error:', error);
                    alert(t.submissionErrorInquiry + (error as Error).message);
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = t.submitInquiry;
                    }
                }
            } else {
                const firstInvalidField = form.querySelector('.invalid, .error-message[style*="block"]');
                if (firstInvalidField) {
                    firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    function initializeStudentRegistrationForm() {
        const form = document.getElementById('student-registration-form') as HTMLFormElement;
        const successMessage = document.getElementById('student-form-success');
        if (!form || !successMessage) return;

        const inputs: HTMLElement[] = Array.from(form.querySelectorAll('[required]'));
        const interestsContainer = document.getElementById('form-student-interests');
        const otherCheckbox = document.getElementById('interest-other') as HTMLInputElement;
        const otherInterestGroup = document.getElementById('other-interest-group') as HTMLElement;
        const otherTextInput = document.getElementById('interest-other-text') as HTMLInputElement;

        if (otherCheckbox && otherInterestGroup && otherTextInput) {
            otherCheckbox.addEventListener('change', () => {
                otherInterestGroup.style.display = otherCheckbox.checked ? 'block' : 'none';
                if (!otherCheckbox.checked) {
                    otherTextInput.value = ''; // Clear value when unchecked
                    clearError(otherTextInput); // Also clear potential errors
                }
            });
        }

        const validateInterestCheckboxes = (): boolean => {
            if (!interestsContainer) return true;
            const checkedCheckboxes = interestsContainer.querySelectorAll('input[type="checkbox"]:checked');
            const isGroupValid = checkedCheckboxes.length > 0;

            if (!isGroupValid) {
                showError(interestsContainer, t.interestRequired);
                return false;
            }

            clearError(interestsContainer);

            if (otherCheckbox?.checked && otherTextInput?.value.trim() === '') {
                showError(otherTextInput, t.specifyInterest);
                return false;
            }

            if (otherTextInput) clearError(otherTextInput);

            return true;
        };

        inputs.forEach(input => {
            const eventType = ['select-one', 'date', 'checkbox'].includes((input as HTMLInputElement).type) ? 'change' : 'input';
            input.addEventListener(eventType, () => validateField(input));
        });

        interestsContainer?.addEventListener('change', validateInterestCheckboxes);

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const isFormValid = inputs.map(input => validateField(input)).every(Boolean);
            const areCheckboxesValid = validateInterestCheckboxes();

            if (isFormValid && areCheckboxesValid) {
                const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = t.submitting;
                }

                // =========================================================================================
                // --- ROBUST GOOGLE SHEETS INTEGRATION ---
                // =========================================================================================
                // !! CRITICAL INSTRUCTIONS !!
                // 1. Follow the guide in the documentation to create and deploy your Google Apps Script.
                // 2. Make sure you select "Anyone" for "Who has access".
                // 3. After deploying, Google will give you a new "Web app URL".
                // 4. **PASTE THE NEW URL BELOW** to replace the placeholder.
                //
                // The old URL 'AK...Na' will not work if you have made changes or if permissions are wrong.
                // A new deployment is ALWAYS required.
                // =========================================================================================
                const googleSheetWebAppUrl = 'https://script.google.com/macros/s/AKfycbwHIEFWVu-5cIqrbW8pV5MSobkrTEq05kxi7aTcIwkfAGpC6ulVoo3tlrq16y3qoZXs/exec';

                // FIX: Removed redundant developer check for a placeholder URL, which was causing a TypeScript error
                // because the comparison against a hardcoded URL would always be false.
                
                try {
                    const formData = new FormData(form);
                    const response = await fetch(googleSheetWebAppUrl, {
                        method: 'POST',
                        body: new URLSearchParams(formData as any)
                    });

                    if (response.ok) {
                        const result = await response.json();
                        if (result.result === 'success') {
                            // The script confirmed the data was saved!
                            form.style.display = 'none';
                            successMessage.style.display = 'block';
                            window.scrollTo(0, 0);
                        } else {
                            // The script reported an error (e.g., sheet not found).
                            throw new Error(result.error || 'The script returned an unknown error.');
                        }
                    } else {
                        // The network request itself failed (e.g., URL is wrong, server error).
                        throw new Error(`Submission failed. Status: ${response.status}`);
                    }
                } catch (error) {
                    console.error('Submission Error:', error);
                    alert(t.submissionErrorRegistration + (error as Error).message);
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = t.registerNow;
                    }
                }
            } else {
                const firstInvalidField = form.querySelector('.invalid, .error-message[style*="block"]');
                if (firstInvalidField) {
                    firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
    
    function initializeBoothRegistrationForm() {
        const form = document.getElementById('booth-registration-form') as HTMLFormElement;
        const successMessage = document.getElementById('booth-form-success');
        if (!form || !successMessage) return;

        const inputs: HTMLElement[] = Array.from(form.querySelectorAll('[required]'));
        const packageSelect = document.getElementById('form-booth-package') as HTMLSelectElement;
        const boothIdInput = document.getElementById('form-booth-id') as HTMLInputElement;

        // Pre-fill form from URL parameters
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const pkg = urlParams.get('package');
            const boothId = urlParams.get('boothId');
            
            if (pkg && packageSelect) {
                const option = Array.from(packageSelect.options).find(opt => opt.value.toLowerCase() === pkg.toLowerCase());
                if(option) option.selected = true;
            }
            if (boothId && boothIdInput) boothIdInput.value = boothId;
        } catch (e) {
            console.error("Error processing URL parameters:", e);
        }

        inputs.forEach(input => {
            const eventType = ['select-one', 'checkbox'].includes((input as HTMLInputElement).type) ? 'change' : 'input';
            input.addEventListener(eventType, () => validateField(input));
        });

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const isFormValid = inputs.map(input => validateField(input)).every(Boolean);

            if (isFormValid) {
                const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = t.submitting;
                }

                // =========================================================================================
                // --- ROBUST GOOGLE SHEETS INTEGRATION FOR BOOTH REGISTRATIONS ---
                // =========================================================================================
                // !! CRITICAL INSTRUCTIONS !!
                // 1. Create a new, separate Google Sheet for booth registrations.
                // 2. IMPORTANT: Rename the first sheet (the tab at the bottom) to exactly "BoothRegistrations".
                // 3. In the first row of the "BoothRegistrations" sheet, add these exact headers:
                //    Timestamp, form_source, name, country, phone, email, website, company, job_title, company_field, package, booth_id, source, message, consent
                // 4. Go to Extensions > Apps Script and paste the universal script code.
                // 5. Click Deploy > New deployment.
                // 6. Choose "Web app", set "Who has access" to "Anyone", and click Deploy.
                // 7. Copy the NEW Web app URL and paste it into the constant below.
                // =========================================================================================
                const googleSheetWebAppUrl = 'https://script.google.com/macros/s/AKfycbxW3MBK-rPB1L2rOKMQ9mqkeGagcrnDcFpT7cZYvEFy4WzNxxnU2ZzLnMAQGwvSZZaQ/exec';
                
                try {
                    const formData = new FormData(form);
                    const response = await fetch(googleSheetWebAppUrl, {
                        method: 'POST',
                        body: new URLSearchParams(formData as any)
                    });

                    if (response.ok) {
                        const result = await response.json();
                        if (result.result === 'success') {
                            // The script confirmed the data was saved!
                            form.style.display = 'none';
                            successMessage.style.display = 'block';
                            window.scrollTo(0, 0);
                        } else {
                            // The script reported an error (e.g., sheet not found).
                            throw new Error(result.error || 'The script returned an unknown error.');
                        }
                    } else {
                        // The network request itself failed.
                        throw new Error(`Submission failed. Status: ${response.status}`);
                    }
                } catch (error) {
                    console.error('Booth Registration Error:', error);
                    alert(t.submissionErrorRegistration + (error as Error).message);
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = t.submitRegistration;
                    }
                }
            } else {
                const firstInvalidField = form.querySelector('.invalid, .error-message[style*="block"]');
                if (firstInvalidField) {
                    firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    function initializeSponsorshipRegistrationForm() {
        const form = document.getElementById('sponsorship-registration-form') as HTMLFormElement;
        const successMessage = document.getElementById('sponsor-form-success');
        if (!form || !successMessage) return;
    
        const inputs: HTMLElement[] = Array.from(form.querySelectorAll('[required]'));
        inputs.forEach(input => {
            const eventType = ['select-one', 'textarea', 'checkbox'].includes((input as HTMLInputElement).type) ? 'change' : 'input';
            input.addEventListener(eventType, () => validateField(input));
        });
    
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
    
            const isFormValid = inputs.map(input => validateField(input)).every(Boolean);
    
            if (isFormValid) {
                const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = t.submitting;
                }
    
                // =========================================================================================
                // --- ROBUST GOOGLE SHEETS INTEGRATION FOR SPONSORSHIPS ---
                // =========================================================================================
                // !! CRITICAL INSTRUCTIONS !!
                // 1. Create a new, separate Google Sheet for sponsorship inquiries.
                // 2. IMPORTANT: Rename the first sheet (the tab at the bottom) to exactly "SponsorshipRegistrations".
                // 3. In the first row of the "SponsorshipRegistrations" sheet, add these exact headers:
                //    Timestamp, form_source, name, country, phone, email, website, company, job_title, company_field,