interface Window {
  Telegram: {
    WebApp: {
      initDataUnsafe?: {
        user: User;
      };
    
      ready: () => void;
      expand: () => void;
      setHeaderColor: (color: string) => void;
      MainButton: {
        setText: (text: string) => void;
        show: () => void;
        onClick: (callback: () => void) => void;
      };
      BackButton: {
        show: () => void;
        onClick: (callback: () => void) => void;
      };
      setBackgroundColor: (color: string) => void;
    };
  };
}
declare module '@fontsource/poppins';
declare module '@fontsource/noto-emoji';