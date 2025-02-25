import "@material/web/icon/icon.js";
import { RailContainer, NavItem, LogoutButton } from "./styles";
import { useCallback, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Importando useLocation e useNavigate

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
}

const navItems: NavItemProps[] = [
  { icon: "draft_orders", label: "O.S.", path:"/GeralServiceOrder" },
  { icon: "account_circle", label: "Clientes", path:"/GeralClient" },
  { icon: "analytics", label: "Relatório", path:"/Report" },
  { icon: "description", label: "Docs", path:"/" },
];

export function NavigationRail() {
  const location = useLocation(); // Pegando a URL atual
  const navigate = useNavigate(); // Para navegação programática
  
  // Função para determinar qual aba está ativa
  const getActiveIndex = () => {
    // Verificando se a URL atual pertence à aba "O.S." ou qualquer página filha relacionada
    if (location.pathname.startsWith("/GeralServiceOrder")) {
      return 0; // A aba O.S. deve ser ativa
    }
    if (location.pathname.startsWith("/GeralClient")) {
      return 1; // A aba Clientes deve ser ativa
    }
    if (location.pathname.startsWith("/Report")) {
      return 2; // A aba Relatório deve ser ativa
    }
    if (location.pathname === "/") {
      return 3; // A aba Docs deve ser ativa
    }
    return -1; // Caso não tenha nenhum índice correspondente
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex()); // Estado da aba ativa

  const handleNavClick = useCallback((index: number) => {
    setActiveIndex(index);
    navigate(navItems[index].path); // Navegar programaticamente para o path da aba
  }, [navigate]);

  // Atualiza o estado da aba ativa quando a URL mudar
  useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [location.pathname]);

  return (
    <RailContainer>
      {navItems.map((item, index) => (
        <NavItem
          key={item.path}
          active={index === activeIndex} // Marca a aba como ativa
          onClick={() => handleNavClick(index)} // Função de clique para navegar
        >
          <md-icon className="icon">{item.icon}</md-icon>
          <span className="label">{item.label}</span>
        </NavItem>
      ))}

      <LogoutButton>
        <md-icon className="icon">logout</md-icon>
      </LogoutButton>
    </RailContainer>
  );
}