import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: any) => void;
      };
    };
  }
}

const VoiceflowWidget: React.FC = () => {
  useEffect(() => {
    // Create and load the Voiceflow script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    
    script.onload = () => {
      if (window.voiceflow) {
        window.voiceflow.chat.load({
          verify: { projectID: '68b70ce1a629cab2e98a2434' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          assistant: {
            stylesheet: `
              .vfrc-widget--launcher {
                bottom: 120px !important;
                right: 20px !important;
                z-index: 9999 !important;
              }
              .vfrc-widget--chat {
                bottom: 120px !important;
                right: 20px !important;
                z-index: 9999 !important;
              }
            `
          },
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
    };

    // Insert the script into the document
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default VoiceflowWidget;