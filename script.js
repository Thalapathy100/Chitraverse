function generateImage() {
  const prompt = document.getElementById("promptInput").value;
  const imageURL = `https://www.mage.space/?q=${encodeURIComponent(prompt)}`;
  document.getElementById("imageFrame").src = imageURL;
}

function generateVideo() {
  const prompt = document.getElementById("promptInput").value;
  const videoURL = `https://app.genmo.ai/?prompt=${encodeURIComponent(prompt)}`;
  document.getElementById("videoFrame").src = videoURL;
}
