import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  text?: string;
  color?: string;
  textColor?: string;
  className?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (config: any) => void;
      initPopupWidget: (config: any) => void;
      openPopupWidget: (url: string) => void;
    };
  }
}

export const CalendlyWidget = ({ 
  url, 
  text = 'Schedule time with me', 
  color = '#a4133c', 
  textColor = '#ffffff',
  className = ''
}: CalendlyWidgetProps) => {
  useEffect(() => {
    // Initialize Calendly badge widget
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url,
        text,
        color,
        textColor
      });
    }
  }, [url, text, color, textColor]);

  return null; // This component doesn't render anything visible
};

export const CalendlyPopupButton = ({ 
  url, 
  children, 
  className = '',
  ...props 
}: { 
  url: string; 
  children: React.ReactNode; 
  className?: string;
  [key: string]: any;
}) => {
  const handleClick = () => {
    if (window.Calendly) {
      window.Calendly.openPopupWidget(url);
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export const CalendlyInlineWidget = ({ 
  url, 
  className = '',
  ...props 
}: { 
  url: string; 
  className?: string;
  [key: string]: any;
}) => {
  useEffect(() => {
    // Initialize Calendly inline widget
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url,
        parentElement: document.querySelector('.calendly-inline-widget')
      });
    }
  }, [url]);

  return (
    <div 
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
      {...props}
    />
  );
}; 