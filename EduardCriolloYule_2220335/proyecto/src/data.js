const menuTree = {
  title: "Inicio",
  link: "/",
  component: "Home",
  children: [
    {
      title: "Perfil",
      link: "/perfil",
      component: "Profile",
      children: [
        {
          title: "Editar Perfil",
          link: "/perfil/editar",
          component: "EditProfile",
          children: []
        },
        {
          title: "Historial",
          link: "/perfil/historial",
          component: "ProfileHistory",
          children: []
        }
      ]
    },
    {
      title: "Configuración",
      link: "/configuracion",
      component: "Settings",
      children: [
        {
          title: "Cuenta",
          link: "/configuracion/cuenta",
          component: "AccountSettings",
          children: []
        },
        {
          title: "Privacidad",
          link: "/configuracion/privacidad",
          component: "PrivacySettings",
          children: []
        },
        {
          title: "Notificaciones",
          link: "/configuracion/notificaciones",
          component: "NotificationSettings",
          children: []
        },
        {
          title: "Apariencia",
          link: "/configuracion/apariencia",
          component: "AppearanceSettings",
          children: []
        }
      ]
    },
    {
      title: "Ayuda",
      link: "/ayuda",
      component: "Help",
      children: [
        {
          title: "FAQ",
          link: "/ayuda/faq",
          component: "FAQ",
          children: []
        },
        {
          title: "Contacto",
          link: "/ayuda/contacto",
          component: "Contact",
          children: []
        },
        {
          title: "Tutoriales",
          link: "/ayuda/tutoriales",
          component: "Tutorials",
          children: []
        }
      ]
    },
    {
      title: "Acerca de",
      link: "/acerca",
      component: "About",
      children: [
        {
          title: "Equipo",
          link: "/acerca/equipo",
          component: "Team",
          children: []
        },
        {
          title: "Versión",
          link: "/acerca/version",
          component: "Version",
          children: []
        }
      ]
    }
  ]
};

export default menuTree;