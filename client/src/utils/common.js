export function convertToEmbedUrl(url) {
  const videoId = url.split('/').pop();
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}