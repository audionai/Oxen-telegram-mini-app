// src/telegram-webapp.d.ts
declare global {
    interface Window {
      Telegram: {
        WebApp: {
          initDataUnsafe?: {
            user: {
              username: string;
              first_name: string;
              last_name: string;
            };
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
  }
  
  export {};
  