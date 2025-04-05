
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bell, CheckCheck, AlertTriangle, Info } from "lucide-react";

const Notifications = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-gray-500 mt-1">Gérez vos alertes et notifications</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <CheckCheck size={16} />
          <span>Tout marquer comme lu</span>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="space-y-4">
          <Card className="p-6 flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Info size={20} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Bienvenue sur LocaGest</h3>
                <span className="text-xs text-gray-500">Aujourd'hui</span>
              </div>
              <p className="text-gray-600 mt-1">Découvrez les fonctionnalités de gestion locative de LocaGest. Commencez par ajouter vos premières résidences et appartements.</p>
            </div>
          </Card>
          
          <Card className="p-6 flex items-start gap-4">
            <div className="bg-amber-100 p-2 rounded-full">
              <AlertTriangle size={20} className="text-amber-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Configuration du système</h3>
                <span className="text-xs text-gray-500">Aujourd'hui</span>
              </div>
              <p className="text-gray-600 mt-1">Veuillez compléter la configuration de votre compte pour accéder à toutes les fonctionnalités de l'application.</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Notifications;
