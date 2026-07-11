// Scrape and compile the open transcript into a single text block
function extractYouTubeTranscript() {
    let fullText = "";
    const segments = document.querySelectorAll('ytd-transcript-segment-renderer .segment-text');
    
    if (segments.length === 0) {
        console.warn("No transcript found. Please ensure the transcript panel is open.");
        return;
    }

    segments.forEach(segment => {
        // Clean up formatting and append to our main string
        fullText += segment.innerText.trim().replace(/\n/g, ' ') + " ";
    });

    console.log("=== TRANSCRIPT EXTRACTION COMPLETE ===");
    console.log(fullText);
    
    // Optional: Auto-copy to clipboard
    navigator.clipboard.writeText(fullText).then(() => {
         console.log("Transcript successfully copied to your clipboard!");
    });
}

extractYouTubeTranscript();
