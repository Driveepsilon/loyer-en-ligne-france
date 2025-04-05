
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "lucide-react";

const Reporting = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reporting</h1>
          <p className="text-gray-500 mt-1">Analyses et rapports financiers</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <span>Exporter</span>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 h-64 flex flex-col items-center justify-center">
            <BarChart size={48} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold">Revenus mensuels</h2>
            <p className="text-gray-500 mt-2 text-center">
              Le graphique des revenus mensuels sera disponible prochainement.
            </p>
          </Card>
          
          <Card className="p-6 h-64 flex flex-col items-center justify-center">
            <LineChart size={48} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold">Tendances annuelles</h2>
            <p className="text-gray-500 mt-2 text-center">
              L'analyse des tendances annuelles sera disponible prochainement.
            </p>
          </Card>
          
          <Card className="p-6 h-64 flex flex-col items-center justify-center">
            <PieChart size={48} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold">Répartition des charges</h2>
            <p className="text-gray-500 mt-2 text-center">
              La répartition des charges sera disponible prochainement.
            </p>
          </Card>
          
          <Card className="p-6 h-64 flex flex-col items-center justify-center">
            <BarChart size={48} className="text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold">Taux d'occupation</h2>
            <p className="text-gray-500 mt-2 text-center">
              L'analyse du taux d'occupation sera disponible prochainement.
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Reporting;
