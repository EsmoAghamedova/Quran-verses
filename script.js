async function randomVerse() {

    const surahNo = Math.floor(Math.random() * 114) + 1

    const response = await fetch(`https://quranapi.pages.dev/api/${surahNo}.json`)
    const data = await response.json()

    const ayahNo = Math.floor(Math.random() * data.totalAyah)

    return {
        surah: data.surahName,
        ayah: ayahNo + 1,
        english: data.english[ayahNo],
        arabic: data.arabic1[ayahNo]
    }
}

async function showVerse() {

    const verse = await randomVerse()

    document.getElementById("arabic").textContent = verse.arabic
    document.getElementById("english").textContent = verse.english
    document.getElementById("reference").textContent =
        verse.surah + " : " + verse.ayah
}