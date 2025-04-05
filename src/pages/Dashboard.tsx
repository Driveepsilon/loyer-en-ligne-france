
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, FileText, CreditCard, BarChart } from "lucide-react";

const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  color 
}: { 
  title: string; 
  value: string | number; 
  description: string; 
  icon: React.ReactNode;
  color: string;
}) => (
  <Card className="p-6 relative overflow-hidden animate-fade-in">
    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full bg-${color}-100 opacity-50`}></div>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
      <div className={`p-3 rounded-lg bg-${color}-100`}>
        {icon}
      </div>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <Button variant="link" size="sm" className={`text-${color}-600 p-0`}>
        Voir détails
      </Button>
    </div>
  </Card>
);

const RecentActivity = () => (
  <Card className="p-6 animate-fade-in">
    <h3 className="font-semibold text-lg mb-4">Activité Récente</h3>
    <div className="space-y-4">
      {[
        { title: "Nouveau locataire ajouté", date: "Il y a 2 heures", description: "Adam Dupont a signé un bail pour l'appartement B204." },
        { title: "Paiement reçu", date: "Il y a 3 heures", description: "Le loyer de Martin Sophie a été reçu pour Avril 2025." },
        { title: "Notification d'expiration", date: "Il y a 5 heures", description: "Le bail de Lucas Emma expire dans 30 jours." },
        { title: "Maintenance prévue", date: "Il y a 1 jour", description: "Maintenance prévue pour Les Oliviers, appartement A102." }
      ].map((activity, index) => (
        <div key={index} className="flex items-start pb-3 border-b last:border-0 border-gray-100">
          <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2"></div>
          <div>
            <div className="flex justify-between">
              <h4 className="font-medium">{activity.title}</h4>
              <span className="text-xs text-gray-500">{activity.date}</span>
            </div>
            <p className="text-sm text-gray-600 mt-0.5">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
    <Button variant="outline" size="sm" className="w-full mt-4">
      Voir toutes les activités
    </Button>
  </Card>
);

const NextActions = () => (
  <Card className="p-6 animate-fade-in">
    <h3 className="font-semibold text-lg mb-4">Actions à Venir</h3>
    <div className="space-y-3">
      {[
        { title: "Renouvellement de baux", count: 3, deadline: "Cette semaine" },
        { title: "Appels de loyers", count: 12, deadline: "Demain" },
        { title: "Réception de paiements", count: 8, deadline: "En attente" },
        { title: "Documents à signer", count: 5, deadline: "Aujourd'hui" }
      ].map((action, index) => (
        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
          <div>
            <h4 className="font-medium">{action.title}</h4>
            <p className="text-xs text-gray-500">{action.deadline}</p>
          </div>
          <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
            {action.count}
          </div>
        </div>
      ))}
    </div>
    <Button variant="outline" size="sm" className="w-full mt-4">
      Gérer les actions
    </Button>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tableau de Bord</h1>
        <p className="text-gray-500 mt-1">Bienvenue sur votre plateforme de gestion locative.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Propriétés" 
          value={24} 
          description="Total des unités" 
          icon={<Building size={20} className="text-blue-600" />}
          color="blue"
        />
        <DashboardCard 
          title="Locataires" 
          value={18} 
          description="Taux d'occupation 75%" 
          icon={<Users size={20} className="text-green-600" />}
          color="green"
        />
        <DashboardCard 
          title="Contrats" 
          value={22} 
          description="2 expirent ce mois-ci" 
          icon={<FileText size={20} className="text-purple-600" />}
          color="purple"
        />
        <DashboardCard 
          title="Revenus" 
          value="27 500 €" 
          description="Ce mois" 
          icon={<CreditCard size={20} className="text-amber-600" />}
          color="amber"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <NextActions />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Aperçu Financier</h3>
            <Button variant="outline" size="sm">
              Filtres
            </Button>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-md bg-gray-50">
            <div className="text-center">
              <BarChart className="w-12 h-12 text-gray-400 mx-auto" />
              <p className="mt-2 text-sm text-gray-500">Graphique des revenus et dépenses</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
