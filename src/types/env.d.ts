declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SMTP_EMAIL: string;
      SMTP_PASSWORD: string;
      RECIPIENT_EMAIL: string;
    }
  }
}

export {};
