import React from "react";

export type IconName =
  | "arac"
  | "belge"
  | "chevron"
  | "direksiyon"
  | "duraklat"
  | "oynat"
  | "kapat"
  | "kisi"
  | "kontrol-listesi"
  | "konum"
  | "menu"
  | "ok-sag"
  | "ok-sol"
  | "telefon"
  | "whatsapp";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, className, ...rest }: IconProps) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className,
    ...rest,
  };

  switch (name) {
    case "arac":
      return (
        <svg {...common}>
          <path d="m4 11 2-6h12l2 6M3 17v3m18-3v3M3 17h18v-5l-2-2H5l-2 2zM6 14h2m8 0h2" />
        </svg>
      );
    case "belge":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6m-6 4h6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "direksiyon":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2" />
          <path d="M4 9h16M10.5 13.5 8 20m5.5-6.5L16 20" />
        </svg>
      );
    case "duraklat":
      return (
        <svg {...common}>
          <path d="M9 5v14m6-14v14" />
        </svg>
      );
    case "oynat":
      return (
        <svg {...common}>
          <polygon points="7 5 19 12 7 19 7 5" />
        </svg>
      );
    case "kapat":
      return (
        <svg {...common}>
          <path d="m5 5 14 14M19 5 5 19" />
        </svg>
      );
    case "kisi":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="4" />
          <path d="M4 21v-2a8 6 0 0 1 16 0v2" />
        </svg>
      );
    case "kontrol-listesi":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4V2h6v2M8 10l1 1 2-2m2 1h3m-8 6 1 1 2-2m2 1h3" />
        </svg>
      );
    case "konum":
      return (
        <svg {...common}>
          <path d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    case "ok-sag":
      return (
        <svg {...common}>
          <path d="M3 12h17m-6-6 6 6-6 6" />
        </svg>
      );
    case "ok-sol":
      return (
        <svg {...common}>
          <path d="M21 12H4m6-6-6 6 6 6" />
        </svg>
      );
    case "telefon":
      return (
        <svg {...common}>
          <path d="m7 3 3 4-2 3c1 3 3 5 6 6l3-2 4 3v2c0 1-1 2-3 2C10 21 3 14 3 6c0-2 1-3 2-3z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M4 17 3 21l4-1a9 9 0 1 0-3-3Z" />
          <path d="M9 8c-1 0-1 1 0 3s3 4 5 4l2-1-2-2-1 1c-1 0-2-1-2-2l1-1-1-2z" />
        </svg>
      );
  }
}
