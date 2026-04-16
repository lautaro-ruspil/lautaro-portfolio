export interface DemoCredentials {
    user: string | null;
    pass: string;
}

export interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    highlights?: string[];
    stack: string[];
    demo?: string;
    demoCredentials?: DemoCredentials;
    demoLoginPath?: string;
    repo: string;
    repoBackend?: string;
    badge?: string;
    featured?: boolean;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "leancuts",
        title: "LeanCuts",
        tagline: "SaaS para barberías — de cero a producción",
        description:
            "Plataforma completa que digitaliza la operación de barberías: galería de cortes con asesoría, sistema de fidelización con puntos y QR de canje, y panel admin con métricas en tiempo real. Diseñada para que el barbero gestione todo desde el celular sin depender de papel ni WhatsApp.",
        highlights: [
            "Auth con JWT, roles (admin/cliente) y flujos diferenciados",
            "Sistema de fidelización con acumulación de puntos y canje por QR",
            "Panel admin con métricas de clientes, cortes y canjes en tiempo real",
            "Deploy completo: frontend en Firebase, backend en Railway, DB en MySQL",
        ],
        stack: ["React", "Vite", "CSS Modules", "NestJS", "MySQL", "Firebase"],
        demo: "https://leancutss.web.app/",
        demoCredentials: { user: "demo@leancuts.com", pass: "demo1234" },
        repo: "https://github.com/lautaro-ruspil/leancutss-front-end",
        repoBackend: "https://github.com/lautaro-ruspil/leancutss-back-end",
        badge: "Full Stack",
        featured: true,
        image: "/previews/leancuts.webp",
    },
    {
        id: "mediturn",
        title: "Mediturn",
        tagline: "SaaS para clínicas — de cero a producción",
        description:
            "Sistema de gestión de turnos médicos con tres flujos independientes: pacientes reservan turnos paso a paso, médicos gestionan su agenda, y administradores controlan todo desde un panel centralizado con métricas. Pensado para eliminar la gestión manual por teléfono en clínicas pequeñas.",
        highlights: [
            "Auth con JWT y tres roles: paciente, médico y administrador",
            "Reserva de turnos paso a paso con selección de especialidad, médico y horario",
            "Panel admin con métricas de turnos, ocupación y pacientes activos",
            "Arquitectura full stack: frontend React + backend NestJS + MySQL + deploy en Railway",
        ],
        stack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "NestJS",
            "MySQL",
            "Firebase",
            "Railway",
        ],
        demo: "https://mediturn.web.app/",
        demoCredentials: {
            user: "paciente1@meditur.com",
            pass: "password1234",
        },
        repo: "https://github.com/lautaro-ruspil/mediturn-frontend",
        repoBackend: "https://github.com/lautaro-ruspil/mediturn-backend",
        badge: "Full Stack",
        image: "/previews/mediturn.webp",
    },
    {
        id: "menu-qr",
        title: "MenuQR",
        tagline: "Menú digital con panel admin y generación de QR",
        description:
            "App para restaurantes que reemplaza el menú en papel: los clientes escanean un QR y ven el menú actualizado al instante. El dueño gestiona productos, categorías y configuración desde un panel admin protegido. Estado global con Zustand y persistencia automática.",
        highlights: [
            "Menú público responsivo accesible por QR desde cualquier dispositivo",
            "Panel admin con CRUD completo de productos y categorías",
            "Estado global con Zustand y persistencia en localStorage",
        ],
        stack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Zustand",
            "React Router",
            "qrcode.react",
        ],
        demoLoginPath: "/admin",
        demo: "https://menu-qr-plantilla.web.app",
        demoCredentials: { user: null, pass: "admin1234" },
        repo: "https://github.com/lautaro-ruspil/menu-qr-plantilla",
        badge: "Frontend",
        image: "/previews/menu-qr.webp",
    },
    {
        id: "analytics-dashboard",
        title: "Analytics Dashboard",
        tagline: "KPIs en tiempo real para e-commerce",
        description:
            "Dashboard interactivo para e-commerce que visualiza ventas, tráfico y métricas clave con gráficos dinámicos y modo oscuro. Datos actualizados sin recarga, componentes reutilizables y arquitectura pensada para extender fácilmente con nuevas métricas.",
        highlights: [
            "Gráficos interactivos con Recharts: barras, líneas y áreas",
            "Modo oscuro nativo con toggle persistente",
            "Componentes modulares y reutilizables para cualquier KPI",
        ],
        stack: ["React", "Vite", "Tailwind CSS", "Recharts"],
        demo: "https://dashboard-analytics-lr.web.app",
        repo: "https://github.com/lautaro-ruspil/analytics-dashboard",
        badge: "Frontend",
        image: "/previews/analytics-dashboard.webp",
    },
    {
        id: "landing-gimnasio",
        title: "Landing Gimnasio",
        tagline: "Template Astro 100% config-driven",
        description:
            "Landing page para gimnasios que se personaliza desde un único archivo de configuración: hero, planes, galería, testimonios, link de WhatsApp y SEO completo con Open Graph. Construida con Astro para máxima velocidad de carga — 100 en Lighthouse Performance.",
        highlights: [
            "100% configurable desde un solo archivo, sin tocar código",
            "SEO completo: Open Graph, meta tags, sitemap automático",
            "Construida con Astro: 0 JavaScript en el cliente, carga instantánea",
        ],
        stack: ["Astro", "Tailwind CSS"],
        demo: "https://gimnasio-plantilla.web.app/",
        repo: "https://github.com/lautaro-ruspil/landing-gimnasio",
        badge: "Frontend",
        image: "/previews/landing-gimnasio.webp",
    },
];
