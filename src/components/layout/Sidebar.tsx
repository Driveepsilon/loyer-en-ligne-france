
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Building, 
  Users, 
  FileText, 
  DollarSign, 
  BarChart, 
  FolderArchive, 
  Bell,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  submenu?: { title: string; path: string }[];
}

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    properties: true,
    contracts: false,
    finances: false,
  });

  const menuItems: MenuItem[] = [
    {
      title: "Tableau de Bord",
      path: "/",
      icon: <Home size={20} />,
    },
    {
      title: "Propriétés",
      path: "#",
      icon: <Building size={20} />,
      submenu: [
        { title: "Résidences", path: "/residences" },
        { title: "Appartements", path: "/apartments" },
      ],
    },
    {
      title: "Contacts",
      path: "#",
      icon: <Users size={20} />,
      submenu: [
        { title: "Propriétaires", path: "/owners" },
        { title: "Locataires", path: "/tenants" },
      ],
    },
    {
      title: "Contrats",
      path: "#",
      icon: <FileText size={20} />,
      submenu: [
        { title: "Baux", path: "/leases" },
        { title: "Signature", path: "/signatures" },
      ],
    },
    {
      title: "Finances",
      path: "#",
      icon: <DollarSign size={20} />,
      submenu: [
        { title: "Loyers", path: "/rent" },
        { title: "Charges", path: "/charges" },
        { title: "Quittances", path: "/receipts" },
      ],
    },
    {
      title: "Reporting",
      path: "/reporting",
      icon: <BarChart size={20} />,
    },
    {
      title: "Documents",
      path: "/documents",
      icon: <FolderArchive size={20} />,
    },
    {
      title: "Notifications",
      path: "/notifications",
      icon: <Bell size={20} />,
    },
  ];

  const toggleSubmenu = (key: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getSubmenuKeys: Record<string, string> = {
    "/residences": "properties",
    "/apartments": "properties",
    "/owners": "contacts",
    "/tenants": "contacts",
    "/leases": "contracts",
    "/signatures": "contracts",
    "/rent": "finances",
    "/charges": "finances",
    "/receipts": "finances",
  };

  // Assurez-vous que les sous-menus sont ouverts si la page active est dans ce sous-menu
  useState(() => {
    for (const [path, key] of Object.entries(getSubmenuKeys)) {
      if (location.pathname === path && !expandedItems[key]) {
        setExpandedItems((prev) => ({ ...prev, [key]: true }));
      }
    }
  });

  return (
    <div className="bg-sidebar min-h-screen w-64 text-sidebar-foreground flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-white">LocaGest</h1>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.submenu ? (
                <div className="mb-2">
                  <button
                    onClick={() => toggleSubmenu(item.title.toLowerCase())}
                    className={cn(
                      "flex items-center w-full rounded-md p-2 text-sm group transition-colors hover:bg-sidebar-accent",
                      expandedItems[item.title.toLowerCase()] && "bg-sidebar-accent"
                    )}
                  >
                    <span className="mr-2 text-sidebar-foreground opacity-70">
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                    <span className="ml-auto">
                      {expandedItems[item.title.toLowerCase()] ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </span>
                  </button>
                  {expandedItems[item.title.toLowerCase()] && (
                    <ul className="mt-1 ml-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.path}
                            className={cn(
                              "flex items-center rounded-md p-2 text-sm transition-colors hover:bg-sidebar-accent",
                              isActive(subItem.path) &&
                                "bg-sidebar-primary text-sidebar-primary-foreground"
                            )}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center rounded-md p-2 text-sm transition-colors hover:bg-sidebar-accent",
                    isActive(item.path) &&
                      "bg-sidebar-primary text-sidebar-primary-foreground"
                  )}
                >
                  <span className="mr-2 text-sidebar-foreground opacity-70">
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 text-xs text-sidebar-foreground opacity-60">
        LocaGest v1.0 © 2025
      </div>
    </div>
  );
};

export default Sidebar;
