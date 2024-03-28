import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faReddit } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTimes} from '@fortawesome/free-solid-svg-icons';

const ShareModal = ({ url, isOpen, onClose }: { url: string, isOpen: boolean, onClose: () => void }) => {
  const [copied, setCopied] = useState(false);

  const socialMedia = [
    { name: 'Facebook', icon: faFacebook, shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { name: 'WhatsApp', icon: faWhatsapp, shareUrl: `https://api.whatsapp.com/send?text=${url}` },
    { name: 'Email', icon: faEnvelope, shareUrl: `mailto:?body=${url}` },
    { name: 'Reddit', icon: faReddit, shareUrl: `https://reddit.com/submit?url=${url}` },
    
  ];

  const handleSocialShare = (shareUrl: string) => {
    window.open(shareUrl, '_blank');
    onClose();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

   // Closes the modal when the user clicks outside of it
   const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as Element).id === "modal-backdrop") {
        onClose();
    }
};

  if (!isOpen) return null;

  return (
    <div    id="modal-backdrop" onClick={handleOutsideClick} className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
    {/* <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"> */}
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
        {/* <div className="mt-3 text-center"> */}
        {/* <div className="flex justify-between items-center mb-4"> */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Share</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                    </div>
          <div className="mt-2 px-7 py-3">
            {socialMedia.map((media) => (
              <button key={media.name} onClick={() => handleSocialShare(media.shareUrl)} className="m-1">
                <FontAwesomeIcon icon={media.icon} size="4x" />
              </button>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            <input type="text" readOnly value={url} className="input w-full border mr-2" />
            <button onClick={copyToClipboard} className="copy-btn">Copy</button>
          </div>
          {copied && <span className="text-sm text-green-500">Copied!</span>}
          <div className="items-center px-4 py-3">
           
          </div>
        </div>
      </div>
      
  );
};
export default ShareModal;