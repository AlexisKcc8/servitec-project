import {
  CircleCheckBig,
  Cpu,
  Grid2x2Check,
  Headset,
  ShieldCheck,
  ShoppingCart,
  Smile,
  Tag,
  Truck,
  UserCheck,
} from "lucide-react";

export const iconsHero = [
  {
    title: "Laptop",
    src: "/icons/laptop.svg",
    top: "15%",
    left: "20%",
    delay: "3s",
  },
  {
    title: "Audifonos",
    src: "/icons/audifonos.svg",
    top: "60%",
    left: "80%",
    delay: "2s",
  },
  {
    title: "ScrewDriver",
    src: "/icons/screwDriver.svg",
    top: "10%",
    left: "55%",
    delay: "1s",
  },
  {
    title: "Usb",
    src: "/icons/usb.svg",
    top: "20%",
    left: "80%",
    delay: "3s",
  },
  {
    title: "Windows",
    src: "/icons/windows.svg",
    top: "55%",
    left: "5%",
    delay: "1s",
  },
];

export const purchaseMethod = [
  {
    id: crypto.randomUUID(),
    text: "Selecciona tu producto.",
  },
  {
    id: crypto.randomUUID(),
    text: "Contacta con nosotros",
  },
  {
    id: crypto.randomUUID(),
    text: "Selecciona el método de pago (efectivo/transferencia).",
  },
  {
    id: crypto.randomUUID(),
    text: "Envia el comprobante de pago en caso de ser transferencia.",
  },
  {
    id: crypto.randomUUID(),
    text: "Envió de producto u obtener en sucursal.",
  },
];

export const productsBrands = [
  {
    id: crypto.randomUUID(),
    name: "kingtons",
    urlBrand: "/imgs/our-brands/logo-kingston.svg",
  },
  {
    id: crypto.randomUUID(),
    name: "elegate",
    urlBrand: "/imgs/our-brands/logo-elegate.svg",
  },
  {
    id: crypto.randomUUID(),
    name: "ios",
    urlBrand: "/imgs/our-brands/logo-ios.svg",
  },
  {
    id: crypto.randomUUID(),
    name: "moreka",
    urlBrand: "/imgs/our-brands/logo-moreka.svg",
  },
  {
    id: crypto.randomUUID(),
    name: "motorola",
    urlBrand: "/imgs/our-brands/logo-motorola.svg",
  },
  {
    id: crypto.randomUUID(),
    name: "samsung",
    urlBrand: "/imgs/our-brands/logo-samsung.svg",
  },
  {
    id: crypto.randomUUID(),
    name: "stylos",
    urlBrand: "/imgs/our-brands/logo-stylos.svg",
  },
  {
    id: crypto.randomUUID(),
    name: "tpLink",
    urlBrand: "/imgs/our-brands/logo-tplink.svg",
  },
];

