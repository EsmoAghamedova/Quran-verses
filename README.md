# 📖 Random Quran Verse Generator

A simple web project that generates a **random verse from the Quran**
using an API.\
It displays the **Arabic text, English translation, reference (Surah and
Ayah)** and also **plays the recitation audio**.

This project was built using **HTML, CSS, and JavaScript**.

------------------------------------------------------------------------

## ✨ Features

-   🎲 Generates a **random Surah and Ayah**
-   📜 Displays **Arabic text**
-   🌍 Shows **English translation**
-   🔊 Plays **audio recitation**
-   📌 Shows **Surah name and Ayah number**

------------------------------------------------------------------------

## ⚙️ How It Works

1.  The program randomly selects a **Surah number between 1 and 114**.
2.  It fetches Surah data from the Quran API.
3.  Using `totalAyah`, it randomly selects an **Ayah from that Surah**.
4.  The verse content is displayed on the page.
5.  The corresponding **audio recitation is played automatically**.

------------------------------------------------------------------------

## 🧠 Main JavaScript Logic

``` javascript
async function randomVerse() {

    const surahNo = Math.floor(Math.random() * 114) + 1

    const response = await fetch(`https://quranapi.pages.dev/api/${surahNo}.json`)
    const data = await response.json()

    const ayahNo = Math.floor(Math.random() * data.totalAyah)

    return {
        surah: data.surahName,
        ayah: ayahNo + 1,
        english: data.english[ayahNo],
        arabic: data.arabic1[ayahNo],
        audio: data.audio[ayahNo],
    }
}

async function showVerse() {

    const verse = await randomVerse()

    document.getElementById("arabic").textContent = verse.arabic
    document.getElementById("english").textContent = verse.english
    document.getElementById("reference").textContent =
        verse.surah + " : " + verse.ayah

    const audio = document.getElementById("audio")
    audio.src = verse.audio
    audio.play()
}
```

------------------------------------------------------------------------

## 🧩 Technologies Used

-   HTML
-   CSS
-   JavaScript
-   Quran API

API Source: https://quranapi.pages.dev

------------------------------------------------------------------------

## 🚀 Future Improvements

-   Add more translations
-   Add different reciters
-   Add Surah search
-   Improve UI design
-   Add daily verse feature

------------------------------------------------------------------------

## 🤲 Purpose

This project was created to make it easier to **read and listen to
random verses from the Quran**, helping users reflect and learn from the
Quran in a simple way.
