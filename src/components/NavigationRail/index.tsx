import "@material/web/icon/icon.js"

import { RailContainer, NavItem, LogoutButton } from "./styles"
import { useCallback, useState } from "react"

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
}

const navItems: NavItemProps[] = [
  { icon: "draft_orders", label: "O.S.", path:"http://localhost:5173/GeralServiceOrder" },
  { icon: "account_circle", label: "Clientes", path:"http://localhost:5173/GeralClient" },
  { icon: "analytics", label: "Relatório", path:"http://localhost:5173/Report" },
  { icon: "description", label: "Docs", path:"http://localhost:5173" },
];

export function NavigationRail() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleNavClick = useCallback((index: number) => {
      setActiveIndex(index);
      window.location.href = navItems[index].path;
    }, []);
  
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

        <LogoutButton>
            <md-icon className="icon">logout</md-icon>
        </LogoutButton>
      </RailContainer>
    );
  }
  