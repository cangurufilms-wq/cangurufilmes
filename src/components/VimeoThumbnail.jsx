import React, { useState, useEffect } from 'react';

const cache = {};

const VimeoThumbnail = ({ videoId, alt, className }) => {
  const [src, setSrc] = useState(`https://vumbnail.com/${videoId}.jpg`);

  useEffect(() => {
    if (cache[videoId]) {
      setSrc(cache[videoId]);
      return;
    }
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}&width=1920`)
      .then(r => r.json())
      .then(data => {
        if (data.thumbnail_url) {
          const hd = data.thumbnail_url.replace(/_\d+(?=\.\w+$)/, '_1920');
          cache[videoId] = hd;
          setSrc(hd);
        }
      })
      .catch(() => {});
  }, [videoId]);

  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default VimeoThumbnail;