export const ourServices = [
  {
    id: crypto.randomUUID(),
    name: "Reparación y mantenimiento a equipos de computo",
    description:
      "Realizamos una limpieza profunda, resolvemos problemas técnicos y llevamos a cabo actualizaciones de hardware para optimizar el rendimiento de tu computadora, dejándola como nueva y lista para cualquier tarea.",
    images: {
      imagenAvif:
        "/imgs/our-brands/our-services/Reparación_y_mantenimiento_a_equipos_de_computo.avif",
      imagenWebp:
        "/imgs/our-brands/our-services/Reparación_y_mantenimiento_a_equipos_de_computo.webp",
      imagenJpg:
        "/imgs/our-brands/our-services/Reparación_y_mantenimiento_a_equipos_de_computo.jpg",
      imagenAvifDesktop:
        "/imgs/our-brands/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-brands/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-brands/our-services/Reparación_y_mantenimiento_a_equipos_de_computo-laptop.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Instalación de sistema operativo (Windows) y paquetería Office",
    description:
      "Instalamos y configuramos Windows junto con la paquetería Office para que tu equipo esté listo para usarse de inmediato, sin complicaciones ni estrés.",
    images: {
      imagenAvif:
        "/imgs/our-brands/our-services/instalación-de-sistema-operativo.avif",
      imagenWebp:
        "/imgs/our-brands/our-services/instalación-de-sistema-operativo.webp",
      imagenJpg:
        "/imgs/our-brands/our-services/instalación-de-sistema-operativo.jpg",
      imagenAvifDesktop:
        "/imgs/our-brands/our-services/instalación-de-sistema-operativo-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-brands/our-services/instalación-de-sistema-operativo-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-brands/our-services/instalación-de-sistema-operativo-laptop.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Reparación de equipos móviles (Android/IOS)",
    description:
      "Reparamos tu dispositivo móvil con cuidado y precisión, ya sea por una pantalla rota, problemas de batería u otros fallos, para que puedas disfrutarlo como nuevo nuevamente.",
    images: {
      imagenAvif:
        "/imgs/our-brands/our-services/Reparación-de-equipos-móviles.avif",
      imagenWebp:
        "/imgs/our-brands/our-services/Reparación-de-equipos-móviles.webp",
      imagenJpg:
        "/imgs/our-brands/our-services/Reparación-de-equipos-móviles.jpg",
      imagenAvifDesktop:
        "/imgs/our-brands/our-services/Reparación-de-equipos-móviles-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-brands/our-services/Reparación-de-equipos-móviles-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-brands/our-services/Reparación-de-equipos-móviles-laptop.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Configuraciones de extensores de wifi",
    description:
      "Configuramos tus extensores de WiFi para garantizar una señal fuerte y estable en todos los rincones de tu hogar, eliminando las zonas muertas y mejorando tu experiencia de navegación.",
    images: {
      imagenAvif:
        "/imgs/our-brands/our-services/Configuraciones-de-extensores-wifi.avif",
      imagenWebp:
        "/imgs/our-brands/our-services/Configuraciones-de-extensores-wifi.webp",
      imagenJpg:
        "/imgs/our-brands/our-services/Configuraciones-de-extensores-wifi.jpg",
      imagenAvifDesktop:
        "/imgs/our-brands/our-services/Configuraciones-de-extensores-wifi-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-brands/our-services/Configuraciones-de-extensores-wifi-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-brands/our-services/Configuraciones-de-extensores-wifi-laptop.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    name: "Instalación de cámaras de videovigilancia",
    description:
      "Nos encargamos de la instalación y configuración de cámaras de seguridad, asegurando un monitoreo eficiente y brindándote la tranquilidad de proteger lo que más valoras.",
    images: {
      imagenAvif:
        "/imgs/our-brands/our-services/Instalación-de-camaras-de-videovigilancia.avif",
      imagenWebp:
        "/imgs/our-brands/our-services/Instalación-de-camaras-de-videovigilancia.webp",
      imagenJpg:
        "/imgs/our-brands/our-services/Instalación-de-camaras-de-videovigilancia.jpg",
      imagenAvifDesktop:
        "/imgs/our-brands/our-services/Instalación-de-camaras-de-videovigilancia-laptop.avif",
      imagenWebpDesktop:
        "/imgs/our-brands/our-services/Instalación-de-camaras-de-videovigilancia-laptop.webp",
      imagenJpgDesktop:
        "/imgs/our-brands/our-services/Instalación-de-camaras-de-videovigilancia-laptop.jpg",
    },
  },
];

export const incentives = [
  {
    id: "crypto.randomUUID()",
    title: "Calidad garantizada en cada compra.",
    description:
      "Disfruta de la tranquilidad de saber que cada producto ha sido cuidadosamente seleccionado para ofrecerte lo mejor en tecnología.",
    icon: CircleCheckBig,
    titleModal: "Productos con excelencia asegurada.",
    descriptionModal:
      "Confía en nuestra selección de productos premium que cumplen con los más altos estándares de calidad, brindándote confianza en cada compra.",
    modalTitle: "Explora la calidad de tus productos.",
  },
  {
    id: "crypto.randomUUID()",
    title: "Asesoría experta y personalizada.",
    description:
      "Nuestro equipo de especialistas está aquí para guiarte en cada paso, asegurando que encuentres el producto ideal para tus necesidades.",
    icon: UserCheck,
    titleModal: "Guía experta a tu disposición.",
    descriptionModal:
      "Nuestro equipo especializado te acompaña en cada elección, garantizando que encuentres lo que realmente necesitas.",
    modalTitle: "Consulta con nuestros expertos.",
  },
  {
    id: "crypto.randomUUID()",
    title: "Tecnología de vanguardia a tu alcance.",
    description:
      "Accede a las últimas innovaciones en el mundo de la electrónica, todo en un solo lugar y a precios que no podrás resistir.",
    icon: Cpu,
    titleModal: "Innovación tecnológica al mejor precio.",
    descriptionModal:
      "Explora lo último en tecnología de punta con opciones accesibles que te mantienen al día con las tendencias más recientes.",
    modalTitle: "Descubre la mejor tecnología disponible.",
  },
  {
    id: "crypto.randomUUID()",
    title: "Precios que se ajustan a tu bolsillo.",
    description:
      "Descubre nuestras ofertas y promociones que hacen que la tecnología de alta calidad sea accesible para todos.",
    icon: Tag,
    titleModal: "Descuentos pensados para ti.",
    descriptionModal:
      "Aprovecha precios que se adaptan a tu presupuesto sin sacrificar la calidad que mereces.",
    modalTitle: "Encuentra precios que te sorprenderán.",
  },
  {
    id: "crypto.randomUUID()",
    title: "Compra con confianza y seguridad.",
    description:
      "Nuestra plataforma está diseñada para brindarte una experiencia de compra segura, con opciones de pago flexibles y protección de tus datos.",
    icon: ShieldCheck,
    titleModal: "Protección total en cada transacción.",
    descriptionModal:
      "Compra tranquilo sabiendo que tus datos y pagos están resguardados con nuestros altos estándares de seguridad.",
    modalTitle: "Confianza y seguridad en cada compra.",
  },
  {
    id: "crypto.randomUUID()",
    title: "Envíos rápidos y confiables.",
    description:
      "Sabemos que no puedes esperar para disfrutar de tus nuevos productos, por eso nos aseguramos de que lleguen a tus manos en el menor tiempo posible.",
    icon: Truck,
    titleModal: "Entrega veloz y segura",
    descriptionModal:
      "Obtén tus productos en tiempo récord con nuestro servicio de envío eficiente y fiable, porque sabemos que lo urgente no puede esperar.",
    modalTitle: "Entrega rápida y confiable.",
  },
  {
    id: "crypto.randomUUID()",
    title: "Atención al cliente que supera tus expectativas.",
    description:
      "Estamos disponibles para resolver tus dudas y asistirte en cualquier momento, porque tu satisfacción es nuestra misión principal.",
    icon: Headset,
    titleModal: "Soporte que siempre está a tu lado.",
    descriptionModal:
      "Resolvemos todas tus inquietudes con rapidez y eficacia, porque tu comodidad es nuestra prioridad.",
    modalTitle: "Atención al cliente excepcional.",
  },
  {
    id: "crypto.randomUUID()",
    title: "Amplia variedad para todos los gustos",
    description:
      "Desde los gadgets más populares hasta los accesorios más específicos, nuestra selección cubre todas tus necesidades tecnológicas.",
    icon: Grid2x2Check,
    titleModal: "Diversidad tecnológica sin igual",
    descriptionModal:
      "Encuentra todo lo que buscas, desde lo más común hasta lo más exclusivo, en nuestra extensa colección de tecnología.",
    modalTitle: "Elige entre una amplia variedad de productos",
  },
  {
    id: "crypto.randomUUID()",
    title: "Una experiencia de compra fluida y sin complicaciones",
    description:
      "Hemos simplificado cada paso para que puedas encontrar, comparar y comprar tus productos electrónicos de manera rápida y sencilla.",
    icon: ShoppingCart,
    titleModal: "Compra sin estrés",
    descriptionModal:
      "Disfruta de un proceso de compra optimizado para que encuentres lo que buscas con facilidad y sin contratiempos.",
    modalTitle: "Compra de manera fácil y rápida",
  },
  {
    id: "crypto.randomUUID()",
    title: "Garantía de satisfacción total",
    description:
      "Queremos que estés completamente feliz con tu compra, por eso ofrecemos políticas de devolución y cambios que te respaldan en todo momento.",
    icon: Smile,
    titleModal: "Tu felicidad, nuestra prioridad",
    descriptionModal:
      "Si algo no sale como esperabas, nuestra política de satisfacción te asegura soluciones rápidas y sin complicaciones.",
    modalTitle: "Garantía total de satisfacción.",
  },
];
