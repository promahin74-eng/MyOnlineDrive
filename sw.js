self.addEventListener('install', (event) => {
    console.log('Service Worker Installed');
});

self.addEventListener('fetch', (event) => {
    // এটি ব্রাউজারকে বোঝায় যে অ্যাপটি অফলাইনে কাজ করার জন্য প্রস্তুত
});
