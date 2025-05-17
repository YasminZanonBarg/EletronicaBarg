import "@material/web/icon/icon.js";
import { RailContainer, NavItem, LogoutButton } from "./styles";
import { useCallback, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
}

const navItems: NavItemProps[] = [
  { icon: "draft_orders", label: "O.S.", path: "/GeralServiceOrder" },
  { icon: "account_circle", label: "Clientes", path: "/GeralClient" },
  { icon: "analytics", label: "Relatório", path: "/Report" },
  {
    icon: "description",
    label: "Docs",
    path: "https://1drv.ms/w/c/af0a0d99fb6fb028/EbXQwJ_8ykFBr-njIfWtVV0Bk5UyEFJ0YNMziSCfv3C6VA?e=sWRd9c",
  },
];

export function NavigationRail() {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveIndex = () => {
    if (location.pathname.startsWith("/GeralServiceOrder")) return 0;
    if (location.pathname.startsWith("/GeralClient")) return 1;
    if (location.pathname.startsWith("/Report")) return 2;
    return -1; // Docs é link externo, não está baseado em pathname
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex());

  const handleNavClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      const path = navItems[index].path;

      // Se for um link externo, abrir em nova aba
      if (path.startsWith("http")) {
        window.open(path, "_blank");
      } else {
        navigate(path);
      }
    },
    [navigate]
  );

  useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [location.pathname]);

  return (
    <RailContainer>
      {navItems.map((item, index) => (
        <NavItem
          key={item.path}
          active={index === activeIndex}
          onClick={() => handleNavClick(index)}
        >
          <md-icon className="icon">{item.icon}</md-icon>
          <span className="label">{item.label}</span>
        </NavItem>
      ))}

      <LogoutButton
        onClick={() => {
          const confirmLogout = window.confirm("Tem certeza que deseja sair?");
          if (confirmLogout) {
            localStorage.removeItem("token");
            navigate("/");
          }
        }}
      >
        <md-icon className="icon">logout</md-icon>
      </LogoutButton>
    </RailContainer>
  );
}