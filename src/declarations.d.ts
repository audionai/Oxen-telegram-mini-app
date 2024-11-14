interface Window {
  Telegram: {
    WebApp: {
      ready: () => void;
      expand: () => void;
      setHeaderColor: (color: string) => void;
      initDataUnsafe?: {
        user: {
          username: string;
          first_name: string;
          last_name: string;
        };
      };
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