export interface Translation {
  navbar: {
    home: string;
    services: string;
    about: string;
    contact: string;
    testimonials: string;
  };
  direction: string;

  hero: {
    doctorName: string;
    title: string;
    description: string;
    subtitle: string;
    doctorTitle: string;
    buttons: {
      whatsapp: string;
      call: string;
      instagram: string;
    };
  };
  services: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  about: {
    title: string;
    description: string;
    doctor: {
      name: string;
      title: string;
      qualifications: string;
      experience: string;
      highlights: {
        graduation: string;
        fellowship: string;
        specialization: string;
        approach: string;
      };
    };
  };
  testimonials: {
    title: string;
    description: string;
    items: {
      name: string;
      role: string;
      quote: string;
      image: string | null;
      rating: number;
      date: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    location: {
      title: string;
      address: string;
      landmarks: {
        title: string;
        items: string[];
      };
    };
  };
  footer: {
    contactUs: string;
    phone: string;
    whatsapp: string;
    email: string;
    location: {
      title: string;
      address: string[];
      nearBy: string;
    };
    followUs: string;
    workingHours: {
      title?: string;
      weekdays?: string;
      saturday?: string;
      sunday?: string;
      emergency: string;
    };
    rights: string;
    privacy: string;
    terms: string;
    sitemap: string;
  };
}
